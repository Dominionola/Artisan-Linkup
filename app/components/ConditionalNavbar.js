"use client";
import Navbar from "./Navbar";
import NavbarMinimal from "./Navbar-minimal";
import { usePathname } from "next/navigation";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  if (pathname.startsWith("/auth")) {
    return <NavbarMinimal />;
  }
  return <Navbar />;
}
