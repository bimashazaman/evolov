import Image from "next/image";
import Link from "next/link";
import React from "react";
const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};
const Vehicle = () => {
  return (
    <div className="container grid items-center content-center justify-center grid-cols-1 gap-4 mx-auto lg:grid-cols-3">
      <Link href="/vehicle/publish/bus">
        <a>
          <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
            <div>
              <Image
                loader={myLoader}
                src="photos/2942172/pexels-photo-2942172.jpeg"
                alt="Evolov"
                width="345"
                height="231"
                className="rounded-lg"
              />
            </div>

            <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
              Bus
            </div>
          </div>
        </a>
      </Link>

      <Link href="/vehicle/publish/car">
        <a>
          <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
            <div>
              <Image
                loader={myLoader}
                src="photos/112460/pexels-photo-112460.jpeg"
                alt="Evolov"
                width="345"
                height="231"
                className="rounded-lg"
              />
            </div>
            <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
              Car
            </div>
          </div>
        </a>
      </Link>

      <Link href="/vehicle/publish/hiking">
        <a>
          <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
            <div>
              <Image
                loader={myLoader}
                src="photos/6271392/pexels-photo-6271392.jpeg"
                alt="Evolov"
                width="345"
                height="231"
                className="rounded-lg"
              />
            </div>
            <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
              Camping
            </div>
          </div>
        </a>
      </Link>

      <Link href="/vehicle/publish/motorcycle">
        <a>
          <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
            <div>
              <Image
                loader={myLoader}
                src="photos/1119796/pexels-photo-1119796.jpeg"
                alt="Evolov"
                width="345"
                height="231"
                className="rounded-lg"
              />
            </div>

            <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
              Motorbike
            </div>
          </div>
        </a>
      </Link>

      <Link href="/vehicle/publish/truck">
        <a>
          <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
            <div>
              <Image
                loader={myLoader}
                src="photos/11053640/pexels-photo-11053640.jpeg"
                alt="Evolov"
                width="345"
                height="231"
                className="rounded-lg"
              />
            </div>
            <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
              Truck
            </div>
          </div>
        </a>
      </Link>

      <Link href="/vehicle/publish/machine">
        <a>
          <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-14 cursor-pointer">
            <div>
              <Image
                loader={myLoader}
                src="photos/924676/pexels-photo-924676.jpeg"
                alt="Evolov"
                width="345"
                height="231"
                className="rounded-lg"
              />
            </div>
            <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
              Working Machine
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Vehicle;
