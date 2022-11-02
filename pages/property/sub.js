// import React, { Fragment, useContext, useEffect, useState } from "react";
// import Layout from "../../components/Layout";
// import Filters from "../../components/property/Filters";
// import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
// import FilterPhone from "../../components/property/FilterPhone";
// import { Suspense } from "react";
// import SubSearch from "../../components/Search/SubSearch";
// import { authContext } from "../../server/firebase";
// import { HOUSE_FILTER } from "../../server/queries";
// import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
// import { binarySearch } from "../../server/currencies";
// import { cleanFilterData } from "../../server/apolloClient";
// import AdThumbNail from "../adThumbNail";


// const myLoader = ({ src, width, quality }) => {
//   return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
// };

// const Sub = () => {
//   const { currentUser, logout } = useContext(authContext)
//   // console.log(currentUser);
//   const { data } = useQuery(HOUSE_FILTER, {
//     variables: {
//       subCategoryName: "house", country: "Norway"
//     }
//   })  
  
//   const [dataArr, setDataArr] = useState([])
//   useEffect(() => {
//     if(data?.houseFilter?.edges){
//       const currency = binarySearch("Norway")
//       const arr = cleanFilterData(data, currency, setDataArr)
      
//     }
//   }, [data]);
//   return (
//     <>
//       <Suspense fallback={<div>Loading...</div>}>
//         <div className="bg-[#F9FAFF]">
//           <Layout>
//             <div className="flex">
//               <div className="flex-1 py-16 pl-10 lg:block md:block hidden">
//                 <Breadcrumb />
//                 <Filters />
//               </div>

//               <div className="absolute">
//                 <FilterPhone />
//               </div>

//               <div className="flex-auto">
//                 <SubSearch />
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto p-20 items-center content-center justify-center">
//                 {dataArr && dataArr.map((item, index)=>(
//                   <Fragment key={index}>
//                     <AdThumbNail item={item} index={index} myLoader={myLoader}  /> 
//                   </Fragment>
//                 ))}
//                 </div>
//               </div>
//             </div>
//           </Layout>
//         </div>
//       </Suspense>
//     </>
//   );
// };

// export default Sub;


import React from 'react'

const Hi = () => {
  return (
    <div>Hi</div>
  )
}

export default Hi