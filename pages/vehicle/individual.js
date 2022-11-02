import React from "react";
import Layout from "../../components/Layout";
import ImageGallery from "react-image-gallery";
import Image from "next/image";
import {HiOutlineLocationMarker} from "react-icons/hi";
import LikeShare from "../../components/LikeShare/LikeShare";
import Add from "../../components/Favorite/Add";
import Details from "../../components/Vehicle/Details";
import IndividualSellerCard from "../../components/AboutSeller/Individual";
import IndevidualSeller from "../../components/SellerDetails/IndevidualSeller";


const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

/* Creating an array of objects. */
const images = [
  {
    original:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    thumbnail:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    original:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    thumbnail:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    original:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    thumbnail:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    original:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    thumbnail:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    original:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    thumbnail:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    original:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    thumbnail:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    original:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    thumbnail:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    original:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    thumbnail:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];



const Individual = () => {

  return (
    <div>
      <Layout>
        <ImageGallery items={images} className="mt-20" />;
        <div className="flex px-32">
          <LikeShare />
        </div>
        <div className="flex">
          <div className="text-3xl text-[#221F60]  font-semibold mb-2 lg:px-32 px-9">
            <div className="justify-between lg:flex lg:px-10">
              <div className="my-6">
                Apartment for sale
                <div className="flex text-[#221F60]">
                  <HiOutlineLocationMarker className="w-9 h-9 border p-1  text-[#221F60]  rounded-full cursor-pointer " />

                  <div className="mt-2 text-sm font-normal ">
                    address 3434, 4th street, New York, USA
                  </div>
                </div>
              </div>
              <IndividualSellerCard />
            </div>
            <Details />

            <div>
              Description
              <div className="mt-3 text-sm font-normal">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                lore, consectetur adipiscing elit. Sed lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Sed lore, consectetur
                adipiscing elit. Sed lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed lore, consectetur adipiscing elit. Sed
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                lore, consectetur adipiscing elit. Sed lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Sed lore, consectetur
                adipiscing elit. Sed lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed lore, consectetur adipiscing elit. Sed
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                lore, consectetur adipiscing elit. Sed lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Sed lore, consectetur
                adipiscing elit. Sed lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed lore, consectetur adipiscing elit. Sed
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                lore, consectetur adipiscing elit. Sed lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Sed lore, consectetur
                adipiscing elit. Sed lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed lore, consectetur adipiscing elit. Sed
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                lore, consectetur adipiscing elit. Sed lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Sed lore, consectetur
                adipiscing elit. Sed lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed lore, consectetur adipiscing elit. Sed
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                lore, consectetur adipiscing elit. Sed lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Sed lore, consectetur
                adipiscing elit. Sed lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed lore, consectetur adipiscing elit. Sed
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                lore, consectetur adipiscing elit. Sed
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-4 mb-4 bg-gray-300 p-[0.7px] mx-20" />
        
            <IndevidualSeller />
         
       
        <hr className="mt-4 mb-4 bg-gray-300 p-[0.7px] mx-20" />
        <div className="text-3xl text-[#221F60] pl-24 mt-9 font-semibold -mb-10">
          More Offers from this Seller
        </div>
        <div className="container relative grid items-center content-center justify-center grid-cols-1 gap-4 p-20 mx-auto lg:grid-cols-3 ">
          <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-24 cursor-pointer relative">
            <div>
              <Image
                loader={myLoader}
                src="photos/112460/pexels-photo-112460.jpeg"
                alt="Picture of the author"
                width="345"
                height="231"
                className="relative rounded-lg"
              />
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

          <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-24 cursor-pointer relative">
            <div>
              <Image
                loader={myLoader}
                src="photos/112460/pexels-photo-112460.jpeg"
                alt="Picture of the author"
                width="345"
                height="231"
                className="relative rounded-lg"
              />
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

          <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-24 cursor-pointer relative">
            <div>
              <Image
                loader={myLoader}
                src="photos/112460/pexels-photo-112460.jpeg"
                alt="Picture of the author"
                width="345"
                height="231"
                className="relative rounded-lg"
              />
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

          <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-24 cursor-pointer relative">
            <div>
              <Image
                loader={myLoader}
                src="photos/112460/pexels-photo-112460.jpeg"
                alt="Picture of the author"
                width="345"
                height="231"
                className="relative rounded-lg"
              />
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

          <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-24 cursor-pointer relative">
            <div>
              <Image
                loader={myLoader}
                src="photos/112460/pexels-photo-112460.jpeg"
                alt="Picture of the author"
                width="345"
                height="231"
                className="relative rounded-lg"
              />
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
                <div className="text-sm font-normal">kr 4343,342,34</div>
              </div>
              <div className="flex-col p-3 font-semibold text-orange-600">
                <div className="flex">
                  <Image
                    loader={myLoader}
                    src="photos/1643384/pexels-photo-1643384.jpeg"
                    alt="Evolov"
                    width="25"
                    height="25"
                    className="rounded-full pt-7"
                  />

                  <div className="ml-2   text-[#221F60] font-semibold">
                    Lock
                  </div>
                </div>
                <div className="text-sm font-normal mt-5 text-[#221F60]">
                  25,000m
                </div>
              </div>
            </div>
          </div>

          <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-24 cursor-pointer relative">
            <div>
              <Image
                loader={myLoader}
                src="photos/112460/pexels-photo-112460.jpeg"
                alt="Picture of the author"
                width="345"
                height="231"
                className="relative rounded-lg"
              />
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
      </Layout>
    </div>
  );
};

export default Individual;
