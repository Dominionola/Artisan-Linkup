import Image from "next/image";

export default function TestimonialCard() {
  return (
    <div className="hidden md:flex md:flex-1 flex-col bg-[url('/assets/setup-image.jpg')] bg-cover bg-center items-center justify-center rounded-lg min-h-[200px]">
      <h4 className="text-white text-2xl font-bold px-4 py-2 rounded">
        Tested Trusted, Reliable <br /> Without Stress
      </h4>
      <div className="flex items-center gap-4 bg-white h-[300px] md:max-w-[300px] lg:max-w-[400px] rounded-lg shadow p-4 mt-6">
        <Image
          src="/assets/ola.png"
          alt="Ola"
          width={500}
          height={60}
          className="rounded-full object-cover "
        />
        <p className="text-gray-700 text-base leading-relaxed">
          Artisanlinkup Solution provided me with a seamless and faster way to
          get connected with clients and create a platform where I can showcase
          my skills to the world.
        </p>
      </div>
    </div>
  );
}
