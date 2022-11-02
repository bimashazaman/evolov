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

        <select
          defaultValue={"DEFAULT"}
          className="bg-white border border-gray-400 text-gray-600 text-sm rounded-lg  outline-none block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3"
        >
          <option value="DEFAULT" disabled>
            Type of Boat
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
            Seller
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
            Color
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
            Owner
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
            Model
          </option>
          <option>United States</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>

        <input
          type="text"
          placeholder="Year"
          className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="country"
        />

        <input
          type="text"
          placeholder="Speed"
          className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="country"
        />

        <input
          type="number"
          placeholder="Beds"
          className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="country"
        />

        <input
          type="number"
          placeholder="Seats"
          className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="country"
        />
        <input
          type="number"
          placeholder="Deck"
          className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="country"
        />

        <input
          type="number"
          placeholder="Capacity"
          className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="country"
        />

        <input
          type="number"
          placeholder="Length"
          className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="country"
        />

        <input
          type="number"
          placeholder="Width"
          className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="country"
        />

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
