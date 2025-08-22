"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SuccessPage() {
  const router = useRouter();

  
  useEffect(() => {
    toast.info("Redirecting...", { position: "top-center", autoClose: 20000 });
    const timer = setTimeout(() => {
      router.push("/customer/dashboard"); // Change this to your desired route
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <ToastContainer />
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <Image
          src="/assets/success.svg"
          alt="Success"
          width={50}
          height={50}
          className="mx-auto mb-4"
        />
        <h2 className="text-xl font-bold mb-3 text-center">Account Created!</h2>
        <p className="text-gray-700 text-center">
          Your account has been successfully created.
        </p>
      </div>
    </div>
  );
}
