import Image from "next/image";
import Link from "next/link";
import React from "react";
const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

const Market = () => {
  return (
    <div className="container grid items-center content-center justify-center grid-cols-1 gap-4 mx-auto lg:grid-cols-3">
    <Link href="/market/animal">
      <a>
        <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
          <div>
            <Image
              loader={myLoader}
              src="photos/1108099/pexels-photo-1108099.jpeg"
              alt="Evolov"
              width="345"
              height="231"
              className="rounded-lg"
            />
          </div>

          <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
            Animals
          </div>
        </div>
      </a>
    </Link>

    <Link href="/market/art">
      <a>
        <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
          <div>
            <Image
              loader={myLoader}
              src="photos/20967/pexels-photo.jpg"
              alt="Evolov"
              width="345"
              height="231"
              className="rounded-lg"
            />
          </div>
          <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
            Antique and Art
          </div>
        </div>
      </a>
    </Link>

    <Link href="/market/business-equipment">
      <a>
        <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
          <div>
            <Image
              loader={myLoader}
              src="photos/1029243/pexels-photo-1029243.jpeg"
              alt="Evolov"
              width="345"
              height="231"
              className="rounded-lg"
            />
          </div>
          <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
            Business Equipment
          </div>
        </div>
      </a>
    </Link>

    <Link href="/market/sub">
      <a>
        <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
          <div>
            <Image
              loader={myLoader}
              src="photos/313707/pexels-photo-313707.jpeg"
              alt="Evolov"
              width="345"
              height="231"
              className="rounded-lg"
            />
          </div>

          <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
            Clothing, Cosmetic and Accessories
          </div>
        </div>
      </a>
    </Link>

    <Link href="/market/sub">
      <a>
        <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
          <div>
            <Link href="/market/electronics">
              <a>
                <Image
                  loader={myLoader}
                  src="photos/1841841/pexels-photo-1841841.jpeg"
                  alt="Evolov"
                  width="345"
                  height="231"
                  className="rounded-lg"
                />
              </a>
            </Link>
          </div>
          <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
            Electronics and Appliances
          </div>
        </div>
      </a>
    </Link>

    <Link href="/market/sub">
      <a>
        <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
          <div>
            <Image
              loader={myLoader}
              src="photos/210881/pexels-photo-210881.jpeg"
              alt="Evolov"
              width="345"
              height="231"
              className="rounded-lg"
            />
          </div>
          <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
            Car, Boat, MC & Plane Electronics
          </div>
        </div>
      </a>
    </Link>

    <Link href="/market/sub">
      <a>
        <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
          <div>
            <Image
              loader={myLoader}
              src="photos/6301180/pexels-photo-6301180.jpeg"
              alt="Evolov"
              width="345"
              height="231"
              className="rounded-lg"
            />
          </div>

          <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
            Furniture, Interior
          </div>
        </div>
      </a>
    </Link>

    <Link href="/market/sub">
      <a>
        <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
          <div>
            <Image
              loader={myLoader}
              src="photos/9792165/pexels-photo-9792165.jpeg"
              alt="Evolov"
              width="345"
              height="231"
              className="rounded-lg"
            />
          </div>

          <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
            Garden, Renovation and House
          </div>
        </div>
      </a>
    </Link>

    <Link href="/market/sub">
      <a>
        <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
          <div>
            <Image
              loader={myLoader}
              src="photos/1047540/pexels-photo-1047540.jpeg"
              alt="Evolov"
              width="345"
              height="231"
              className="rounded-lg"
            />
          </div>

          <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
            Hobby, Entertainment
          </div>
        </div>
      </a>
    </Link>

    <Link href="/market/sub">
      <a>
        <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
          <div>
            <Image
              loader={myLoader}
              src="photos/235554/pexels-photo-235554.jpeg"
              alt="Evolov"
              width="345"
              height="231"
              className="rounded-lg"
            />
          </div>

          <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
            Parents and Kids
          </div>
        </div>
      </a>
    </Link>

    <Link href="/market/sub">
      <a>
        <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
          <div>
            <Image
              loader={myLoader}
              src="photos/307008/pexels-photo-307008.jpeg"
              alt="Evolov"
              width="345"
              height="231"
              className="rounded-lg"
            />
          </div>

          <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
            Sports and Leisure
          </div>
        </div>
      </a>
    </Link>
  </div>
  )
}

export default Market