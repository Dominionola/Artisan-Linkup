"use client";
import { useSession } from "next-auth/react";

export default function CustomerDashboard() {
  const { data: session } = useSession();
  // If session exists, use Google name; else, use local form name
  const localName = typeof window !== "undefined" ? localStorage.getItem("fullName") : null;
  const userName = session?.user?.name || localName || "User";

  return <div className="pt-16">Welcome {userName}</div>;
}
