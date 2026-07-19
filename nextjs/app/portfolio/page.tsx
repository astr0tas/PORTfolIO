import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Nghia Duong's portfolio site",
};

export default function Index() {
  return (
    <div className="w-full h-full flex flex-col overflow-x-hidden overflow-y-auto"></div>
  );
}
