import React from 'react'
import Image from "next/image";
import Link from "next/link";

const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

const Plane = () => {
  return (
    <div className="container grid items-center content-center justify-center grid-cols-1   mx-auto lg:grid-cols-2">
  
      <a>
        <div className="lg:w-[460px] lg:h-[231px] w-auto h-auto shadow-lg rounded-xl mb-14 cursor-pointer">
          <div>
            <Image
              loader={myLoader}
              src="/photos/358319/pexels-photo-358319.jpeg"
              alt="Evolov"
              width="460"
              height="231"
              className="rounded-lg"
            />
          </div>

          <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
            Buy Airplane
          </div>
        </div>
      </a>
   

  
      <a>
        <div className="lg:w-[460px] lg:h-[231px] w-auto h-auto shadow-lg rounded-xl mb-14 cursor-pointer">
          <div>
            <Image
              loader={myLoader}
              src="/photos/11644247/pexels-photo-11644247.jpeg"
              alt="Evolov"
              width="460"
              height="231"
              className="rounded-lg"
            />
          </div>
          <div className="p-3 text-lg font-semibold text-[#221F60] font-mono">
            Book Private Jet
          </div>
        </div>
      </a>
   
  </div>
  )
}

export default Plane