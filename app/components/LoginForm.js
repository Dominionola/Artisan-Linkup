import GoogleAuth from "@/app/components/GoogleAuth";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <form className="flex flex-col gap-4 w-full md:w-[85%] max-w-sm">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 rounded-md w-full"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 rounded-md w-full"
        />
        <button
          type="submit"
          name="login"
          className="bg-primary text-white p-2 rounded-md w-full cursor-pointer"
        >
          Login
        </button>
      </form>

      <div className="flex items-center justify-center mt-4 w-[80%] text-base gap-2">
        <hr className="w-full border-t border-gray-400" />
        <p className="text-gray-400 font-bold">or</p>
        <hr className="w-full border-t border-gray-400" />
      </div>

      <div className="flex flex-col items-center justify-center mt-4 w-full">
        <SessionProvider>
          <GoogleAuth />
        </SessionProvider>
      </div>

      <div className="flex flex-col items-center justify-center mt-8 gap-5 ">
        <p>Don&apos;t have an account? </p>
        <Link
          href="./signup"
          className="text-primary border-primary border-2 px-6 py-1 rounded-md"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
