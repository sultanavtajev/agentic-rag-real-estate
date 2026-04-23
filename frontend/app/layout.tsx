import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/components/nav-bar";
import ClickToSourceLoader from "@/components/dev/click-to-source-loader";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agentic RAG — Eiendomsanalyse",
  description: "Sammenligning av Standard RAG vs Agentic RAG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <NavBar />

          <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6">
            {children}
          </main>

          <footer className="border-t">
            <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
              <p className="text-center text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} Agentic RAG
              </p>
            </div>
          </footer>
        </div>
        <ClickToSourceLoader />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
