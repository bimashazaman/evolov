// import React, { useEffect, useState } from "react";
// import Layout from "../../components/Layout";
// import ImageGallery from "react-image-gallery";
// import Image from "next/image";
// import Add from "../../components/Favorite/Add";
// import ProfileCard from "../../components/Company Card/ProfileCard";
// import LikeShare from "../../components/LikeShare/LikeShare";
// import { useRouter } from "next/router";
// import { serverData } from "../../server/apolloClient";

// import { useLazyQuery } from "@apollo/client";
// import { ONE_AD } from "../../server/queries";
// import { svgIcons } from "../../components/svgIcons";

// const myLoader = ({ src, width, quality }) => {
//   return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
// };

// /* Creating an array of objects. */
// const images = [
//   {
//     original:
//       "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     thumbnail:
//       "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     original:
//       "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     thumbnail:
//       "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     original:
//       "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     thumbnail:
//       "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     original:
//       "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     thumbnail:
//       "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     original:
//       "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     thumbnail:
//       "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     original:
//       "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     thumbnail:
//       "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     original:
//       "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     thumbnail:
//       "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     original:
//       "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     thumbnail:
//       "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
// ];

// const PropertyAd = () => {
//   const [datum, setDatum] = useState([]);
//   const [mutate, { data: _data }] = useLazyQuery(ONE_AD);
//   const router = useRouter();
//   const adId = router.query.adId;
//   let data = serverData.getState().gqlData;
//   console.log(data);
//   // useEffect( async() => {
//   //   await mutate({ variables: { id: adId } })
//   //   console.log(_data);
//   // })

//   return (
//     <>
//       <Layout>
//         {/* {datum && datum.map(adItem =>( */}
//         {data &&
//           [Object.values(data).find(({ id }) => id === adId)].map((adItem) => (
//             <div>
//               <ImageGallery items={images} className="mt-20" />
//               <div className="mt-4 ">
//                 <div className="flex px-32">
//                   <LikeShare />
//                 </div>
//                 <div className="container grid items-center content-center justify-center grid-cols-1 gap-4 p-2 mx-auto lg:grid-cols-2 lg:p-20">
//                   <div key={adItem.id} className="text-3xl text-[#221F60]  font-semibold mb-2">
//                     {/* {adItem['title']} */}
//                     <div className="flex text-[#221F60]">
//                       {svgIcons["location"]}
//                       <div className="mt-2 text-sm font-normal ">
//                         {`Address: ${adItem["street_address"]}`}
//                       </div>
//                     </div>
//                     <hr className="mt-2 mb-4 bg-gray-400 p-[0.7px]" />
//                     <div className="flex justify-between lg:px-10">
//                       <div>
//                         <div className="mb-1 text-lg ">{`Price: ${adItem["currency"]} ${adItem["price"]}`}</div>
//                         <div className="mb-2 text-sm font-normal">
//                           {`Plot size: ${adItem["plot_size"]} sqft`}
//                         </div>
//                         <div className="mb-2 text-sm font-normal">
//                           {`Building Year: ${adItem["built_year"]}`}
//                         </div>
//                         <div className="mb-2 text-sm font-normal">
//                           {`Building Type: ${adItem["building_type"]}`}
//                         </div>
//                         <div className="mb-2 text-sm font-normal">
//                           {`Building Size ${adItem["building_size"]} sqft`}
//                         </div>
//                       </div>
//                       <div className="mt-7">
//                         <div className="mb-2 text-sm font-normal">{`Bedrooms: ${adItem["bedrooms"]}`}</div>
//                         <div className="mb-2 text-sm font-normal">
//                           {`Renovated: ${adItem["renovated_year"]}`}
//                         </div>
//                         <div className="mb-2 text-sm font-normal">
//                           Tax: 33684kr{" "}
//                         </div>
//                       </div>
//                     </div>
//                     <hr className="mt-2 mb-4 bg-gray-400 p-[0.7px]" />
//                     <div className="text-sm font-normal">
//                       <div className="text-xl text-gray-600">Facilities:</div>
//                       <div className="container grid items-center content-center justify-center grid-cols-3 gap-4 mx-auto lg:grid-cols-4 p-7">
//                         {adItem["wifi"] && (
//                           <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
//                             {svgIcons["wifi"]}

