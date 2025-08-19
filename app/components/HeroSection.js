import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative h-[80vh] md:h-150 w-full bg-[url('/hero-img.png')] bg-no-repeat bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 opacity-50"></div>

      <div className="relative z-10 flex h-full flex-col items-center justify-end md:justify-center md:items-start">
        <div className="w-full max-w-[900px] px-4 mx-auto text-white pb-10 md:pb-0 text-center md:text-left">
          <h3 className="pb-3 text-3xl font-bold md:text-5xl lg:text-6xl leading-normal">
            Discover Skilled
            <span className="hidden md:inline">
              <br />
            </span>{" "}
            Local Artisans You
            <span className="hidden md:inline">
              <br />
            </span>{" "}
            Trust
          </h3>
          <p>
            Every artisan on this platform is thoroughly vetted for quality,
            <span className="hidden md:inline">
              <br />
            </span>
            reliability, and professionalism.
          </p>

          <div className="flex items-center justify-center md:justify-start mt-6 gap-2 md:gap-6 text-sm font-semibold text-gray-300 hover:text-white cursor-pointer">
            <p>View More</p>{" "}
            <Image
              src="/Arrow.png"
              alt=""
              width={28}
              height={28}
              className="w-5 md:w-7"
            />
            <Link
              href="/auth/login"
              className="bg-primary py-2 px-4 md:px-7 md:py-1 rounded hover:opacity-80"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
