import React, { useState } from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import { HiOutlineMailOpen } from "react-icons/hi";
import Add from "../../components/Favorite/Add";
import Link from "next/link";

import ProfileRating from "../../components/ProfileRating/ProfileRating";
const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

const Individual = () => {
  // const [rating, setRating] = useState(3);
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center ">
          <div className=" h-[178px] w-full">
            <Image
              loader={myLoader}
              src="photos/960137/pexels-photo-960137.jpeg"
              alt="Picture of the author"
              width={1920}
              height={225}
              layout="responsive"
              className=" h-full w-full object-cover"
            />
          </div>
          <div className="-mt-36">
            <div className="h-[240px] w-[240px]">
              <Image
                loader={myLoader}
                src="photos/614810/pexels-photo-614810.jpeg"
                alt="Picture of the author"
                width={240}
                height={240}
                layout="responsive"
                className="rounded-full h-[240px] w-[240px]  -mt-36 object-cover"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 w-full px-4">
            

              <div className="lg:flex hidden">

              </div>
              <div className=" text-center items-center justify-center">
                <div className="text-2xl font-bold text-[#393486] my-2">
                  John Doe
                </div>
                <div className="flex items-center justify-center font-semibold text-[#393486] p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  Sweden
                </div>
                <center>

                <div className=" items-center justify-center">
                  <button className="bg-[#221F60] text-white text-sm h-6 px-5 rounded-full flex pt-1 mt-2 py-3 cursor-pointer">
                    <HiOutlineMailOpen className="w-3 h-3 mr-1" />
                    Contact
                  </button>
                </div>
                </center>
              </div>

              <div className="lg:flex flex-col hidden text-right items-end justify-end mr-20">
                  Member since 
                  <div>
                    <div className="text-[#393486] font-semibold text-sm">
                      2021
                      </div>
                  </div>
              </div>
           
          </div>
        </div>
        <div className="flex felx-col relative mx-auto  max-w-5xl my-5">
          <div className="lg:my-2 my-8">
            <div className="text-3xl text-left font-bold text-[#393486] lg:my-2 my-14">
              About John Doe
            </div>
            <div className="font-[500] lg:my-2 my-14">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, nunc vel tincidunt luctus, nunc nisl aliquam nisl, vel
              aliquam nisl nisl sit amet nisl. Sed tincidunt, nunc vel tincidunt
              luctus, nunc nisl aliquam nisl, vel aliquam nisl nisl sit amet
              nisl. Sed tincidunt, nunc vel tincidunt luctus, nunc nisl aliquam
              nisl, vel aliquam nisl nisl sit amet nisl. Sed tincidunt, nunc vel
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, nunc vel tincidunt luctus, nunc nisl aliquam nisl, vel
              aliquam nisl nisl sit amet nisl. Sed tincidunt, nunc vel tincidunt
              luctus, nunc nisl aliquam nisl, vel aliquam nisl nisl sit amet
              nisl. Sed tincidunt, nunc vel tincidunt luctus, nunc nisl aliquam
              nisl, vel aliquam nisl nisl sit amet nisl. Sed tincidunt, nunc vel
            </div>
            <hr className="mt-3" />
            <div className="flex">
              <div className="text-2xl my-5 text-[#393486]">Ads</div>
              <div className="my-6 mx-3">
                <select className="border border-[#807ad4] rounded-lg p-1 outline-none">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                </select>
              </div>
            </div>
            <div>
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 container lg:mx-auto py-5 items-center justify-center content-center px-14 lg:px-1">
                  <div className="lg:w-[438px]  w-auto  h-auto lg:h-[238px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                    <div>
                      <Link href="/property/individual">
                        <a>
                          <Image
                            loader={myLoader}
                            src="photos/1396122/pexels-photo-1396122.jpeg"
                            alt="Evolov"
                            width="498"
                            height="268"
                            className="rounded-lg"
                          />
                        </a>
                      </Link>

                      <div
                        className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-400 right-7 top-7 sm:right-3 sm:top-3"
                        title="Save"
                      >
                        <Add />
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                        Appertment for sale
                        <div className="text-sm font-normal">New jersey</div>
                        <div className="text-sm font-normal">
                          kr 4343,342,34
                        </div>
                      </div>
                      <div className="flex-col font-semibold text-orange-600 p-3">
                        Private
                        <div className="text-sm font-normal mt-5 text-[#221F60]">
                          25,000m
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-[438px]  w-auto  h-auto  lg:h-[238px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                    <div>
                      <Link href="/property/individual">
                        <a>
                          <Image
                            loader={myLoader}
                            src="photos/1396122/pexels-photo-1396122.jpeg"
                            alt="Evolov"
                            width="498"
                            height="268"
                            className="rounded-lg"
                          />
                        </a>
                      </Link>

                      <div
                        className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-400 right-7 top-7 sm:right-3 sm:top-3"
                        title="Save"
                      >
                        <Add />
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                        Appertment for sale
                        <div className="text-sm font-normal">New jersey</div>
                        <div className="text-sm font-normal">
                          kr 4343,342,34
                        </div>
                      </div>
                      <div className="flex-col font-semibold text-orange-600 p-3">
                        Private
                        <div className="text-sm font-normal mt-5 text-[#221F60]">
                          25,000m
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-[438px]  w-auto  h-auto lg:h-[238px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                    <div>
                      <Link href="/property/individual">
                        <a>
                          <Image
                            loader={myLoader}
                            src="photos/1396122/pexels-photo-1396122.jpeg"
                            alt="Evolov"
                            width="498"
                            height="268"
                            className="rounded-lg"
                          />
                        </a>
                      </Link>

                      <div
                        className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-400 right-7 top-7 sm:right-3 sm:top-3"
                        title="Save"
                      >
                        <Add />
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                        Appertment for sale
                        <div className="text-sm font-normal">New jersey</div>
                        <div className="text-sm font-normal">
                          kr 4343,342,34
                        </div>
                      </div>
                      <div className="flex-col font-semibold text-orange-600 p-3">
                        Private
                        <div className="text-sm font-normal mt-5 text-[#221F60]">
                          25,000m
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-[438px]  w-auto  h-auto lg:h-[238px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                    <div>
                      <Link href="/property/individual">
                        <a>
                          <Image
                            loader={myLoader}
                            src="photos/1396122/pexels-photo-1396122.jpeg"
                            alt="Evolov"
                            width="498"
                            height="268"
                            className="rounded-lg"
                          />
                        </a>
                      </Link>

                      <div
                        className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-400 right-7 top-7 sm:right-3 sm:top-3"
                        title="Save"
                      >
                        <Add />
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                        Appertment for sale
                        <div className="text-sm font-normal">New jersey</div>
                        <div className="text-sm font-normal">
                          kr 4343,342,34
                        </div>
                      </div>
                      <div className="flex-col font-semibold text-orange-600 p-3">
                        Private
                        <div className="text-sm font-normal mt-5 text-[#221F60]">
                          25,000m
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProfileRating />
      </Layout>
    </>
  );
};

export default Individual;
