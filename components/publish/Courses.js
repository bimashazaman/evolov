import Image from "next/image";
import Link from "next/link";
import React from "react";
const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

const Courses = () => {
  return (
    <div className="container grid items-center content-center justify-center grid-cols-1 gap-4  mx-auto lg:grid-cols-3">
    <Link href="">
      <a>
        <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
          <div>
            <Image
              loader={myLoader}
              src="/photos/196644/pexels-photo-196644.jpeg"
              alt="Evolov"
              width="345"
              height="231"
              className="rounded-lg"
            />
          </div>

          <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
            Design
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
              src="/photos/2653362/pexels-photo-2653362.jpeg"
              alt="Evolov"
              width="345"
              height="231"
              className="rounded-lg"
            />
          </div>
          <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
            Development
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
              src="/photos/590041/pexels-photo-590041.jpeg"
              alt="Evolov"
              width="345"
              height="231"
              className="rounded-lg"
            />
          </div>
          <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
            Marketing
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
              src="/photos/392018/pexels-photo-392018.jpeg"
              alt="Evolov"
              width="345"
              height="231"
              className="rounded-lg"
            />
          </div>

          <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
            IT & Software
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
              src="/photos/403495/pexels-photo-403495.jpeg"
              alt="Evolov"
              width="345"
              height="231"
              className="rounded-lg"
            />
          </div>
          <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
            Photography
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
              src="/photos/144429/pexels-photo-144429.jpeg"
              alt="Evolov"
              width="345"
              height="231"
              className="rounded-lg"
            />
          </div>
          <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
            Music
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
              src="/photos/848618/pexels-photo-848618.jpeg"
              alt="Evolov"
              width="345"
              height="231"
              className="rounded-lg"
            />
          </div>

          <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
            Sports
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
              src="/photos/102127/pexels-photo-102127.jpeg"
              alt="Evolov"
              width="345"
              height="231"
              className="rounded-lg"
            />
          </div>

          <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
            Fine Arts
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
              src="/photos/3771074/pexels-photo-3771074.jpeg"
              alt="Evolov"
              width="345"
              height="231"
              className="rounded-lg"
            />
          </div>

          <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
            Personal Development
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
              src="/photos/301926/pexels-photo-301926.jpeg"
              alt="Evolov"
              width="345"
              height="231"
              className="rounded-lg"
            />
          </div>

          <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
            Teaching and Academics
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
              src="/photos/4567486/pexels-photo-4567486.jpeg"
              alt="Evolov"
              width="345"
              height="231"
              className="rounded-lg"
            />
          </div>

          <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
            Language
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
              src="photos/210990/pexels-photo-210990.jpeg"
              alt="Evolov"
              width="345"
              height="231"
              className="rounded-lg"
            />
          </div>

          <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
            Finance
          </div>
        </div>
      </a>
    </Link>
  </div>
  )
}

export default Courses