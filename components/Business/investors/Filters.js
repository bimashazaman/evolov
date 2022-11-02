import React, { useState } from "react";
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
            country: "",
            city: "",
            stage: "",
            investment_field: "",
            sizeof_investment: "",

            reward: "",
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
                placeholder="stage"
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="stage"
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <input
                type="text"
                placeholder="Investment Field"
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="investment_field"
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <input
                type="text"
                placeholder="Size Of Investment"
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="sizeof_investment"
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <input
                type="text"
                placeholder="reward"
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="reward"
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <input
                type="text"
                placeholder="reward"
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="reward"
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
