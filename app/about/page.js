import NewsLetter from "../components/NewsLetter";
export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <div className="relative h-[70vh] md:h-150 w-full bg-[url('/assets/about-hero.png')] bg-no-repeat bg-cover bg-center md:bg-top p-6 flex items-end">
        <h1 className=" text-white text-3xl md:text-5xl font-bold max-w-5xl ">
          Contact Us
        </h1>
      </div>
      <div className="max-w-5xl lg:mx-auto  py-4 gap-4 flex flex-col">
        <h3 className="bg-primary flex pl-4 text-white text-lg font-medium py-2">
          About Artisan Linkup
        </h3>
        <p className="px-2 ">
          Welcome to ArtisanLinkUp, your premier platform for connecting with
          verified, skilled artisans and finding the perfect talent for your
          projects. Our mission is simple: to bridge the gap between customers
          seeking quality craftsmanship and talented artisans looking for
          meaningful work. We strive to create a seamless, secure, and
          transparent marketplace where both parties can connect with
          confidence.
        </p>
      </div>

      <div className="relative h-[70vh] md:h-[40rem]  bg-[url('/assets/pottery.png')] bg-no-repeat bg-cover bg-center md:bg-top p-6 flex flex-col items-center justify-center text-white max-w-5xl mx-auto rounded-3xl text-center w-[95%] md:w-full"></div>

      <div className="max-w-5xl lg:mx-auto  py-4 gap-4 flex flex-col">
        <h3 className="bg-primary flex pl-4 text-white text-lg font-medium py-2">
          Why Choose Artisan Linkup
        </h3>
        <ol className=" px-2 flex flex-col gap-4">
          <li>
            <p>
              <span className="font-medium">Verified Artisans:</span> We
              meticulously verify every artisan on our platform, giving you
              peace of mind and ensuring quality service.
            </p>
          </li>
          <li>
            <p>
              <span className="font-medium">Transparency:</span> Access clear
              pricing, read genuine customer reviews, and view portfolios before
              making a decision.
            </p>
          </li>
          <li>
            <p>
              <span className="font-medium">Convenience:</span> Our
              user-friendly website makes it easy to find, connect with, and
              hire artisans from the comfort of your home.
            </p>
          </li>
        </ol>
      </div>
      <NewsLetter />
    </div>
  );
}
