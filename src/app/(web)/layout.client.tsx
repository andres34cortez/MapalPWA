"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactNode } from "react";
import { LanguageProvider } from "@/context/LayoutContext";

export default function RootLayoutClient({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <LanguageProvider>
      <Navbar />
      {children}
      <Footer />
    </LanguageProvider>
  );
}
