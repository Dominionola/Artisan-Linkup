import Image from "next/image";
import Link from "next/link";

export default function Signupas() {
  return (
    <div className="flex justify-center items-center bg-black h-full w-full">
      <div className="bg-white flex flex-col items-center justify-center p-10 gap-8 rounded-lg shadow-lg w-[50%] md:w-[40%] ">
        <Image
          src="/Artisan-logo.png"
          alt="Artisan Logo"
          width={60}
          height={60}
        />

        <Link
          className="bg-primary text-black text-lg p-2 w-full text-center rounded-4xl hover:opacity-90 transition"
          href="/auth/artisan/signup"
        >
          I am an Artisan
        </Link>
        <Link
          className="bg-primary text-black text-lg  p-2 w-full text-center rounded-4xl hover:opacity-90 transition"
          href="/auth/customer/signup"
        >
          I am a Customer
        </Link>
      </div>
    </div>
  );
}
