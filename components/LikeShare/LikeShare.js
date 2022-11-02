import React, { useState } from 'react'
import {
    HiOutlineThumbUp,
    HiShare,
  } from "react-icons/hi";
const LikeShare = () => {
   
    const [social, setSocial] = useState(false);
    const [like, setLike] = useState(false);

  return (
    <div className='flex'>
         <div>
            <HiOutlineThumbUp 
            onClick={() => setLike(!like)}
            className={like ? "bg-blue-600 w-10 p-2 h-10 text-white rounded-full mr-4" : "w-10 p-2 h-10 bg-[#221F60] text-white rounded-full mr-4"} 

            
            />
          </div>

          <div>
            <HiShare
              className="w-10 p-2 h-10 bg-[#221F60] text-white rounded-full"
              onClick={() => setSocial(!social)}
            />

            {social ? (
              <div className="absolute z-50 flex-col w-40 h-auto p-2 bg-white shadow-lg">
                <div className="relative py-1 font-semibold text-gray-700 bg-white border-b">
                  Gmail
                </div>
                <div className="relative py-1 font-semibold text-gray-700 bg-white border-b">
                  Facebook
                </div>
                <div className="relative py-1 font-semibold text-gray-700 bg-white border-b">
                  Twitter
                </div>
                <div className="relative py-1 font-semibold text-gray-700 bg-white border-b">
                  Instagram
                </div>
                <div className="relative py-1 font-semibold text-gray-700 bg-white border-b">
                  Linkedin
                </div>
                <div className="relative py-1 font-semibold text-gray-700 bg-white border-b">
                  URL
                </div>
                <div className="relative py-1 font-semibold text-gray-700 bg-white border-b">
                  Whatsapp
                </div>
              </div>
            ) : null}
          </div>
    </div>
  )
}

export default LikeShare