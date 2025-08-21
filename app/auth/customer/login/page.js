// app/login/artisan/page.js
import Image from "next/image";
import LoginForm from "@/app/components/LoginForm";

export default function ArtisanLoginPage() {
  return (
    <div className="flex justify-center items-center md:bg-black h-full w-full">
      <div className="bg-white flex flex-col items-center justify-center p-10 gap-8 border-gray-200 rounded-lg w-full md:w-[500px]">
        <h2 className="text-xl font-semibold">Log in to Find Artisan</h2>
        <LoginForm role="customer" />
      </div>
    </div>
  );
}
