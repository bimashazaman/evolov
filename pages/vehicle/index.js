import React from "react";
import Layout from "../../components/Layout";
import Search from "../../components/Search/Search";
import ShowSubCategories from "../../components/Vehicle/subCategory/Sub_Category";
import Random_Listing from "../../components/Vehicle/random_listing";
import Recently_published from "../../components/Vehicle/recently_published";

const Vehicle = () => {
  return (
    <div className="bg-[#F9FAFF]">
      <Layout>
        {/* A search bar. */}
        <Search />
        <ShowSubCategories />
        <Random_Listing />
        <Recently_published />
      </Layout>
    </div>
  );
};

export default Vehicle;
