// app/portal/Redirector.jsx
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify"; // ⬅️ New import

export function Redirector() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");

  useEffect(() => {
    // Show a toast notification right before redirecting
    toast.info("Redirecting...", {
      autoClose: 1000, // Closes automatically after 1 second
      hideProgressBar: true,
    });

    // We use a small delay to make sure the toast is visible
    const timer = setTimeout(() => {
      if (role === "customer") {
        window.location.href = "/customer/profile-setup";
      }

      if (role === "artisan") {
        window.location.href = "/artisan/profile-setup";
      }

      if (!role) {
        window.location.href = "/auth/option";
      }
    }, 1200); // Redirect after 1.2 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, [role]);

  return <div>Redirecting...</div>;
}