//                             <div className="mt-2 text-xs font-normal text-center">
//                               WIFI
//                             </div>
//                           </div>
//                         )}

//                         {adItem["dog_keepers"] && (
//                           <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
//                             {svgIcons["dogKeppers"]}

//                             <div className="mt-2 text-xs font-normal text-center">
//                               Dog keepers
//                             </div>
//                           </div>
//                         )}

//                         {adItem["maintanance"] && (
//                           <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
//                             {svgIcons["maintenance"]}
//                             <div className="mt-2 text-xs font-normal text-center">
//                               Maintanance
//                             </div>
//                           </div>
//                         )}

//                         {adItem["maintenance_24_hrs"] && (
//                           <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
//                             {svgIcons["maintenance24Hrs"]}
//                             <div className="mt-2 text-xs font-normal text-center">
//                               24 hr Maintanance
//                             </div>
//                           </div>
//                         )}

//                         {adItem["pool"] && (
//                           <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
//                             {svgIcons["pool"]}

//                             <div className="mt-2 text-xs font-normal text-center">
//                               Pool
//                             </div>
//                           </div>
//                         )}

//                         {adItem["fireplace"] && (
//                           <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
//                             {svgIcons["fireplace"]}

//                             <div className="mt-2 text-xs font-normal text-center">
//                               Fireplace
//                             </div>
//                           </div>
//                         )}

//                         {adItem["garage"] && (
//                           <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
//                             {svgIcons["garage"]}

//                             <div className="mt-2 text-xs font-normal text-center">
//                               Garage
//                             </div>
//                           </div>
//                         )}

//                         {adItem["fireplace"] && (
//                           <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
//                             {svgIcons["fireplace"]}

//                             <div className="mt-2 text-xs font-normal text-center">
//                               Fireplace
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                       <hr className="mt-4 mb-4 bg-gray-300 p-[0.7px]" />
//                     </div>
//                     <div className="text-sm font-normal">
//                       <div className="text-xl text-gray-600">Nearby:</div>
//                       <div className="container grid items-center content-center justify-center grid-cols-3 gap-4 mx-auto lg:grid-cols-4 p-7">
//                         {adItem["factory"] && (
//                           <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
//                             {svgIcons["factory"]}

//                             <div className="mt-2 text-xs font-normal text-center">
//                               Factory
//                             </div>
//                           </div>
//                         )}

//                         {
//                           <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
//                             {svgIcons["cinema"]}

//                             <div className="mt-2 text-xs font-normal text-center">
//                               {adItem["cinema"] ? `Cinema: Yes` : `Cinema: No`}
//                             </div>
//                           </div>
//                         }

//                         <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
//                           {svgIcons["bank"]}

//                           <div className="mt-2 text-xs font-normal text-center">
//                             {adItem["bank"] ? `Bank: Yes` : `Bank: No`}
//                           </div>
//                         </div>

//                         <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
//                           {svgIcons["office"]}

//                           <div className="mt-2 text-xs font-normal text-center">
//                             {adItem["office"] ? `Office: Yes` : `Office: No`}
//                           </div>
//                         </div>

//                         <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
//                           {svgIcons["grocery"]}

//                           <div className="mt-2 text-xs font-normal text-center">
//                             {adItem["grocery"] ? `Grocery: Yes` : `Grocery: No`}
//                           </div>
//                         </div>

//                         <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
//                           {svgIcons["bakery"]}

//                           <div className="mt-2 text-xs font-normal text-center">
//                             {adItem["bakery"] ? `Bakery: Yes` : `Bakery: No`}
//                           </div>
//                         </div>

//                         <div className="bg-white shadow-md w-[67px] h-[67px] items-center justify-center hover:shadow-xl cursor-pointer mt-6">
//                           {svgIcons["university"]}

