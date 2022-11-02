import React from "react";
import Image from "next/image";
import {Typography} from "@material-tailwind/react";

const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

const Trending = () => {
  const lazyRoot = React.useRef(null);
  return (
    <>
    <Typography as="h1" className="p-1 text-center text-[#221F60] font-semibold text-3xl">
        New & Trending
      </Typography>
      <div className="items-center justify-center px-20 lg:flex">
        <div className="w-[399px] h-[554px] flex-[1] mx-auto lg:p-1 pr-14">
          <Image
            loader={myLoader}
            lazyRoot={lazyRoot}
            src="photos/2121121/pexels-photo-2121121.jpeg"
            alt="Picture of the author"
            width="399"
            height="554"
            className="rounded-xl"
          />

          <div className="pt-2 text-xl font-semibold text-[#221F60] font-mono">
            House
          </div>
          <div className="text-[#221F60] text-xs">
            lorem ipusm ipsum lore, 332 lorem ipusm ipsum
          </div>
        </div>
        <div className="lg:flex-[2] lg:mt-4 mt-14 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:p-6 pr-20 items-center mx-auto  content-center justify-center">
          <div className="h-[278px]">
            <div className="w-[370px] h-[209px] rounded-xl">
               <Image
                loader={myLoader}
                src="photos/163236/luxury-yacht-boat-speed-water-163236.jpeg"
                alt="Picture of the author"
                width="370"
                height="209"
                className="rounded-xl"
              />
              <div className="pt-2 text-xl font-semibold text-[#221F60] font-mono">
                Boat
              </div>
              <div className="text-[#221F60] text-xs">
                lorem ipusm ipsum lore, 332 lorem ipusm ipsum
              </div>
            </div>
          </div>

          <div className="h-[278px]">
            <div className="w-[370px] h-[209px] rounded-xl">
              <Image
                loader={myLoader}
                src="photos/62623/wing-plane-flying-airplane-62623.jpeg"
                alt="Picture of the author"
                width="370"
                height="209"
                className="rounded-xl"
              />

              <div className="pt-2 text-xl font-semibold text-[#221F60] font-mono">
                Plane
              </div>
              <div className="text-[#221F60] text-xs">
                lorem ipusm ipsum lore, 332 lorem ipusm ipsum
              </div>
            </div>
          </div>

          <div className="h-[278px]">
            <div className="w-[370px] h-[209px] rounded-xl">
               <Image
                loader={myLoader}
                src="photos/264507/pexels-photo-264507.jpeg"
                alt="Picture of the author"
                width="370"
                height="209"
                className="rounded-xl"
              />
              <div className="pt-2 text-xl font-semibold text-[#221F60] font-mono">
                Market
              </div>
              <div className="text-[#221F60] text-xs">
                lorem ipusm ipsum lore, 332 lorem ipusm ipsum
              </div>
            </div>
          </div>

          <div className="h-[278px]">
            <div className="w-[370px] h-[209px] rounded-xl">
               <Image
                loader={myLoader}
                src="photos/3082341/pexels-photo-3082341.jpeg"
                alt="Picture of the author"
                width="370"
                height="209"
                className="rounded-xl"
              />
              <div className="pt-2 text-xl font-semibold text-[#221F60] font-mono">
                Logics Tech
              </div>
              <div className="text-[#221F60] text-xs">
                lorem ipusm ipsum lore, 332 lorem ipusm ipsum
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
