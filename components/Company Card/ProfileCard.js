import React, { useState } from "react";
import Image from "next/image";
import Rating from "react-rating";

const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

const SVGIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={props.className}
  >
    <path
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
    />
  </svg>
);

const ProfileCard = () => {
  const [rating, setRating] = useState(3);
  return (
    <div className="shadow-xl p-1 mt-0 top-0 lg:mt-[-100%] lg:mx-10">
      <center>
        <Image
          loader={myLoader}
          src="photos/1396122/pexels-photo-1396122.jpeg"
          alt="Picture of the author"
          width="150"
          height="150"
          className="items-center justify-center mx-auto rounded-full pt-7"
        />
        <div className="text-xl font-semibold text-[#221F60]">Lock</div>
        <div className="text-sm mb-1 font-normal text-[#221F60]">
          Company design
        </div>
        <div className="flex items-center justify-center">
          <Rating
            className="mt-2"
            readonly
            initialRating={rating}
            emptySymbol={<SVGIcon className="w-5 h-5 text-gray-400" />}
            fullSymbol={<SVGIcon className="w-5 h-5 text-yellow-800" />}
          />
          <div>
            <div className="text-sm text-gray-700 mt-3 ml-1">2.5</div>
          </div>
        </div>
        <div className="text-lg text-gray-500 ">52 reviews</div>

        <div className="px-6 py-3">
          lorem34 hjdjshadjhaskjd dskjvfhdskjfhv dfvkljfdlijv ldjvkdfhv
          kldfvlkdf fdkjvnfdvf
        </div>
        <hr className="mt-2 mb-4 bg-gray-300 p-[0.7px]" />
      </center>
      <div className="px-6">
        <div className="flex justify-between mb-5">
          <div className="flex">
            <Image
              loader={myLoader}
              src="photos/1396122/pexels-photo-1396122.jpeg"
              alt="Picture of the author"
              width="82"
              height="82"
              className="items-center justify-center mx-auto rounded-full pt-7"
            />

            <div className="flex-col items-center text-[#221F60] font-semibold p-3 justify-center">
              Bimasha Zaman
              <div className="mb-1 text-xs font-semibold">Broker Agent</div>
              <div className="text-xs font-semibold ">
                Phone +987 4783493 3u33
              </div>
            </div>
          </div>

          <div className="items-center justify-center mt-4 ">
            <button className="bg-[#221F60] text-white text-sm h-6 px-5 rounded-full flex pt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
              Contact
            </button>
          </div>
        </div>
        <div className="flex justify-between mb-5">
          <div className="flex">
            <Image
              loader={myLoader}
              src="photos/1396122/pexels-photo-1396122.jpeg"
              alt="Picture of the author"
              width="82"
              height="82"
              className="items-center justify-center mx-auto rounded-full pt-7"
            />

            <div className="flex-col items-center text-[#221F60] font-semibold p-3 justify-center">
              Bimasha Zaman
              <div className="mb-1 text-xs font-semibold">Broker Agent</div>
              <div className="text-xs font-semibold ">
                Phone +987 4783493 3u33
              </div>
            </div>
          </div>

          <div className="items-center justify-center mt-4 ">
            <button className="bg-[#221F60] text-white text-sm h-6 px-5 rounded-full flex pt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
              Contact
            </button>
          </div>
        </div>
        <hr className="mt-2 mb-4 bg-gray-300 p-[0.7px]" />
        <div className="flex-col py-3">
          <div className="flex text-[#221F60] font-semibold mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
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

            <span>1234 Main Street, New York, NY 10001</span>
          </div>
          <div className="flex text-[#221F60] font-semibold mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>

            <span>www.example.com</span>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
