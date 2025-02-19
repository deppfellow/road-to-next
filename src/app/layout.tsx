import "./globals.css";
import { homePath, ticketsPath } from "@/route";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Next to Road",
  description: "Next to Road The?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="supports-backdrop-blur:bg-background/60 bg-background/95 fixed left-0 right-0 top-0 z-20 flex w-full justify-between border-b px-8 py-2.5 backdrop-blur">
          <Link href={homePath()} className="text-lg font-bold">
            Home
          </Link>
          <Link href={ticketsPath()}>Tickets</Link>
        </nav>
        <main className="bg-secondary/20 flex min-h-screen flex-1 flex-col overflow-y-auto overflow-x-hidden px-48 py-16">
          {children}
        </main>
      </body>
    </html>
  );
}
