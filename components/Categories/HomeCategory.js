import React from "react";

import Image from "next/image";
import Link from "next/link";

const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

const HomeCategory = () => {
  return (
    <div className="container grid items-center content-center justify-center grid-cols-1 gap-4 p-20 mx-auto lg:grid-cols-3">
      <Link href="/property" passHref>
        <a>
          <div className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer">
            <div>
              <Image
                loader={myLoader}
                src="photos/1396122/pexels-photo-1396122.jpeg"
                alt="Evolov"
                width="345"
                height="231"
                className="rounded-lg"
              />
            </div>

            <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
              Property
            </div>
          </div>
        </a>
      </Link>

      <div className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer">
        <div>
          <Link href="/vehicle">
            <a>
              <Image
                loader={myLoader}
                src="photos/112460/pexels-photo-112460.jpeg"
                alt="Evolov"
                width="345"
                height="231"
                className="rounded-lg"
              />
            </a>
          </Link>
        </div>
        <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
          Vehicle
        </div>
      </div>

      {/* <div className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer">
        <div>
          <Link href="/market">
            <a>
              <Image
                loader={myLoader}
                src="photos/264507/pexels-photo-264507.jpeg"
                alt="Evolov"
                width="345"
                height="231"
                className="rounded-lg"
              />
            </a>
          </Link>
        </div>
        <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
          Market
        </div>
      </div> */}
      {/* <div className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer">

        <div>
          <Image
            loader={myLoader}
            src="photos/1684149/pexels-photo-1684149.jpeg"
            alt="Evolov"
            width="345"
            height="231"
            className="rounded-lg"
          />
        </div>

        <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
          Vacancy
        </div>
      </div> */}

      <Link href="/boat">
        <a>
          <div className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer">
            <div>
              <Image
                loader={myLoader}
                src="photos/296278/pexels-photo-296278.jpeg"
                alt="Evolov"
                width="345"
                height="231"
                className="rounded-lg"
              />
            </div>
            <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
              Boat
            </div>
          </div>
        </a>
      </Link>
      <Link href="/plane">
        <a>
          <div className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer">
            <div>
              <Image
                loader={myLoader}
                src="photos/1089306/pexels-photo-1089306.jpeg?"
                alt="Evolov"
                width="345"
                height="231"
                className="rounded-lg"
              />
            </div>
            <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
              Plane
            </div>
          </div>
        </a>
      </Link>
      <Link href="/business">
        <a>
          <div className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer">
            <div>
              <Image
                loader={myLoader}
                src="photos/936137/pexels-photo-936137.jpeg"
                alt="Evolov"
                width="345"
                height="231"
                className="rounded-lg"
              />
            </div>

            <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
              Business
            </div>
          </div>
        </a>
      </Link>

      {/* <Link href="/tender">
        <a>
          <div className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer">
            <div>
              <Image
                loader={myLoader}
                src="photos/3184306/pexels-photo-3184306.jpeg"
                alt="Evolov"
                width="345"
                height="231"
                className="rounded-lg"
              />
            </div>
            <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
              Tender
            </div>
          </div>
        </a>
      </Link> */}

      {/* <Link href="/course">
        <a>
          <div className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer">
            <div>
              <Image
                loader={myLoader}
                src="photos/5905717/pexels-photo-5905717.jpeg"
                alt="Evolov"
                width="345"
                height="231"
                className="rounded-lg"
              />
            </div>
            <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
              Course
            </div>
          </div>
        </a>
      </Link> */}
      {/* <div className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer">
        <div>
          <Image
            loader={myLoader}
            src="photos/587741/pexels-photo-587741.jpeg"
            alt="Evolov"
            width="345"
            height="231"
            className="rounded-lg"
          />
        </div>

        <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
          Events
        </div>
      </div> */}

      {/* <Link href="/casting">
        <a>
          <div className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer">
            <div>
              <Image
                loader={myLoader}
                src="photos/66134/pexels-photo-66134.jpeg"
                alt="Evolov"
                width="345"
                height="231"
                className="rounded-lg"
              />
            </div>
            <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
              Casting
            </div>
          </div>
        </a>
      </Link> */}

      {/* <div className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer">
       <Link href='crowfunding'>
       <a>
       <div>

          <Image
            loader={myLoader}
            src="photos/6994982/pexels-photo-6994982.jpeg"
            alt="Evolov"
            width="345"
            height="231"
            className="rounded-lg"
          />
        </div>
        <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
          Crowdfunding
        </div>
       </a>
       </Link>
      </div> */}

      {/* <div className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer">
       <Link href='contest'>
       <a>
       <div>

          <Image
            loader={myLoader}
            src="photos/3760259/pexels-photo-3760259.jpeg"
            alt="Evolov"
            width="345"
            height="231"
            className="rounded-lg"
          />
        </div>
        <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
          Contest
        </div>
       </a>
       </Link>
      </div> */}

      {/* <div className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer">
        <Link href='companyRegister'>
        <a>

        <div>
          <Image
            loader={myLoader}
            src="photos/34092/pexels-photo.jpg"
            alt="Evolov"
            width="345"
            height="231"
            className="rounded-lg"
          />
        </div>
        <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
          Company Register
        </div>
        </a>
        </Link>

      </div> */}
    </div>
  );
};

export default HomeCategory;
