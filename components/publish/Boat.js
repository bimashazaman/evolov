import Image from "next/image";
import Link from "next/link";
import React from "react";
const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};


const Boats = () => {
  return (
    <div className="container grid items-center content-center justify-center grid-cols-1  mx-auto lg:grid-cols-2">
    <Link href="">
      <a>
        <div className="lg:w-[460px] lg:h-[231px] w-auto h-auto shadow-lg rounded-xl mb-14 cursor-pointer">
          <div>
            <Image
              loader={myLoader}
              src="/photos/1007836/pexels-photo-1007836.jpeg"
              alt="Evolov"
              width="460"
              height="231"
              className="rounded-lg"
            />
          </div>

          <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
            Buy Boat
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
              src="/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg"
              alt="Evolov"
              width="460"
              height="231"
              className="rounded-lg"
            />
          </div>
          <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
            Private Cruise
          </div>
        </div>
      </a>
    </Link>
  </div>
  )
}

export default Boats