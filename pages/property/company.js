import React, { useState } from "react";
import Layout from "../../components/Layout";
import ImageGallery from "react-image-gallery";
import Image from "next/image";
import Add from "../../components/Favorite/Add";
import ProfileCard from "../../components/Company Card/ProfileCard";
import LikeShare from "../../components/LikeShare/LikeShare";


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



const Property = () => {
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
              Apartment for sale
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
              <div className="flex justify-between lg:px-10">
                <div>
                  <div className="mb-1 text-lg ">Kr 234,567,333</div>
                  <div className="mb-2 text-sm font-normal">
                    Plot size: 2345 sqft
                  </div>
                  <div className="mb-2 text-sm font-normal">
                    Building Year: 2021
                  </div>
                  <div className="mb-2 text-sm font-normal">
                    Building Type: Apartment
                  </div>
                  <div className="mb-2 text-sm font-normal">
                    Size: 2345 sqft
                  </div>
                </div>
                <div className="mt-7">
                  <div className="mb-2 text-sm font-normal">Bedrooms: 2</div>
                  <div className="mb-2 text-sm font-normal">
                    Renovated: 2015
                  </div>
                  <div className="mb-2 text-sm font-normal">Tax: 33684kr </div>
                </div>
              </div>
              <hr className="mt-2 mb-4 bg-gray-400 p-[0.7px]" />
              <div className="text-sm font-normal">
                <div className="text-xl text-gray-600">Facilities:</div>
                <div className="container grid items-center content-center justify-center grid-cols-3 gap-4 mx-auto lg:grid-cols-4 p-7">
                  <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[62px] h-[62px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                      />
                    </svg>

                    <div className="mt-2 text-xs font-normal text-center">
                      WIFI
                    </div>
                  </div>

                  <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[62px] h-[62px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                      />
                    </svg>

                    <div className="mt-2 text-xs font-normal text-center">
                      Dog keepers
                    </div>
                  </div>

                  <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[62px] h-[62px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                      />
                    </svg>
                    <div className="mt-2 text-xs font-normal text-center">
                      Maintanance
                    </div>
                  </div>

                  <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[62px] h-[62px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.867 19.125h.008v.008h-.008v-.008z"
                      />
                    </svg>
                    <div className="mt-2 text-xs font-normal text-center">
                      24 hr Maintanance
                    </div>
                  </div>

                  <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[62px] h-[62px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
                      />
                    </svg>

                    <div className="mt-2 text-xs font-normal text-center">
                      Pool
                    </div>
                  </div>

                  <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[62px] h-[62px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>

                    <div className="mt-2 text-xs font-normal text-center">
                      Fireplace
                    </div>
                  </div>

                  <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[62px] h-[62px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>

                    <div className="mt-2 text-xs font-normal text-center">
                      Garage
                    </div>
                  </div>

                  <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[62px] h-[62px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>

                    <div className="mt-2 text-xs font-normal text-center">
                      Fireplace
                    </div>
                  </div>
                </div>
                <hr className="mt-4 mb-4 bg-gray-300 p-[0.7px]" />
              </div>
              <div className="text-sm font-normal">
                <div className="text-xl text-gray-600">Nearby:</div>
                <div className="container grid items-center content-center justify-center grid-cols-3 gap-4 mx-auto lg:grid-cols-4 p-7">
                  <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[62px] h-[62px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                      />
                    </svg>

                    <div className="mt-2 text-xs font-normal text-center">
                      Factory
                    </div>
                  </div>

                  <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[62px] h-[62px]"
                    >
                      <path
                        strokeLinecap="round"
                        d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>

                    <div className="mt-2 text-xs font-normal text-center">
                      Cinema
                    </div>
                  </div>

                  <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[62px] h-[62px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                      />
                    </svg>

                    <div className="mt-2 text-xs font-normal text-center">
                      Bank
                    </div>
                  </div>

                  <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[62px] h-[62px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                      />
                    </svg>

                    <div className="mt-2 text-xs font-normal text-center">
                      Office
                    </div>
                  </div>

                  <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[62px] h-[62px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                      />
                    </svg>

                    <div className="mt-2 text-xs font-normal text-center">
                      Grocery
                    </div>
                  </div>

                  <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[62px] h-[62px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
                      />
                    </svg>

                    <div className="mt-2 text-xs font-normal text-center">
                      Bakery
                    </div>
                  </div>

                  <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[62px] h-[62px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                      />
                    </svg>

                    <div className="mt-2 text-xs font-normal text-center">
                      University
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

         <ProfileCard />
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
                src="photos/1396122/pexels-photo-1396122.jpeg"
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
                src="photos/1396122/pexels-photo-1396122.jpeg"
                alt="Picture of the author"
                width="345"
                height="231"
                className="relative rounded-lg"
              />
              <div
                className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-400 right-7 top-7 sm:right-2 sm:top-2"
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
                src="photos/1396122/pexels-photo-1396122.jpeg"
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
                src="photos/1396122/pexels-photo-1396122.jpeg"
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
                src="photos/1396122/pexels-photo-1396122.jpeg"
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
                src="photos/1396122/pexels-photo-1396122.jpeg"
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

export default Property;