//                           <div className="mt-2 text-xs font-normal text-center">
//                             {adItem["university"]
//                               ? `University: Yes`
//                               : `University: No`}
//                           </div>
//                         </div>
//                       </div>
//                       <hr className="mt-4 mb-4 bg-gray-300 p-[0.7px]" />
//                     </div>
//                     <div>
//                       Description
//                       <div className="mt-3 text-sm font-normal">
//                         lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                         Sed lore, consectetur adipiscing elit. Sed lorem ipsum
//                         dolor sit amet, consectetur adipiscing elit. Sed lore,
//                         consectetur adipiscing elit. Sed lorem ipsum dolor sit
//                         amet, consectetur adipiscing elit. Sed lore, consectetur
//                         adipiscing elit. Sed lorem ipsum dolor sit amet,
//                         consectetur adipiscing elit. Sed lore, consectetur
//                         adipiscing elit. Sed lorem ipsum dolor sit amet,
//                         consectetur adipiscing elit. Sed lore, consectetur
//                         adipiscing elit. Sed lorem ipsum dolor sit amet,
//                         consectetur adipiscing elit. Sed lore, consectetur
//                         adipiscing elit. Sed lorem ipsum dolor sit amet,
//                         consectetur adipiscing elit. Sed lore, consectetur
//                         adipiscing elit. Sed lorem ipsum dolor sit amet,
//                         consectetur adipiscing elit. Sed lore, consectetur
//                         adipiscing elit. Sed lorem ipsum dolor sit amet,
//                         consectetur adipiscing elit. Sed lore, consectetur
//                         adipiscing elit. Sed lorem ipsum dolor sit amet,
//                         consectetur adipiscing elit. Sed lore, consectetur
//                         adipiscing elit. Sed lorem ipsum dolor sit amet,
//                         consectetur adipiscing elit. Sed lore, consectetur
//                         adipiscing elit. Sed lorem ipsum dolor sit amet,
//                         consectetur adipiscing elit. Sed lore, consectetur
//                         adipiscing elit. Sed lorem ipsum dolor sit amet,
//                         consectetur adipiscing elit. Sed lore, consectetur
//                         adipiscing elit. Sed lorem ipsum dolor sit amet,
//                         consectetur adipiscing elit. Sed lore, consectetur
//                         adipiscing elit. Sed lorem ipsum dolor sit amet,
//                         consectetur adipiscing elit. Sed lore, consectetur
//                         adipiscing elit. Sed lorem ipsum dolor sit amet,
//                         consectetur adipiscing elit. Sed lore, consectetur
//                         adipiscing elit. Sed lorem ipsum dolor sit amet,
//                         consectetur adipiscing elit. Sed lore, consectetur
//                         adipiscing elit. Sed lorem ipsum dolor sit amet,
//                         consectetur adipiscing elit. Sed lore, consectetur
//                         adipiscing elit. Sed lorem ipsum dolor sit amet,
//                         consectetur adipiscing elit. Sed lore, consectetur
//                         adipiscing elit. Sed
//                       </div>
//                     </div>
//                   </div>

//                   <ProfileCard />
//                 </div>
//               </div>
//               <div className="text-3xl text-[#221F60] pl-24 mt-9 font-semibold -mb-10">
//                 More Offers from this Seller
//               </div>
//               <div className="container relative grid items-center content-center justify-center grid-cols-1 gap-4 p-20 mx-auto lg:grid-cols-3 ">
//                 <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-24 cursor-pointer relative">
//                   <div>
//                     <Image
//                       loader={myLoader}
//                       src="photos/1396122/pexels-photo-1396122.jpeg"
//                       alt="Picture of the author"
//                       width="345"
//                       height="231"
//                       className="relative rounded-lg"
//                     />
//                     <div
//                       className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-400 right-7 top-7 sm:right-3 sm:top-3"
//                       title="Save"
//                     >
//                       <Add />
//                     </div>
//                   </div>

//                   <div className="flex justify-between">
//                     <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
//                       Appertment for sale
//                       <div className="text-sm font-normal">New jersey</div>
//                       <div className="text-sm font-normal">kr 4343,342,34</div>
//                     </div>
//                     <div className="flex-col p-3 font-semibold text-orange-600">
//                       Private
//                       <div className="text-sm font-normal mt-5 text-[#221F60]">
//                         25,000m
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-24 cursor-pointer relative">
//                   <div>
//                     <Image
//                       loader={myLoader}
//                       src="photos/1396122/pexels-photo-1396122.jpeg"
//                       alt="Picture of the author"
//                       width="345"
//                       height="231"
//                       className="relative rounded-lg"
//                     />
//                     <div
//                       className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-400 right-7 top-7 sm:right-2 sm:top-2"
//                       title="Save"
//                     >
//                       <Add />
//                     </div>
//                   </div>

