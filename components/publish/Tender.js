import Image from "next/image";
import Link from "next/link";
import React from "react";
const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

export const Tender = () => {
  return (
    <div className="container grid items-center content-center justify-center grid-cols-1   mx-auto lg:grid-cols-2">
      <Link href="">
        <a>
          <div className="lg:w-[460px] lg:h-[231px] w-auto h-auto shadow-lg rounded-xl mb-14 cursor-pointer">
            <div>
              <Image
                loader={myLoader}
                src="/photos/3183150/pexels-photo-3183150.jpeg"
                alt="Evolov"
                width="460"
                height="231"
                className="rounded-lg"
              />
            </div>

            <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
              Big Projects
            </div>
          </div>
        </a>
      </Link>

      <Link href="">
        <a>
          <div className="lg:w-[460px] lg:h-[231px] w-auto h-auto shadow-lg rounded-xl mb-14 cursor-pointer">
            <div>
              <Image
                loader={myLoader}
                src="/photos/6615076/pexels-photo-6615076.jpeg"
                alt="Evolov"
                width="460"
                height="231"
                className="rounded-lg"
              />
            </div>
            <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
              Small Projects
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};
