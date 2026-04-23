import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000";

// Evaluering bruker flere LLM-kall og kan ta over 60 sekunder.
export const maxDuration = 300;

async function proxyRequest(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
): Promise<NextResponse | Response> {
  const { path } = await params;
  const targetPath = path.join("/");
  const url = new URL(request.url);
  const search = url.search;
  const target = `${BACKEND_URL}/api/${targetPath}${search}`;

  const contentType = request.headers.get("content-type");

  const headers: Record<string, string> = {};
  if (contentType) {
    headers["Content-Type"] = contentType;
  }

  try {
    const requestBody =
      request.method !== "GET" && request.method !== "HEAD"
        ? await request.arrayBuffer()
        : undefined;

    const response = await fetch(target, {
      method: request.method,
      headers,
      body: requestBody,
    });

    // SSE passthrough: stream response directly without buffering
    const respContentType = response.headers.get("content-type");
    if (respContentType?.includes("text/event-stream")) {
      return new Response(response.body, {
        status: response.status,
        headers: {
          "content-type": "text/event-stream",
          "cache-control": "no-cache",
          "connection": "keep-alive",
        },
      });
    }

    // Standard buffered response
    const responseBody = await response.arrayBuffer();
    const responseHeaders = new Headers();
    if (respContentType) {
      responseHeaders.set("content-type", respContentType);
    }

    return new NextResponse(responseBody, {
      status: response.status,
      headers: responseHeaders,
    });
  } catch {
    return NextResponse.json(
      { error: "Backend unavailable" },
      { status: 502 },
    );
  }
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ path: string[] }> },
) {
  return proxyRequest(request, context);
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ path: string[] }> },
) {
  return proxyRequest(request, context);
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ path: string[] }> },
) {
  return proxyRequest(request, context);
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ path: string[] }> },
) {
  return proxyRequest(request, context);
}
