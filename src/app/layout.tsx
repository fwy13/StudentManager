import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Headers from "@/components/Headers";
import SlideBar from "@/components/SlideBar";
import SidebarApp from "@/context/SidebarContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Student Manager",
  description: "App manager mark~",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#9ADE7B" />
      <body className={inter.className}>
        <SidebarApp>
          <SlideBar />
          <Headers />
          {children}
        </SidebarApp>
      </body>
    </html>
  );
}
