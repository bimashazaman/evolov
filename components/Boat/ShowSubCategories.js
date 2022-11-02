import React from "react";
import Image from "next/image";
import Link from "next/link";
import { myLoader } from "../Favorite/Loader";
import { SUB_ITEMS } from "../../data/boat/sub_Category";


const ShowSubCategories = () => {
  return (
    <>
      <div className="text-3xl text-[#221F60] pl-24 mt-9 -mb-12 font-semibold">
        Types of Listing
      </div>

      <div className="container grid items-center content-center justify-center grid-cols-1  p-20 mx-auto lg:grid-cols-2">
        {SUB_ITEMS.map((item, index) => (
          //           <Link href={`${window.location.href}/${item.link}`} key={index}>
          <Link href={`${window.location.href}/${item.link}`} key={index}>
            <a>
              <div className="lg:w-[460px] lg:h-[231px] w-auto h-auto shadow-lg rounded-xl mb-14 cursor-pointer">
                <div>
                  <Image
                    loader={myLoader}
                    src={`${item["image"]}`}
                    alt={item["categoryName"]}
                    width="460"
                    height="231"
                    className="rounded-lg"
                  />
                </div>

                <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
                  {item["categoryName"]}
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ShowSubCategories;
