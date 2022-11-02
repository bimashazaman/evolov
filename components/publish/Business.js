import Image from "next/image";
import Link from "next/link";
import React from "react";
const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

const Businesses = () => {
  return (
    <div className="container grid items-center content-center justify-center grid-cols-1 gap-4  mx-auto lg:grid-cols-3">
      <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
        <div>
          <Image
            loader={myLoader}
            src="/photos/288477/pexels-photo-288477.jpeg"
            alt="Evolov"
            width="345"
            height="231"
            className="rounded-lg"
          />
        </div>

        <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
          Business For Sale
        </div>
      </div>

      <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
        <div>
          <Image
            loader={myLoader}
            src="/photos/327540/pexels-photo-327540.jpeg"
            alt="Evolov"
            width="345"
            height="231"
            className="rounded-lg"
          />
        </div>
        <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
          Co-Founder
        </div>
      </div>

      <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
        <div>
          <Image
            loader={myLoader}
            src="/photos/5256816/pexels-photo-5256816.jpeg"
            alt="Evolov"
            width="345"
            height="231"
            className="rounded-lg"
          />
        </div>
        <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
          Startup
        </div>
      </div>

      <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
        <div>
          <Image
            loader={myLoader}
            src="/photos/7788006/pexels-photo-7788006.jpeg"
            alt="Evolov"
            width="345"
            height="231"
            className="rounded-lg"
          />
        </div>

        <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
          Investors
        </div>
      </div>
    </div>
  );
};

export default Businesses;
