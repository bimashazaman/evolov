import React from "react";
import Price, { Acceleration, Mileage, Year } from "./Slide";
import "rsuite/dist/rsuite.min.css";

const Filters = () => {
  return (
    <>
      <div>
        <div className="text-[#221F60] text-xl my-8">Search by Filters</div>

        <select
          defaultValue={"DEFAULT"}
          className="bg-white border border-gray-400 text-gray-600 text-sm rounded-lg  outline-none block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3"
        >
          <option value="DEFAULT" disabled>
            Category
          </option>
          <option>United States</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>

        <select
          defaultValue={"DEFAULT"}
          className="bg-white border border-gray-400 text-gray-600 text-sm rounded-lg  outline-none block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3"
        >
          <option value="DEFAULT" disabled>
            Country
          </option>
          <option>United States</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>

        <select
          defaultValue={"DEFAULT"}
          className="bg-white border border-gray-400 text-gray-600 text-sm rounded-lg  outline-none block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3"
        >
          <option value="DEFAULT" disabled>
            City
          </option>
          <option>United States</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>

        <div className="bg-white border border-gray-400 text-gray-600 text-sm rounded-lg  outline-none block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3 h-32">
          <div className="flex justify-between p-3">
           <div>
            From
           </div>
           <div>
            <input type="text" className="border border-gray-600 rounded-full p-1 bg-gray-100"/>
           </div>
          </div>

          <div className="flex justify-between p-3">
           <div>
            To
           </div>
           <div>
            <input type="text" className="border border-gray-600 rounded-full p-1 bg-gray-100"/>
           </div>
          </div>
        </div>

        <div className="bg-white border border-gray-400 text-gray-600 text-sm rounded-lg  outline-none block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3 h-32">
          <div className="flex justify-between p-3">
           <div>
            Deperture
           </div>
           <div>
            <input type="date" className="border border-gray-600 rounded-full p-1 bg-gray-100"/>
           </div>
          </div>

          <div className="flex justify-between p-3">
           <div>
            Return
           </div>
           <div>
            <input type="date" className="border border-gray-600 rounded-full p-1 bg-gray-100"/>
           </div>
          </div>
        </div>

        <select
          defaultValue={"DEFAULT"}
          className="bg-white border border-gray-400 text-gray-600 text-sm rounded-lg  outline-none block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3"
        >
          <option value="DEFAULT" disabled>
            Brand
          </option>
          <option>United States</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>
        
       
        <div className="bg-white px-2 my-2 border border-gray-400 py-2 text-gray-600 text-sm rounded-lg">
          Price
          <Price />
        </div>

        <select
          defaultValue={"DEFAULT"}
          className="bg-white border border-gray-400 text-gray-600 text-sm rounded-lg  outline-none block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3"
        >
          <option value="DEFAULT" disabled>
            Model
          </option>
          <option>United States</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>

       

        <select
          defaultValue={"DEFAULT"}
          className="bg-white border border-gray-400 text-gray-600 text-sm rounded-lg  outline-none block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3"
        >
          <option value="DEFAULT" disabled>
           Service
          </option>
          <option>United States</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>

        <select
          defaultValue={"DEFAULT"}
          className="bg-white border border-gray-400 text-gray-600 text-sm rounded-lg  outline-none block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3"
        >
          <option value="DEFAULT" disabled>
            Food
          </option>
          <option>United States</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>

        <select
          defaultValue={"DEFAULT"}
          className="bg-white border border-gray-400 text-gray-600 text-sm rounded-lg  outline-none block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3"
        >
          <option value="DEFAULT" disabled>
            Drink
          </option>
          <option>United States</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>


        <button
          type="submit"
          className="bg-[#221F60] text-white text-sm font-medium rounded-full px-4 py-2 mt-3"
        >
          Apply Filters
        </button>
      </div>
    </>
  );
};

export default Filters;
