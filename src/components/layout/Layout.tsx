import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ThemeSelector } from "../theme/ThemeSelector";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col gradient-warm transition-colors duration-500">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ThemeSelector />
    </div>
  );
}
