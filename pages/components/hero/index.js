import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className=" max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 ">
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="grow  ">
          <Image
            src="/image-web-3-mobile.jpg"
            alt="img"
            height={900}
            width={900}
            className="flex sm:hidden object-cover"
            priority={false}
          />
          <Image
            src="/image-web-3-desktop.jpg"
            alt="img"
            height={900}
            width={900}
            className="hidden sm:flex object-cover"
            priority={false}
          />
          <div className="flex flex-col sm:flex-row mt-5 gap-5">
            <div className="basis-1/2  ">
              <h1 className="font-bold text-5xl sm:text-7xl">
                The Bright Future of Web 3.0?
              </h1>
            </div>
            <div className="basis-1/2  ">
              {/*  */}
              <div className="flex flex-col gap-10">
                <div>
                  <h1 className="text-slate-500">
                    We dive into the next evolution of the web that claims to
                    put the power of the platforms back into the hands of the
                    people. But is it really fulfilling its promise?
                  </h1>
                </div>
                <div>
                  <Link href="/">
                    <button className="bg-red-400 px-6 py-3 text-white font-bold tracking-wide hover:bg-red-300">
                      Read more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-2/3 bg-slate-900 p-5">
          <h1 className="font-bold text-4xl text-yellow-600">New</h1>
          <div className="flex flex-col divide-y">
            <div className="flex flex-col gap-2 text-white py-7">
              <h1 className="text-xl font-bold">Hydrogen VS Electric Cars</h1>
              <p className="text-sm text-slate-300">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <div className="flex flex-col gap-2 text-white py-7">
              <h1 className="text-xl font-bold">
                The Downsides of AI Artistry
              </h1>
              <p className="text-sm text-slate-300">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <div className="flex flex-col gap-2 text-white py-7">
              <h1 className="text-xl font-bold">Is VC Funding Drying Up?</h1>
              <p className="text-sm text-slate-300">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
