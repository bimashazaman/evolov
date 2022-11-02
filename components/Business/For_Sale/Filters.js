import React, { useState } from "react";
import Price, { Year } from "./Slide";
import "rsuite/dist/rsuite.min.css";
import { Formik } from "formik";

const Filters = () => {
  const [priceValue, setPriceValue] = useState([0, Infinity]);
  const [year, setYear] = useState([0, Infinity]);
  return (
    <>
      <div>
        <div className="text-[#221F60] text-xl my-8">Search by Filters</div>

        <Formik
          initialValues={{
            min_price: priceValue[0],
            max_price: priceValue[1],
            min_year: year[0],
            max_year: year[1],
            country: "",
            city: "",
            revenue: 0,
            customers: 0,
            employees: 0,
            business_type: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ values, handleChange, handleSubmit, handleBlur }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="country"
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="country"
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <input
                type="text"
                placeholder="city"
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="city"
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <input
                type="text"
                placeholder="business_type"
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="business_type"
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <div className="bg-white px-2 my-2 border border-gray-400 py-2 text-gray-600 text-sm rounded-lg">
                Price
                <Price setPriceValue={setPriceValue} />
              </div>

              <div className="bg-white px-2 my-2 border border-gray-400 py-2 text-gray-600 text-sm rounded-lg">
                Year
                <Year setYear={setYear} />
              </div>

              <input
                type="text"
                placeholder="revenue"
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="revenue"
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <input
                type="text"
                placeholder="customers"
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="customers"
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <input
                type="text"
                placeholder="employees"
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="employees"
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <button
                type="submit"
                className="bg-[#221F60] text-white text-sm font-medium rounded-full px-4 py-2 mt-3"
              >
                Apply Filters
              </button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Filters;
