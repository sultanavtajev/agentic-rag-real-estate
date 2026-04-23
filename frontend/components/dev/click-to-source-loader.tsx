"use client";

import dynamic from "next/dynamic";

const ElementPicker = dynamic(
  () =>
    import("@sultanavtajev/element-picker").then((mod) => mod.ElementPicker),
  { ssr: false },
);

export default function ClickToSourceLoader() {
  if (process.env.NODE_ENV !== "development") return null;
  return <ElementPicker />;
}
