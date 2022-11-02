


import React from "react";
import Search from "../../components/Search/Search";
import Layout from "../../components/layout";
import ShowSubCategories from "../../components/Boat/ShowSubCategories";
import Recently_published from "../../components/Boat/recently_published";




const Boat = () => {
  return (
    <div className="bg-[#F9FAFF]">
      <Layout>
        <Search />
        <ShowSubCategories />
        <Recently_published />
      </Layout>
    </div>
  );
};

export default Boat;
