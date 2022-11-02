import React from "react";
import Layout from "../../components/Layout";
import ImageGallery from "react-image-gallery";
import Image from "next/image";
import ProfileCard from "../../components/Company Card/ProfileCard";
import Add from "../../components/Favorite/Add";
import LikeShare from "../../components/LikeShare/LikeShare";

const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};


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

const Boat = () => {
  return (
    <div>
      <Layout>
        <ImageGallery items={images} className="mt-20" />;
        <div className="mt-4 ">
          <div className="flex px-32">
            <LikeShare />
          </div>
          <div className="container grid items-center content-center justify-center grid-cols-1 gap-4 p-2 mx-auto lg:grid-cols-2 lg:p-20">
            <div className="text-3xl text-[#221F60]  font-semibold mb-2">
              Car for sale
              <div className="flex text-[#221F60]">
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
                <div className="mt-2 text-sm font-normal ">
                  address 3434, 4th street, New York, USA
                </div>
              </div>
              <hr className="mt-2 mb-4 bg-gray-400 p-[0.7px]" />
              <div className="text-sm font-normal">
                <div className="flex  w-full justify-between lg:px-10">
                  <div>
                    <div className="mb-1 text-gray-800 font-semibold">
                      Country : USA
                    </div>
                    <div className="mb-1 text-gray-800 font-semibold">
                      City : New York
                    </div>
                    <div className="mb-1 text-gray-800 font-semibold">
                      Type : Boat
                    </div>
                    <div className="mb-1 text-gray-800 font-semibold">
                      Seller: John Doe
                    </div>
                  </div>

                  <div>
                    <div className="mb-1 text-gray-800 font-semibold">
                      Price : $ 2000
                    </div>
                    <div className="mb-1 text-gray-800 font-semibold">
                      Year : 2021
                    </div>
                    <div className="mb-1 text-gray-800 font-semibold">
                      Condition : New
                    </div>
                    <div className="mb-1 text-gray-800 font-semibold">
                      Color: Red
                    </div>
                  </div>
                </div>
                <hr className="mt-4 mb-4 bg-gray-300 p-[0.7px]" />
              </div>
              <div>
                Description
                <div className="mt-3 text-sm font-normal">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  lore, consectetur adipiscing elit. Sed lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Sed lore, consectetur
                </div>
              </div>
            </div>

            <div className="mt-[100%]">
              <ProfileCard />
            </div>
          </div>
        </div>
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
        </div>
      </Layout>
    </div>
  );
};

export default Boat;
