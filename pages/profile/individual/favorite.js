import React from "react";
import Layout from "../../../components/Layout";
import ProfileSidebar from "../../../components/ProfileSidebar/ProfileSidebar";
import Image from "next/image";
import { HiHeart } from "react-icons/hi";
import { HiThumbUp } from "react-icons/hi";

import Add from "../../../components/Favorite/Add";

const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

const Favorite = () => {
  const [checked, setChecked] = React.useState(true);

  function toggle() {
    setChecked(!checked);
  }

  return (
    <Layout>
      <div className="flex">
        <ProfileSidebar />

        <div className="flex flex-col w-full">
          <div className="lg:px-[5%] pl-16 w-full py-10">
            <div className="flex">
              <HiHeart className="text-3xl text-[#221F60]" />{" "}
              <div className="text-3xl text-[#221F60] ml-2">My Favorites</div>
            </div>
            <div className="container grid items-center content-center justify-center grid-cols-1 gap-4 mx-auto lg:grid-cols-2 lg:px-20 p-14">
              <div className="lg:w-[370px] w-auto h-auto  lg:h-[220px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                <div>
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1396122/pexels-photo-1396122.jpeg"
                      alt="Evolov"
                      width="370"
                      height="220"
                      className="rounded-lg"
                    />
                  </a>

                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370 right-7 top-7 sm:right-3 sm:top-3"
                    title="Save"
                  >
                    <HiThumbUp
                      onClick={() => toggle()}
                      className={`${
                        checked ? "text-blue-500" : "text-white"
                      } h-10 w-10 cursor-pointer`}
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="p-3 mb-1 text-lg flex-col font-semibold text-[#221F60] font-mono">
                    Appertment for sale
                  </div>
                  <div className="flex-col font-semibold text-[#221F60] p-3">
                    <div className="text-sm font-semibold mt-1 text-[#221F60]">
                      BDT 434
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-[370px] w-auto h-auto  lg:h-[220px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                <div>
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1396122/pexels-photo-1396122.jpeg"
                      alt="Evolov"
                      width="370"
                      height="220"
                      className="rounded-lg"
                    />
                  </a>

                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370 right-7 top-7 sm:right-3 sm:top-3"
                    title="Save"
                  >
                    <HiThumbUp
                      onClick={() => toggle()}
                      className={`${
                        checked ? "text-blue-500" : "text-white"
                      } h-10 w-10 cursor-pointer`}
                    />
                  </div>

                  <div className="flex justify-between">
                    <div className="p-3 mb-1 text-lg flex-col font-semibold text-[#221F60] font-mono">
                      Appertment for sale
                    </div>
                    <div className="flex-col font-semibold text-[#221F60] p-3">
                      <div className="text-sm font-semibold mt-1 text-[#221F60]">
                        BDT 434
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-[370px] w-auto h-auto lg:h-[220px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                <div>
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1396122/pexels-photo-1396122.jpeg"
                      alt="Evolov"
                      width="370"
                      height="220"
                      className="rounded-lg"
                    />
                  </a>

                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370 right-7 top-7 sm:right-3 sm:top-3"
                    title="Save"
                  >
                    <HiThumbUp
                      onClick={() => toggle()}
                      className={`${
                        checked ? "text-blue-500" : "text-white"
                      } h-10 w-10 cursor-pointer`}
                    />
                  </div>

                  <div className="flex justify-between">
                    <div className="p-3 mb-1 text-lg flex-col font-semibold text-[#221F60] font-mono">
                      Appertment for sale
                    </div>
                    <div className="flex-col font-semibold text-[#221F60] p-3">
                      <div className="text-sm font-semibold mt-1 text-[#221F60]">
                        BDT 434
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-[370px] w-auto h-auto lg:h-[220px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                <div>
                  <a>
                    <Image
                      loader={myLoader}
                      src="photos/1396122/pexels-photo-1396122.jpeg"
                      alt="Evolov"
                      width="370"
                      height="220"
                      className="rounded-lg"
                    />
                  </a>

                  <div
                    className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-220 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-370 right-7 top-7 sm:right-3 sm:top-3"
                    title="Save"
                  >
                    <HiThumbUp
                      onClick={() => toggle()}
                      className={`${
                        checked ? "text-blue-500" : "text-white"
                      } h-10 w-10 cursor-pointer`}
                    />
                  </div>

                  <div className="flex justify-between">
                    <div className="p-3 mb-1 text-lg flex-col font-semibold text-[#221F60] font-mono">
                      Appertment for sale
                    </div>
                    <div className="flex-col font-semibold text-[#221F60] p-3">
                      <div className="text-sm font-semibold mt-1 text-[#221F60]">
                        BDT 434
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Favorite;
