import type { Metadata } from "next";
import MainComponent from './components/main';

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Nghia Duong's portfolio site",
};

export default function Index() {
  return (
    <div className="w-full h-full">
      <MainComponent />
    </div>
  );
}
