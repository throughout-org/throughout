import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Throoout - Smart Software Solutions",
  description: "Throoout is a modern software engineering startup helping businesses build fast, secure, and scalable digital products. Specializing in web apps, mobile apps, APIs, and automation.",
  keywords: ["software development", "web applications", "mobile apps", "API development", "automation", "software engineering"],
  authors: [{ name: "Throoout" }],
  openGraph: {
    title: "Throoout - Smart Software Solutions",
    description: "Modern software engineering startup helping businesses build fast, secure, and scalable digital products.",
    type: "website",
  },
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
        {children}
      </body>
    </html>
  );
}
