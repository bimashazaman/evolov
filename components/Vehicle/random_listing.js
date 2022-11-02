import React from "react";

import Image from "next/image";
import Link from "next/link";
import ThumbsUp from "../Favorite/ThumbsUp";
import { myLoader } from "../../components/Favorite/Loader";
import { Vehicle } from "../../data/vehicle/data";

const Random_Listing = () => {
  return (
    <>
      <div className="text-3xl text-[#221F60] pl-24 mt-9 font-semibold -mb-10">
        Random Listing
      </div>

      <div className="container relative grid items-center content-center justify-center grid-cols-1 gap-4 p-20 mx-auto lg:grid-cols-3 ">
        {Vehicle.map((item, index) => (
          <div
            key={index}
            className="w-[345px] h-[231px] shadow-lg rounded-xl mb-20 cursor-pointer relative"
          >
            <div>
              <Link href="/property/individual">
                <a>
                  <Image
                    loader={myLoader}
                    src={`${item["image"]}`}
                    alt={item["categoryName"]}
                    width="345"
                    height="231"
                    className="relative rounded-lg"
                  />
                </a>
              </Link>

              <div
                className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-400 absolute right-7 top-7 sm:right-3 sm:top-3"
                title="Save"
              >
                <ThumbsUp />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                {item["title"] ?? "Appertment for sale"}
                <div className="text-sm font-normal">{`City: ${item["city"]}, ${item["street_address"]}`}</div>
                <div className="text-sm font-normal">
                  {" "}
                  {`Price: ${item["currency"]} ${item["price"]}`}{" "}
                </div>
              </div>
              <div className="flex-col p-3 font-semibold text-orange-600">
                {item["is_company"] ? (
                  <>
                    <Image
                      loader={myLoader}
                      src="/photos/1396122/pexels-photo-1396122.jpeg"
                      alt="Evolov"
                      width="25"
                      height="25"
                      className="rounded-full pt-7"
                    />
                    <span className="ml-2 -mt-3 font-normal text-[#221F60]">
                      {" "}
                      Lock{" "}
                    </span>
                  </>
                ) : (
                  <div>Private</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Random_Listing;
