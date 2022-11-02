import React from 'react'

const Search = () => {
  return (
    <div className="flex items-center justify-center">
          <div className="items-center justify-center w-1/2 mt-10">
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

          <button className="px-6 bg-[#221F60] items-center justify-center ml-4 text-white rounded-full py-2  mt-[40px]">
            Search
          </button>
        </div>
  )
}

export default Search