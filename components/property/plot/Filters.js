import React, { useState } from "react";
import Price from "./price";
import "rsuite/dist/rsuite.min.css";
import { Formik } from "formik";

const Filters = () => {
  const [priceValue, setPriceValue] = useState([0, Infinity]);
  const [selectedOption, setSelectedOption] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState(false);
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          city: "",
          country: "",
          usage_permission: "",
          min_price: priceValue[0],
          max_price: priceValue[1],
          plot_size: 0,

          facilities: [],
          nearby: [],
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className=" w-64">
              <div className="text-[#221F60] text-xl my-8">
                Search by Filters
              </div>

              <input
                type="text"
                placeholder="Country"
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

              <div className="px-2 py-2 my-2 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg">
                Price
                <Price setPriceValue={setPriceValue} />
              </div>

              <select
                defaultValue={"DEFAULT"}
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="usage_permission"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="DEFAULT" disabled>
                  Usage Permission
                </option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Industrial">Industrial</option>
                <option value="Agricultural">Agricultural</option>
                <option value="Mixed">Mixed</option>
                <option value="Institutional">Institutional</option>
                <option value="Other">Other</option>
              </select>

              <input
                type="text"
                placeholder="Plot Size"
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="plot_size"
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <div
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onClick={() => setSelectedOption(!selectedOption)}
              >
                Facilities
              </div>
              {selectedOption ? (
                <div className="bg-white rounded-md shadow-md pl-3">
                  <input
                    type="checkbox"
                    name="facilities"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    value={"Internet"}
                    id="internet-checkbox"
                  />{" "}
                  <label
                    className="text-base font-semibold text-gray-700"
                    htmlFor="internet-checkbox"
                  >
                    Internet
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="facilities"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={"Parking"}
                    id="parking-checkbox"
                  />{" "}
                  <label
                    className="text-base font-semibold text-gray-700"
                    htmlFor="parking-checkbox"
                  >
                    Parking
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="facilities"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={"Gym"}
                    id="gym-checkbox"
                  />{" "}
                  <label
                    className="text-base font-semibold text-gray-700"
                    htmlFor="gym-checkbox"
                  >
                    Gym
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="facilities"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={"Dog keeper"}
                    id="dog-keeper-checkbox"
                  />{" "}
                  <label
                    className="text-base font-semibold text-gray-700"
                    htmlFor="dog-keeper-checkbox"
                  >
                    Dog keeper
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="facilities"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={"Swimming Pool"}
                    id="swimming-pool-checkbox"
                  />{" "}
                  <label
                    className="text-base font-semibold text-gray-700"
                    htmlFor="swimming-pool-checkbox"
                  >
                    Swimming Pool
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="facilities"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={"Garden"}
                    id="garden-checkbox"
                  />{" "}
                  <label
                    className="text-base font-semibold text-gray-700"
                    htmlFor="garden-checkbox"
                  >
                    Garden
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="facilities"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={"Elevator"}
                    id="elevator-checkbox"
                  />{" "}
                  <label
                    className="text-base font-semibold text-gray-700"
                    htmlFor="elevator-checkbox"
                  >
                    Elevator
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="facilities"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={"Security"}
                    id="security-checkbox"
                  />{" "}
                  <label
                    className="text-base font-semibold text-gray-700"
                    htmlFor="security-checkbox"
                  >
                    Security
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="facilities"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={"Air Conditioning"}
                    id="air-conditioning-checkbox"
                  />{" "}
                  <label
                    className="text-base font-semibold text-gray-700"
                    htmlFor="air-conditioning-checkbox"
                  >
                    Air Conditioning
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="facilities"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={"Oven"}
                    id="oven-checkbox"
                  />{" "}
                  <label
                    className="text-base font-semibold text-gray-700"
                    htmlFor="oven-checkbox"
                  >
                    Oven
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="facilities"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={"Fridge"}
                    id="fridge-checkbox"
                  />{" "}
                  <label
                    className="text-base font-semibold text-gray-700"
                    htmlFor="fridge-checkbox"
                  >
                    Fridge
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="facilities"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={"Washing Machine"}
                    id="washing-machine-checkbox"
                  />{" "}
                  <label
                    className="text-base font-semibold text-gray-700"
                    htmlFor="washing-machine-checkbox"
                  >
                    Washing Machine
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="facilities"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={"Microwave"}
                  />{" "}
                  <label
                    className="text-base font-semibold text-gray-700"
                    htmlFor="microwave-checkbox"
                  >
                    Microwave
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="facilities"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={"Dishwasher"}
                    id="dishwasher-checkbox"
                  />{" "}
                  <label
                    className="text-base font-semibold text-gray-700"
                    htmlFor="dishwasher-checkbox"
                  >
                    Dishwasher
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="facilities"
                    value={"Water"}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    id="water-checkbox"
                  />{" "}
                  <label
                    className="text-base font-semibold text-gray-700"
                    htmlFor="water-checkbox"
                  >
                    Water
                  </label>
                  <br />
                </div>
              ) : null}

              <div
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onClick={() => {
                  setSelectedOption2(!selectedOption2);
                }}
              >
                Nearby
              </div>
              {selectedOption2 ? (
                <div className="bg-white rounded-md shadow-md pl-3">
                  <input
                    type="checkbox"
                    name="nearby"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={"Bus Stop"}
                    id="bus-stop-checkbox"
                  />{" "}
                  <label
                    className="text-base font-semibold text-gray-700"
                    htmlFor="bus-stop-checkbox"
                  >
                    Bus Stop
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="nearby"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={"Train Station"}
                    id="train-station-checkbox"
                  />{" "}
                  <label
                    className="text-base font-semibold text-gray-700"
                    htmlFor="train-station-checkbox"
                  >
                    Train Station
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="nearby"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={"Supermarket"}
                    id="supermarket-checkbox"
                  />{" "}
                  <label
                    className="text-base font-semibold text-gray-700"
                    htmlFor="supermarket-checkbox"
                  >
                    Supermarket
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="nearby"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-600"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={"School"}
                    id="school-checkbox"
                  />{" "}
                  <label
                    className="text-base font-semibold text-gray-700"
                    htmlFor="school-checkbox"
                  >
                    School
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="nearby"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-600"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={"Hospital"}
                    id="hospital-checkbox"
                  />{" "}
                  <label
                    className="text-base font-semibold text-gray-700"
                    htmlFor="hospital-checkbox"
                  >
                    Hospital
                  </label>
                  <br />
                </div>
              ) : null}

              <button
                type="submit"
                className="bg-[#221F60] text-white text-sm font-medium rounded-full px-4 py-2 mt-3"
              >
                Apply Filters
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Filters;
