import React from 'react'

const Newsletter = () => {
  return (
    <div className="flex-col w-96 lg:ml-40">
    <div className=" font-medium text-white flex">

      Join a Newsletter
      <div className="text-white flex-end ml-11 items-end right-0 font-[100] text-sm text-end">
        Get amazing offers
      </div>
    </div>
    <div className="flex">
      <input
        type="text"
        className="w-80 bg-[#3D3474] border border-white p-1 py-2 rounded-full mt-1 outline-none text-white ring-blue-500 place-content-evenly"

        placeholder="Enter your email"
      />
      <button className="bg-white rounded-full px-2 text-[#3D3474] font-semibold ml-3">
        Subscribe
      </button>
    </div>
  </div>
  )
}

export default Newsletter