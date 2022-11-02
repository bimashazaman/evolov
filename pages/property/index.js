import React from "react";
import Layout from "../../components/Layout";
import ShowSubCategories from "../../components/property/house/SubCategory";
import Random_Listing from "../../components/property/Random_Listing";
import Recently_published from "../../components/property/recently_published";
import Search from "../../components/Search/Search";
import { SUB_ITEMS } from "../../data/property/Sub_Category_Items";

const Properties = () => {
  return (
  <>
  <div className="bg-[#F9FAFF] flex-col">
    <Layout>
      <Search />
      <ShowSubCategories SUB_ITEMS={SUB_ITEMS} />;
      <Random_Listing />
      <Recently_published />
    </Layout>
  </div>;
  </>
  );
};


export default Properties;
