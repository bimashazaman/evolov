import React from "react";
import Layout from "../../../components/Layout";
import ProfileSidebar from "../../../components/ProfileSidebar/CompanyProfileSidebar";
import Image from "next/image";
import { HiHeart } from "react-icons/hi";

const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

const Followers = () => {
  return (
    <Layout>
      <div className="flex">
        <ProfileSidebar />

        <div className="flex flex-col w-full">
          <div className="lg:px-[5%] pl-16 w-full py-10">
            <div className="flex justify-between mb-1 px-7">
              <div className="flex">
                <HiHeart className="text-3xl text-[#221F60]" />{" "}
                <div className="text-3xl text-[#221F60] ml-2 mb-5">
                  Followers
                </div>
              </div>
            </div>

            <div className="flex justify-between mb-2 hover:bg-gray-100">
              <div className="flex ">
                <div className="w-20 h-20">
                  <Image
                    loader={myLoader}
                    src="photos/614810/pexels-photo-614810.jpeg"
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    layout="responsive"
                    className="flex-shrink-0 object-cover object-center mr-4 rounded-full"
                  />
                </div>
                <div className="items-center justify-center mt-5 ml-2 text-xl">
                  Bimasha Zaman
                </div>
              </div>

              <div>
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
                >
                  Unfollow
                </button>
              </div>
            </div>

            <div className="flex justify-between mb-2 hover:bg-gray-100">
              <div className="flex ">
                <div className="w-20 h-20">
                  <Image
                    loader={myLoader}
                    src="photos/614810/pexels-photo-614810.jpeg"
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    layout="responsive"
                    className="flex-shrink-0 object-cover object-center mr-4 rounded-full"
                  />
                </div>
                <div className="items-center justify-center mt-5 ml-2 text-xl">
                  Bimasha Zaman
                </div>
              </div>

              <div>
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
                >
                  Unfollow
                </button>
              </div>
            </div>

            <div className="flex justify-between mb-2 hover:bg-gray-100">
              <div className="flex ">
                <div className="w-20 h-20">
                  <Image
                    loader={myLoader}
                    src="photos/614810/pexels-photo-614810.jpeg"
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    layout="responsive"
                    className="flex-shrink-0 object-cover object-center mr-4 rounded-full"
                  />
                </div>
                <div className="items-center justify-center mt-5 ml-2 text-xl">
                  Bimasha Zaman
                </div>
              </div>

              <div>
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
                >
                  Unfollow
                </button>
              </div>
            </div>

            <div className="flex justify-between mb-2 hover:bg-gray-100">
              <div className="flex ">
                <div className="w-20 h-20">
                  <Image
                    loader={myLoader}
                    src="photos/614810/pexels-photo-614810.jpeg"
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    layout="responsive"
                    className="flex-shrink-0 object-cover object-center mr-4 rounded-full"
                  />
                </div>
                <div className="items-center justify-center mt-5 ml-2 text-xl">
                  Bimasha Zaman
                </div>
              </div>

              <div>
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
                >
                  Unfollow
                </button>
              </div>
            </div>

            <div className="flex justify-between mb-2 hover:bg-gray-100">
              <div className="flex ">
                <div className="w-20 h-20">
                  <Image
                    loader={myLoader}
                    src="photos/614810/pexels-photo-614810.jpeg"
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    layout="responsive"
                    className="flex-shrink-0 object-cover object-center mr-4 rounded-full"
                  />
                </div>
                <div className="items-center justify-center mt-5 ml-2 text-xl">
                  Bimasha Zaman
                </div>
              </div>

              <div>
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
                >
                  Unfollow
                </button>
              </div>
            </div>

            <div className="flex justify-between mb-2 hover:bg-gray-100">
              <div className="flex ">
                <div className="w-20 h-20">
                  <Image
                    loader={myLoader}
                    src="photos/614810/pexels-photo-614810.jpeg"
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    layout="responsive"
                    className="flex-shrink-0 object-cover object-center mr-4 rounded-full"
                  />
                </div>
                <div className="items-center justify-center mt-5 ml-2 text-xl">
                  Bimasha Zaman
                </div>
              </div>

              <div>
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
                >
                  Unfollow
                </button>
              </div>
            </div>

            {/* <div className="container grid items-center content-center justify-center grid-cols-1 gap-4 mx-auto lg:grid-cols-2 lg:px-20 p-14">
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
                    <Add />
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
                    <Add />
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
                    <Add />
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
                    <Add />
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
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Followers;
