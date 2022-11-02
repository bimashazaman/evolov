import Image from "next/image";
import Link from "next/link";
import React from "react";
const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

const Castings = () => {
  return (
    <div className="container grid items-center content-center justify-center grid-cols-1 gap-4  mx-auto lg:grid-cols-3">
      <Link href="">
        <a>
          <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
            <div>
              <Image
                loader={myLoader}
                src="/photos/3062545/pexels-photo-3062545.jpeg"
                alt="Evolov"
                width="345"
                height="231"
                className="rounded-lg"
              />
            </div>

            <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
              Movie
            </div>
          </div>
        </a>
      </Link>

      <Link href="">
        <a>
          <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
            <div>
              <Image
                loader={myLoader}
                src="/photos/4049534/pexels-photo-4049534.jpeg"
                alt="Evolov"
                width="345"
                height="231"
                className="rounded-lg"
              />
            </div>
            <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
              Short Film
            </div>
          </div>
        </a>
      </Link>

      <Link href="">
        <a>
          <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
            <div>
              <Image
                loader={myLoader}
                src="/photos/8462911/pexels-photo-8462911.jpeg"
                alt="Evolov"
                width="345"
                height="231"
                className="rounded-lg"
              />
            </div>
            <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
              Theater
            </div>
          </div>
        </a>
      </Link>

      <Link href="">
        <a>
          <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
            <div>
              <Image
                loader={myLoader}
                src="/photos/432059/pexels-photo-432059.jpeg"
                alt="Evolov"
                width="345"
                height="231"
                className="rounded-lg"
              />
            </div>

            <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
              Actors
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Castings;
