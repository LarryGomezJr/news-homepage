import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 my-10 ">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="basis-1/3 ">
          <div className="flex flex-row gap-4">
            <div>
              <Image
                src="/image-retro-pcs.jpg"
                alt="retro"
                width={190}
                height={190}
                className="object-cover h-36 w-42 transition transform hover:scale-110 duration-500 cursor-pointer"
                priority={false}
              />
            </div>
            <div className="flex flex-col ">
              <div>
                <h1 className="text-5xl sm:text-6xl font-bold text-slate-400">
                  01
                </h1>
              </div>
              <div>
                <h1 className="font-extrabold text-lg sm:text-xl">
                  Reviving Retro PCs
                </h1>
              </div>
              <div>
                <h1 className="text-base">
                  What happens when old PCs are given modern upgrades?
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/3">
          <div className="flex flex-row gap-4">
            <div className="object-cover">
              <Image
                src="/image-top-laptops.jpg"
                alt="retro"
                width={150}
                height={150}
                className="object-cover h-36 w-42 transition transform hover:scale-110 duration-500 cursor-pointer"
                priority={false}
              />
            </div>
            <div className="flex flex-col">
              <div>
                <h1 className="text-5xl sm:text-6xl font-bold text-slate-400">
                  02
                </h1>
              </div>
              <div>
                <h1 className="font-extrabold text-lg sm:text-xl">
                  Top 10 Laptops of 2022
                </h1>
              </div>
              <div>
                <h1 className="text-base">
                  Our best picks for various needs and budgets.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/3">
          <div className="flex flex-row gap-4">
            <div>
              <Image
                src="/image-gaming-growth.jpg"
                alt="retro"
                width={150}
                height={150}
                className="object-cover h-36 w-42 transition transform hover:scale-110 duration-500 cursor-pointer"
                priority={false}
              />
            </div>
            <div className="flex flex-col">
              <div>
                <h1 className="text-5xl sm:text-6xl font-bold text-slate-400">
                  03
                </h1>
              </div>
              <div>
                <h1 className="font-extrabold text-lg sm:text-xl">
                  The Growth of Gaming
                </h1>
              </div>
              <div>
                <h1 className="text-sm">
                  How the pandemic has sparked fresh opportunities.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
