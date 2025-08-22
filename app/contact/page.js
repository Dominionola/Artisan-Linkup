import Image from "next/image";
import NewsLetter from "@/app/components/NewsLetter";
export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <div className="relative h-[70vh] md:h-150 w-full bg-[url('/assets/contact-hero.png')] bg-no-repeat bg-cover bg-center md:bg-top p-6 flex items-end justify-start">
        <h1 className=" text-white text-3xl md:text-5xl font-bold max-w-5xl">
          Contact Us
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 gap-4 flex flex-col md:flex-row items-start">
        <div>
          <p>
            We are here to help you connect, create and collaborate. Whether you
            are an artisan looking to grow your network or a customer serching
            for trusted profesionals, we will love to hear from you, Got a
            question, suggestion, or issue? let&apos;s talk
          </p>

          <div>
            {" "}
            <p className="font-medium flex gap-2 mt-4">
              <Image
                src="/icons/envelope.svg"
                alt="Email Us"
                width={24}
                height={24}
              />
              Email Us
            </p>
            <p>support@artisanlinkup.com</p>
            <p>Reach out anytime, we will respond within 24 hours</p>
          </div>

          <div>
            <p className="font-medium flex gap-2 mt-4">
              <Image
                src="/icons/phone.svg"
                alt="Call or WhatsApp"
                width={24}
                height={24}
              />
              Call or WhatsApp
            </p>
            <p>+234xxxxxxxxx</p>
            <p>Available Monday to Friday, 9am-5pm (WAT)</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-medium flex gap-2 mt-4">
              <Image
                src="/icons/messages.png"
                alt="Chat with Us"
                width={24}
                height={24}
              />
              Live chat
            </p>
            <p>chat with us directly though our website for quick support.</p>

            <div className="flex flex-col gap-2">
              <p>Follow us for Updates and Opportunities</p>
              <span className="flex gap-4">
                <Image
                  src="/icons/facebook.svg"
                  alt="Facebook link"
                  width={24}
                  height={24}
                />
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram link"
                  width={24}
                  height={24}
                />
                <Image
                  src="/icons/x.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
                <Image
                  src="/icons/linkedin.svg"
                  alt="LinkedIn link"
                  width={24}
                  height={24}
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[70vh] md:h-[40rem] w-full bg-[url('/assets/contact-potter.png')] bg-no-repeat bg-cover bg-center md:bg-top p-6 flex flex-col items-center justify-center text-white max-w-5xl mx-auto rounded-3xl text-center">
        <h3 className="pb-4 text-3xl font-bold md:text-5xl lg:text-6xl leading-tight">
          Engage an Artisan <br />
          and Have a Relaxed <br />
          Mind
        </h3>

        <p className="max-w-2xl text-base md:text-lg">
          Experience stress-free comfort on our platform and enjoy affordable
          pricing.
        </p>
      </div>

      <div>
        <NewsLetter />
      </div>
    </div>
  );
}
