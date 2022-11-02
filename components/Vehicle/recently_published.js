import React from "react";

import Image from "next/image";
import Link from "next/link";

const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

const List_Item = [
  {
    id: 1,
    title: "House",
    image: "/photos/112460/pexels-photo-112460.jpeg",
    city: "Lagos",
    Price: "N 1,000,000",
    currency: "NGN",
    street_address: "Road, Ikeja",
    price: "N 1,000,000",
    is_company: "true",
    building_size: "1000",
    categoryName: "House",
  },
  {
    id: 2,
    title: "House",
    image: "/photos/112460/pexels-photo-112460.jpeg",
    city: "Lagos",
    Price: "N 1,000,000",
    currency: "NGN",
    street_address: "Road, Ikeja",
    price: "N 1,000,000",
    is_company: "true",
    building_size: "1000",
    categoryName: "House",
  },
  /* A comment. */
  {
    id: 3,
    title: "House",
    image: "/photos/112460/pexels-photo-112460.jpeg",
    city: "Lagos",
    Price: "N 1,000,000",
    currency: "NGN",
    street_address: "Road, Ikeja",
    price: "N 1,000,000",
    is_company: "true",
    building_size: "1000",
    categoryName: "House",
  },
];

const Recently_published = () => {
  return (
    <div>
      <div className="text-3xl text-[#221F60] pl-24 mt-9 items-center justify-center font-semibold">
        Recently Published
      </div>
      <div className="items-center justify-center px-20 lg:flex">
        <div className="w-[399px] h-[554px] flex-[1] mx-auto lg:p-1 pr-14">
          <Link href="/property/individual">
            <a>
              <Image
                loader={myLoader}
                src="/photos/2121121/pexels-photo-2121121.jpeg"
                alt="Evolov"
                width="399"
                height="554"
                className="rounded-xl"
              />
            </a>
          </Link>

          <div className="flex justify-between">
            <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
              Appertment for sale
              <div className="text-sm font-normal">City: Dhaka</div>
              <div className="text-sm font-normal"> Price: 1,000,000</div>
              <div className="flex-col p-3 font-semibold text-orange-600">
                Private
                <div className="text-sm font-normal mt-4 text-[#221F60]">
                  25,000m
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex-[2] lg:mt-4 mt-14 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:p-6 pr-20 items-center mx-auto  content-center justify-center">
          {List_Item.map((item, index) => (
            <div key={index} className="h-[278px] mb-5">
              <div className="w-[370px] h-[209px] rounded-xl">
                <Link href="/property/individual">
                  <a>
                    <Image
                      loader={myLoader}
                      src={`${item["image"]}`}
                      alt="Evolov"
                      width="370"
                      height="209"
                      className="rounded-xl"
                    />
                  </a>
                </Link>
                <div className="flex justify-between">
                  <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                    {item["title"] ?? "Appertment for sale"}
                    <div className="text-sm font-normal">{`City: ${item["city"]}, ${item["street_address"]}`}</div>
                    <div className="text-sm font-normal">
                      {" "}
                      {`Price: ${item["currency"]} ${item["price"]}`}{" "}
                    </div>
                  </div>
                  <div className="flex-col p-3 font-semibold text-orange-600">
                    {item["is_company"] ? (
                      <>
                        <Image
                          loader={myLoader}
                          src="/photos/1396122/pexels-photo-1396122.jpeg"
                          alt="Evolov"
                          width="25"
                          height="25"
                          className="rounded-full pt-7"
                        />
                        <span className="ml-2 -mt-3 font-normal text-[#221F60]">
                          {" "}
                          Lock{" "}
                        </span>
                      </>
                    ) : (
                      <div>Private</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recently_published;
