import React from "react";
import Search from "../../components/Search/Search";
import Layout from "../../components/Layout";
import ShowSubCategories from "../../components/plane/ShowSubCategories";
import Recently_published from "../../components/plane/recently_published";
import Link from "next/link";
import Image from "next/image";
import { myLoader } from "../../components/Favorite/Loader";
import ThumbsUp from "../../components/Favorite/ThumbsUp";


const Plane = () => {
  return (
    <div className="bg-[#F9FAFF]">
      <Layout>
        <Search />
        <ShowSubCategories />
        <div className="text-3xl text-[#221F60] pl-24 mt-9 font-semibold -mb-10">
          Random Listing
        </div>

        <div className="container relative grid items-center content-center justify-center grid-cols-1 gap-4 p-20 mx-auto lg:grid-cols-3 ">
          <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-20 cursor-pointer relative">
            <div>
              <Link href="">
                <a>
                  <Image
                    loader={myLoader}
                    src="photos/1396122/pexels-photo-1396122.jpeg"
                    alt="Evolov"
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
                Appertment for sale
                <div className="text-sm font-normal">New jersey</div>
                <div className="text-sm font-normal">kr 4343,342,34</div>
              </div>
              <div className="flex-col p-3 font-semibold text-orange-600">
                Private
                <div className="text-sm font-normal mt-5 text-[#221F60]">
                  25,000m
                </div>
              </div>
            </div>
          </div>
        </div>
        <Recently_published />
      </Layout>
    </div>
  );
};

export default Plane;
