"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import NavbarSpacer from "@/components/NavbarSpacer";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import BypassNavbar from "@/components/bypass/BypassNavbar";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isBypass = pathname?.startsWith("/bypass");

  if (isBypass) {
    return (
      <>
        <BypassNavbar />
        {children}
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <NavbarSpacer />
      {children}
      <Footer />
      <FloatingActions />
    </>
  );
}
