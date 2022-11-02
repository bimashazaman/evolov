import React from "react";

const SubSearch = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="items-center justify-center mt-10 w-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-[#221F60] absolute items-center justify-center mt-2 ml-[6px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="placeholder-style border p-2 pl-10 border-[#221F60] w-full rounded-full outline-none ring-blue-700"
        />
      </div>

      <button className="px-6 bg-[#221F60] items-center justify-center ml-4 text-white rounded-full py-1 h-10 mt-[40px]">
        Search
      </button>

      <div className="lg:flex flex-col hidden">
        <select
          id="countries"
          className="bg-white border border-gray-400 text-gray-600 text-sm rounded-lg  outline-none block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-10 ml-6"
        >
          <option selected>Sales form</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
        <select
          id="countries"
          className="bg-white border border-gray-400 text-gray-600 text-sm rounded-lg  outline-none block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-1 ml-6"
        >
          <option selected>Sort By</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
    </div>
  );
};

export default SubSearch;
