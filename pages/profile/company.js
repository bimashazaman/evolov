import React, { useState } from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import Add from "../../components/Favorite/Add";
import Link from "next/link";

import ProfileRating from "../../components/ProfileRating/ProfileRating";
const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

const Company = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center ">
        <div className=" h-[178px] w-full">
          <Image
            loader={myLoader}
            src="photos/133633/pexels-photo-133633.jpeg"
            alt="Picture of the author"
            width={1920}
            height={250}
            layout="responsive"
            className="object-cover w-full h-full "
          />
        </div>
        <div className="-mt-36">
          <div className="h-[240px] w-[240px]">
            <Image
              loader={myLoader}
              src="photos/2180780/pexels-photo-2180780.jpeg"
              alt="Picture of the author"
              width={240}
              height={240}
              layout="responsive"
              className="rounded-full h-[240px] w-[240px]  -mt-36 object-cover"
            />
          </div>
        </div>
        <div>
          <div className="grid justify-between gap-24 lg:grid-cols-3">
            <div className="lg:flex hidden text-left text-[#393486]  font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mt-1"
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
              <div className="mt-2 font-[600]">
                address 3434, 4th street, New York, USA
              </div>
            </div>

            <div className="items-center justify-center text-center bg0">
              <div className="text-2xl font-bold text-[#393486] mt-2">
                John Doe
              </div>
              <div className="text-[#393486]">CEO</div>
            
              <div className="font-[500]">We build a better world</div>
            </div>

            <div className="items-end justify-end hidden text-right lg:flex">
              <div className="flex-col font-[600] text-[#393486]">
                <div className="flex">
                  <div>
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
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>
                  </div>

                  <div className="ml-1">www.example.com</div>
                </div>
                <div className=" text-[#393486] my-1">
                  Phone: +1 234 567 890
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="relative max-w-5xl mx-auto my-5">
        <div className="text-xl text-[#393486] mb-2">Employees</div>
        <div className="grid justify-between grid-cols-2 gap-4">
          <div>
            <div>
              <div className="flex items-center justify-between my-3">
                <div className="flex items-center">
                  <div className="h-[80px] w-[80px]">
                    <Image
                      loader={myLoader}
                      src="photos/614810/pexels-photo-614810.jpeg"
                      alt="Picture of the author"
                      width={80}
                      height={80}
                      layout="responsive"
                      className="rounded-full h-[80px] w-[80px]  -mt-36 object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-[#393486] font-bold">John Doe</div>
                    <div className="text-[#393486]">CEO</div>
                    <div className="text-sm">phone: 349837 4543</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between my-3">
                <div className="flex items-center">
                  <div className="h-[80px] w-[80px]">
                    <Image
                      loader={myLoader}
                      src="photos/614810/pexels-photo-614810.jpeg"
                      alt="Picture of the author"
                      width={80}
                      height={80}
                      layout="responsive"
                      className="rounded-full h-[80px] w-[80px]  -mt-36 object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-[#393486] font-bold">John Doe</div>
                    <div className="text-[#393486]">CEO</div>
                    <div className="text-sm">phone: 349837 4543</div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>

          <div>
            <div className="flex items-center justify-between my-3">
              <div className="flex items-center">
                <div className="h-[80px] w-[80px]">
                  <Image
                    loader={myLoader}
                    src="photos/614810/pexels-photo-614810.jpeg"
                    alt="Picture of the author"
                    width={80}
                    height={80}
                    layout="responsive"
                    className="rounded-full h-[80px] w-[80px]  -mt-36 object-cover"
                  />
                </div>
                <div className="ml-4">
                  <div className="text-[#393486] font-bold">John Doe</div>
                  <div className="text-[#393486]">CEO</div>
                  <div className="text-sm">phone: 349837 4543</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between my-3">
              <div className="flex items-center">
                <div className="h-[80px] w-[80px]">
                  <Image
                    loader={myLoader}
                    src="photos/614810/pexels-photo-614810.jpeg"
                    alt="Picture of the author"
                    width={80}
                    height={80}
                    layout="responsive"
                    className="rounded-full h-[80px] w-[80px]  -mt-36 object-cover"
                  />
                </div>
                <div className="ml-4">
                  <div className="text-[#393486] font-bold">John Doe</div>
                  <div className="text-[#393486]">CEO</div>
                  <div className="text-sm">phone: 349837 4543</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="relative flex max-w-5xl mx-auto my-5 felx-col">
        <div>
          <div className="text-3xl text-left  text-[#393486] my-2">
            About John Doe
          </div>
          <div className="font-[500] my-2">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, nunc vel tincidunt luctus, nunc nisl aliquam nisl, vel
            aliquam nisl nisl sit amet nisl. Sed tincidunt, nunc vel tincidunt
            luctus, nunc nisl aliquam nisl, vel aliquam nisl nisl sit amet nisl.
            Sed tincidunt, nunc vel tincidunt luctus, nunc nisl aliquam nisl,
            vel aliquam nisl nisl sit amet nisl. Sed tincidunt, nunc vel lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt,
            nunc vel tincidunt luctus, nunc nisl aliquam nisl, vel aliquam nisl
            nisl sit amet nisl. Sed tincidunt, nunc vel tincidunt luctus, nunc
            nisl aliquam nisl, vel aliquam nisl nisl sit amet nisl. Sed
            tincidunt, nunc vel tincidunt luctus, nunc nisl aliquam nisl, vel
            aliquam nisl nisl sit amet nisl. Sed tincidunt, nunc vel
          </div>
          <hr className="mt-3" />
          <div className="flex">
            <div className="text-2xl my-5 text-[#393486]">Ads</div>
            <div className="mx-3 my-6">
              <select className="border border-[#807ad4] rounded-lg p-1 outline-none">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
              </select>
            </div>
          </div>
          <div>
            <div>
              <div className="container grid items-center content-center justify-center grid-cols-1 gap-4 py-5 mx-auto lg:grid-cols-2 px-14 lg:px-1">
                <div className="lg:w-[438px] w-auto  h-auto lg:h-[238px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
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
                     
                      <div className="text-sm font-normal">kr 4343,342,34</div>
                    </div>
                   
                  </div>
                </div>

                <div className="lg:w-[438px] w-auto  h-auto  lg:h-[238px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
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
                     
                      <div className="text-sm font-normal">kr 4343,342,34</div>
                    </div>
                   
                  </div>
                </div>

                <div className="lg:w-[438px] w-auto  h-auto lg:h-[238px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
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
                     
                      <div className="text-sm font-normal">kr 4343,342,34</div>
                    </div>
                   
                  </div>
                </div>

                <div className="lg:w-[438px] w-auto  h-auto lg:h-[238px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
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
                     
                      <div className="text-sm font-normal">kr 4343,342,34</div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <ProfileRating />
      
    </Layout>
  );
};

export default Company;