//                   <div className="flex justify-between">
//                     <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
//                       Appertment for sale
//                       <div className="text-sm font-normal">New jersey</div>
//                       <div className="text-sm font-normal">kr 4343,342,34</div>
//                     </div>
//                     <div className="flex-col p-3 font-semibold text-orange-600">
//                       Private
//                       <div className="text-sm font-normal mt-5 text-[#221F60]">
//                         25,000m
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-24 cursor-pointer relative">
//                   <div>
//                     <Image
//                       loader={myLoader}
//                       src="photos/1396122/pexels-photo-1396122.jpeg"
//                       alt="Picture of the author"
//                       width="345"
//                       height="231"
//                       className="relative rounded-lg"
//                     />
//                     <div
//                       className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-400 right-7 top-7 sm:right-3 sm:top-3"
//                       title="Save"
//                     >
//                       <Add />
//                     </div>
//                   </div>

//                   <div className="flex justify-between">
//                     <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
//                       Appertment for sale
//                       <div className="text-sm font-normal">New jersey</div>
//                       <div className="text-sm font-normal">kr 4343,342,34</div>
//                     </div>
//                     <div className="flex-col p-3 font-semibold text-orange-600">
//                       Private
//                       <div className="text-sm font-normal mt-5 text-[#221F60]">
//                         25,000m
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-24 cursor-pointer relative">
//                   <div>
//                     <Image
//                       loader={myLoader}
//                       src="photos/1396122/pexels-photo-1396122.jpeg"
//                       alt="Picture of the author"
//                       width="345"
//                       height="231"
//                       className="relative rounded-lg"
//                     />
//                     <div
//                       className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-400 right-7 top-7 sm:right-3 sm:top-3"
//                       title="Save"
//                     >
//                       <Add />
//                     </div>
//                   </div>

//                   <div className="flex justify-between">
//                     <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
//                       Appertment for sale
//                       <div className="text-sm font-normal">New jersey</div>
//                       <div className="text-sm font-normal">kr 4343,342,34</div>
//                     </div>
//                     <div className="flex-col p-3 font-semibold text-orange-600">
//                       Private
//                       <div className="text-sm font-normal mt-5 text-[#221F60]">
//                         25,000m
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-24 cursor-pointer relative">
//                   <div>
//                     <Image
//                       loader={myLoader}
//                       src="photos/1396122/pexels-photo-1396122.jpeg"
//                       alt="Picture of the author"
//                       width="345"
//                       height="231"
//                       className="relative rounded-lg"
//                     />
//                     <div
//                       className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-400 right-7 top-7 sm:right-3 sm:top-3"
//                       title="Save"
//                     >
//                       <Add />
//                     </div>
//                   </div>

//                   <div className="flex justify-between">
//                     <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
//                       Appertment for sale
//                       <div className="text-sm font-normal">New jersey</div>
//                       <div className="text-sm font-normal">kr 4343,342,34</div>
//                     </div>
//                     <div className="flex-col p-3 font-semibold text-orange-600">
//                       Private
//                       <div className="text-sm font-normal mt-5 text-[#221F60]">
//                         25,000m
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="w-[345px] h-[231px] shadow-lg rounded-xl mb-24 cursor-pointer relative">
//                   <div>
//                     <Image
//                       loader={myLoader}
//                       src="photos/1396122/pexels-photo-1396122.jpeg"
//                       alt="Picture of the author"
//                       width="345"
//                       height="231"
//                       className="relative rounded-lg"
//                     />
//                     <div
//                       className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-400 right-7 top-7 sm:right-3 sm:top-3"
//                       title="Save"
//                     >
//                       <Add />
//                     </div>
//                   </div>

//                   <div className="flex justify-between">
//                     <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
//                       Appertment for sale
//                       <div className="text-sm font-normal">New jersey</div>
//                       <div className="text-sm font-normal">kr 4343,342,34</div>
//                     </div>
//                     <div className="flex-col p-3 font-semibold text-orange-600">
//                       Private
//                       <div className="text-sm font-normal mt-5 text-[#221F60]">
//                         25,000m
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//       </Layout>
//     </>
//   );
// };

// export default PropertyAd;


import React from 'react'

const Test = () => {
  return (
    <div>Test</div>
  )
}

export default Test
