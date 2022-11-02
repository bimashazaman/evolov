import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Rating from "react-rating";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },

  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
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

const ProfileRating = () => {
  const [rating, setRating] = useState(3);
  return (
    <div className="relative mx-auto space-x-2  lg:max-w-6xl my-5">
      <div className="flex">
        <div className="text-[#221F60] text-2xl font-semibold my-2">
          Reviews
        </div>
        <div className="my-3 mx-4 font-semibold text-lg text-gray-600">
          <Rating
            readonly
            initialRating={rating}
            emptySymbol={<SVGIcon className="w-6 h-6 text-gray-400" />}
            fullSymbol={<SVGIcon className="w-6 h-6 text-yellow-800" />}
          />{" "}
          72 Reviews
        </div>
      </div>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        
      >
        <div>
          <div className=" flex-col h-[142px] rounded-lg border border-gray-400 p-5 w-[351px] shadow-2xl mr-10">
            <div className="flex">
              <div className="w-10 h-10 rounded-full bg-gray-300 mr-2">
                <Image
                  loader={myLoader}
                  src="photos/614810/pexels-photo-614810.jpeg"
                  alt="Evolov"
                  width="40"
                  height="40"
                  className="w-full rounded-full object-cover"
                />
              </div>
              <div className=" flex-col">
                <div className=" text-base">John Doe</div>
                <div className="flex">
                  <Rating
                    readonly
                    initialRating={rating}
                    emptySymbol={<SVGIcon className="w-3 h-3 text-gray-400" />}
                    fullSymbol={<SVGIcon className="w-3 h-3 text-yellow-800" />}
                  />
                  <div>
                    <div className="text-sm text-gray-700  ml-1">2.5</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </div>
          </div>
        </div>
        <div>
          <div className=" flex-col h-[142px] rounded-lg border border-gray-400 p-5 w-[351px] shadow-2xl  mr-10">
            <div className="flex">
              <div className="w-10 h-10 rounded-full bg-gray-300 mr-2">
                <Image
                  loader={myLoader}
                  src="photos/614810/pexels-photo-614810.jpeg"
                  alt="Evolov"
                  width="40"
                  height="40"
                  className="w-full rounded-full object-cover"
                />
              </div>
              <div className=" flex-col">
                <div className=" text-base">John Doe</div>
                <div className="flex">
                  <Rating
                    readonly
                    initialRating={rating}
                    emptySymbol={<SVGIcon className="w-3 h-3 text-gray-400" />}
                    fullSymbol={<SVGIcon className="w-3 h-3 text-yellow-800" />}
                  />
                  <div>
                    <div className="text-sm text-gray-700  ml-1">2.5</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </div>
          </div>
        </div>

        <div>
          <div className=" flex-col h-[142px] rounded-lg border border-gray-400 p-5 w-[351px] shadow-2xl  mr-10">
            <div className="flex">
              <div className="w-10 h-10 rounded-full bg-gray-300 mr-2">
                <Image
                  loader={myLoader}
                  src="photos/614810/pexels-photo-614810.jpeg"
                  alt="Evolov"
                  width="40"
                  height="40"
                  className="w-full rounded-full object-cover"
                />
              </div>
              <div className=" flex-col">
                <div className=" text-base">John Doe</div>
                <div className="flex">
                  <Rating
                    readonly
                    initialRating={rating}
                    emptySymbol={<SVGIcon className="w-3 h-3 text-gray-400" />}
                    fullSymbol={<SVGIcon className="w-3 h-3 text-yellow-800" />}
                  />
                  <div>
                    <div className="text-sm text-gray-700  ml-1">2.5</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </div>
          </div>
        </div>
      </Carousel>

      <hr />
      <div className="my-6 text-blue-gray-800 text-2xl font-semibold">
        Write a review
      </div>
      <div className="flex flex-col space-y-4  p-5 rounded-lg border border-gray-300 shadow-lg">
        <div className="flex flex-col space-y-2">
          <div className="text-blue-gray-800 text-lg font-semibold">
            Your rating
          </div>
          <div>
            <input
              type="text"
              placeholder="Write a review"
              className="w-full h-10 border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex justify-between">
            <div>
              <Rating
                initialRating={rating}
                emptySymbol={<SVGIcon className="w-6 h-6 text-gray-400" />}
                fullSymbol={<SVGIcon className="w-6 h-6 text-yellow-800" />}
                onChange={(rate) => setRating(rate)}
              />
            </div>

            <div className="bg-blue-900 mt-2 text-white font-semibold text-sm px-5 py-2 rounded-lg">
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileRating;
