import React from "react";
import Search from "../../components/Search/Search";
import Layout from "../../components/layout";
import ShowSubCategories from "../../components/Market/Sub_Category";
import Recently_published from "../../components/Market/recently_published";



const Market = () => {
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

export default Market;
