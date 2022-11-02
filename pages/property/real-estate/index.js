import Link from "next/link";
import React from "react";
import Layout from "../../../components/Layout";
import Add from "../../../components/Favorite/Add";
import Filters from "../../../components/property/realestate/Filters";
import Image from "next/image";
import FilterPhone from "../../../components/property/realestate/FilterPhone";
import { Suspense } from "react";
import SubSearch from "../../../components/Search/SubSearch";
import Breadcrumb from "../../../components/property/realestate/Breadcrumb";
import { Real } from "../../../data/property/data";
import { myLoader } from "../../../components/Favorite/Loader";


const RealEstate = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-[#F9FAFF]">
          <Layout>
            <div className="flex">
              <div className="flex-1 py-16 pl-10 lg:block md:block hidden">
                <Breadcrumb />
                <Filters />
              </div>

              <div className="absolute">
                <FilterPhone />
              </div>

              <div className="flex-auto">
              <SubSearch />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto p-20 items-center content-center justify-center">
                  {Real.map((item, index) => (
                    <div
                      key={index}
                      className="lg:w-[438px] w-auto h-auto lg:h-[238px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative"
                    >
                      <div>
                        <Link href={`/property/sub/${item["id"]}`}>
                          <a>
                            <Image
                              loader={myLoader}
                              src={`${item["image"]}`}
                              alt={item["categoryName"]}
                              width="498"
                              height="268"
                              className="rounded-lg"
                            />
                          </a>
                        </Link>

                        <div className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-400 right-7 top-7 sm:right-3 sm:top-3">
                          <Add />
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                          {item["title"] ?? "Appertment for sale"}
                          <div className="text-sm font-normal">{`City: ${item["city"]}, ${item["street_address"]}`}</div>
                          <div className="text-sm font-normal">
                            {" "}
                            {`Price: ${item["currency"]} ${item["price"]}`}{" "}
                          </div>
                        </div>

                        <div className="flex-col font-semibold text-orange-600 p-3">
                          {item["is_company"] ? (
                            <>
                              <Image
                                loader={myLoader}
                                src="photos/1396122/pexels-photo-1396122.jpeg"
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

                          <div className="text-sm font-normal mt-4 text-[#221F60]">
                            {`Size: ${item["building_size"]}`}
                            <span>
                              m<sup style={{ verticalAlign: "super" }}> 2 </sup>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Layout>
        </div>
      </Suspense>
    </>
  );
};

export default RealEstate;
