import React, { useState } from "react";
import Rating from "react-rating";
import Image from "next/image";
const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

const SVGIcon = (props) =>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={props.className}>
  <path fill="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>




const IndevidualSeller = () => {
  const [rating, setRating] = useState(3);
  return (
    <>
      <div className="flex-col">
        <div className="flex">
          <div className="items-center lg:px-20 flex space-x-4 text-[#221F60] font-semibold py-3 justify-center lg:mx-2 mx-auto">
            <Image
              loader={myLoader}
              src="photos/1396122/pexels-photo-1396122.jpeg"
              alt="Picture of the author"
              width="150"
              height="150"
              className="items-center justify-center mx-auto rounded-full pt-7"
            />
            <div className="flex-col mt-5">
              <div className="text-xl">Bimasha Zaman</div>
             <div className="flex">
             <Rating className="mt-2" readonly initialRating={rating} emptySymbol={<SVGIcon className="w-5 h-5 text-gray-400" />} fullSymbol={<SVGIcon className="w-5 h-5 text-yellow-800" />} />
             <div>
              <div className="text-sm text-gray-700 mt-3 ml-1">2.5</div>
             </div>
             </div>
              <div className="text-lg text-gray-500 ">52 reviews</div>
              
            </div>
          </div>
          <div className="items-center justify-between hidden ml-10 space-x-10 text-lg lg:flex mt-14 lg:space-x-32">
            <div className="flex-col">
              From
              <div className="font-normal">USA</div>
            </div>
            <div className="flex-col ">
              <div>Member since</div>
              <div className="font-normal">2021</div>
            </div>
          </div>
        </div>
        <div className="mt-2 text-sm px-20 text-[#221F60] font-semibold">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lore,
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lore,
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lore,
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lore,
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lore,
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lore,
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lore,
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lore,
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lore,
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lore,
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lore,
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lore,
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lore,
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lore,
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lore,
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lore,
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lore,
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lore,
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lore,
        </div>
      </div>
    </>
  );
};

export default IndevidualSeller;
