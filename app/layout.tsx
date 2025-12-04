import type { Metadata } from "next";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
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
        className={`${montserrat.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        <Navbar />
        {children}
         <Footer />
      </body>
    </html>
  );
}
