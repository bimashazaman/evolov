import Image from "next/image";
import Link from "next/link";
import React from "react";
const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

const Property = () => {
  return (
    <div className="container grid items-center content-center justify-center grid-cols-1 gap-4 mx-auto lg:grid-cols-3">
      <Link href="/property/publish/house">
        <a>
          <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
            <div>
              <Image
                loader={myLoader}
                src="photos/164558/pexels-photo-164558.jpeg"
                alt="Evolov"
                width="345"
                height="231"
                className="rounded-lg"
              />
            </div>

            <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
              House
            </div>
          </div>
        </a>
      </Link>

      <Link href="/property/sub">
        <a>
          <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
            <div>
              <Image
                loader={myLoader}
                src="photos/158179/lake-constance-sheep-pasture-sheep-blue-158179.jpeg"
                alt="Evolov"
                width="345"
                height="231"
                className="rounded-lg"
              />
            </div>
            <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
              Plot
            </div>
          </div>
        </a>
      </Link>

      <Link href="/property/sub">
        <a>
          <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
            <div>
              <Image
                loader={myLoader}
                src="photos/1571460/pexels-photo-1571460.jpeg"
                alt="Evolov"
                width="345"
                height="231"
                className="rounded-lg"
              />
            </div>
            <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
              Apartment
            </div>
          </div>
        </a>
      </Link>

      <Link href="/property/sub">
        <a>
          <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
            <div>
              <Image
                loader={myLoader}
                src="photos/323705/pexels-photo-323705.jpeg"
                alt="Evolov"
                width="345"
                height="231"
                className="rounded-lg"
              />
            </div>

            <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
              Commercial Real Estate
            </div>
          </div>
        </a>
      </Link>

      <Link href="/property/sub">
        <a>
          <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
            <div>
              <Image
                loader={myLoader}
                src="photos/1179156/pexels-photo-1179156.jpeg"
                alt="Evolov"
                width="345"
                height="231"
                className="rounded-lg"
              />
            </div>
            <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
              Cottage
            </div>
          </div>
        </a>
      </Link>

      <Link href="/property/sub">
        <a>
          <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
            <div>
              <Image
                loader={myLoader}
                src="photos/772472/pexels-photo-772472.jpeg"
                alt="Evolov"
                width="345"
                height="231"
                className="rounded-lg"
              />
            </div>
            <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
              Castle
            </div>
          </div>
        </a>
      </Link>

      <Link href="/property/sub">
        <a>
          <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
            <div>
              <Image
                loader={myLoader}
                src="photos/4480505/pexels-photo-4480505.jpeg"
                alt="Evolov"
                width="345"
                height="231"
                className="rounded-lg"
              />
            </div>

            <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
              Garadge
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Property;
