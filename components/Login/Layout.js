import React from "react";

import Image from "next/image";


const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

const bgImage = "/../public/images/bg.png";

const Layout = () => {
  return (
    <>
      <div className="flex-col">
        <div className="flex text-4xl py-14 px-14 font-[900] text-[#2c287a]">
          Find the best Online Market place for you
        </div>

        <div className="items-center justify-center text-center">
          <Image
            loader={myLoader}
            src={"/images/bg.png"}
            alt="Picture of the author"
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  );
};

export default Layout;
