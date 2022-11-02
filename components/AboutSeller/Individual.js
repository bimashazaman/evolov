import React, { useState } from "react";
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineMailOpen,
  HiOutlineBell,
} from "react-icons/hi";
import Image from "next/image";
const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

const IndividualSellerCard = () => {
  const [email, setEmail] = useState(false);
  const [phone, setPhone] = useState(false);
  const [bell, setBell] = useState(false);
  return (
    <center>
      <div className="flex ">
        <div className="items-center flex space-x-4 text-[#221F60] font-semibold p-3 justify-center">
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

            <div className="flex-col">
              <button className="bg-[#221F60] text-white text-sm h-6 px-5 rounded-full flex pt-1 mt-2">
                <HiOutlineMailOpen className="w-5 h-5 mr-1" />
                Contact
              </button>
              <div className="flex items-center justify-center mt-3 space-x-5">
                <div>
                  <HiOutlinePhone
                    className="w-9 h-9 border p-1 bg-[#221F60] text-white  rounded-full cursor-pointer"
                    onClick={() => setPhone(!phone)}
                  />
                  <div className="absolute items-center justify-center -ml-10 text-sm font-semibold">
                    {phone ? (
                      <div className="relative w-full h-full p-3 bg-white shadow-lg">
                        0128393736238
                      </div>
                    ) : null}
                  </div>
                </div>
                <div>
                  <HiOutlineMail
                    className="w-9 h-9 border p-1 bg-[#221F60] text-white  rounded-full cursor-pointer"
                    onClick={() => setEmail(!email)}
                  />
                  <div className="absolute items-center justify-center -ml-10 text-sm font-semibold">
                    {email ? (
                      <div className="relative w-full h-full p-3 bg-white shadow-lg">
                        bimashazaman1234@gmail.com
                      </div>
                    ) : null}
                  </div>
                </div>
                <div>
                  <HiOutlineBell className="w-9 h-9 border p-1 bg-[#221F60] text-white  rounded-full cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
};

export default IndividualSellerCard;
