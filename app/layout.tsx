import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Correct import for Inter
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThreeBackground } from "@/components/3d/ThreeBackground";
import { ThemeProvider } from "@/components/ThemeProvider";

import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" }); // Correct instantiation

export const metadata: Metadata = {
  title: "Lutfi Indra Nur Praditya | Portfolio",
  description: "Personal Portfolio of Lutfi Indra Nur Praditya - Informatics Student, Data Scientist, Web & Mobile Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased selection:bg-purple-500/30 selection:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CustomCursor />
          <ThreeBackground />
          <Navbar />
          <main className="relative z-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
