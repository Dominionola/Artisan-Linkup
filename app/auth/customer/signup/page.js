// signup/page.jsx or page.tsx
import Image from "next/image";
import GoogleAuth from "@/app/components/GoogleAuth";
import { SessionProvider } from "next-auth/react";
import { createUser } from "./actions";
import Link from "next/link";

export default async function SignUp({ searchParams }) {
  const params = await searchParams;
  const success = params?.success;
  const error = params?.error;

  return (
    <div className="flex justify-center items-center md:bg-black h-full w-full">
      <div className="bg-white flex flex-col items-center justify-center p-10 gap-8 rounded-lg shadow-lg w-full md:w-[50%]">

        <h1 className="text-2xl md:text-3xl font-medium">
          Sign up to Hire Artisans
        </h1>


        <form action={createUser} className="flex flex-col gap-4 w-[100%]">
          <div className="flex flex-col items-center w-full">
            <input type="hidden" name="role" value="customer" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border p-2 rounded-md w-full "
              required
            />
            <span className="hidden text-xs">
              <Image
                src="/icons/alert.svg"
                alt="Alert icon"
                width={16}
                height={16}
              />{" "}
              Full name is required.
            </span>
          </div>

          <div className="flex flex-col items-center w-full">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border p-2 rounded-md w-full"
              required
            />
            <span className="hidden text-xs">
              <Image
                src="/icons/alert.svg"
                alt="Alert icon"
                width={16}
                height={16}
              />{" "}
              Email address is required
            </span>
          </div>

          <div className="flex flex-col items-center w-full">
            <input
              type="password"
              name="password"
              placeholder="Password (8 or more characters)"
              className="border p-2 rounded-md w-full"
              required
            />
            <span className=" text-xs hidden">
              <Image
                src="/icons/alert.svg"
                alt="Alert icon"
                width={16}
                height={16}
              />{" "}
              Password is required
            </span>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-primary text-white p-2 rounded-md cursor-pointer w-full block md:w-[35%]"
            >
              Create an Account
            </button>
          </div>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="./login" className="text-primary">
              Log in
            </Link>
          </p>
        </form>

        <SessionProvider>
          <GoogleAuth role="customer" />
        </SessionProvider>
      </div>
    </div>
  );
}
