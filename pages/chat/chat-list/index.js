import Image from "next/image";
import React from "react";
import Layout from "../../../components/Layout";
const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};
const ChatList = () => {
  return (
    <>
      <Layout>
        <div
          className="
        flex flex-col h-[100vh] bg-[#ECECF8] m-10 border-2 border-gray-400 rounded-lg p-5 lg:p-14 w-[90%] mx-auto shadow-2xl overflow-y-auto
    "
        >
          <div className="text-xl font-bold text-gray-700">
            Messages <span className="text-gray-400">({3})</span>
          </div>
          <div className="text-gray-500 ">
            You got 3 new messages today on Property
          </div>
          <br />
          <div className="flex-col">
            <div className="flex justify-between">
              <div className="flex-1 flex h-full">
                <div className="sidebar lg:flex w-full flex-2 flex-col pr-6">
                  <div className="search flex-2 pb-6 px-2">
                    <input
                      type="text"
                      className="outline-none py-2 block w-full bg-transparent border-b-2 border-gray-500"
                      placeholder="Search"
                    />
                  </div>
                  <div className="flex-1 h-full overflow-auto px-2">
                    <div className="entry cursor-pointer transform duration-300 transition-transform  mb-4 rounded p-4 flex shadow-md border border-gray-300">
                      <div className="flex-2">
                        <div className="w-12 h-12 relative">
                          <Image
                            loader={myLoader}
                            src="/photos/1007836/pexels-photo-1007836.jpeg"
                            alt="Evolov"
                            width="56"
                            height="56"
                            className=" w-14 h-14 rounded-full mx-auto"
                          />

                          <span className="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                        </div>
                      </div>
                      <div className="flex-1 px-2">
                        <div className="truncate w-32">
                          <span className="font-semibold text-gray-800">
                            Ryann Remo
                          </span>
                        </div>
                        <div>
                          <small className="text-gray-600">Yea, Sure!</small>
                        </div>
                      </div>
                      <div className="flex-2 text-right">
                        <div>
                          <small className="text-gray-500">15 April</small>
                        </div>
                        <div>
                          <small className="text-xs bg-red-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block">
                            23
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="entry cursor-pointer transform duration-300 transition-transform  mb-4 rounded p-4 flex shadow-md border border-gray-300">
                      <div className="flex-2">
                        <div className="w-12 h-12 relative">
                          <Image
                            loader={myLoader}
                            src="/photos/1007836/pexels-photo-1007836.jpeg"
                            alt="Evolov"
                            width="56"
                            height="56"
                            className=" w-14 h-14 rounded-full mx-auto"
                          />

                          <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                        </div>
                      </div>
                      <div className="flex-1 px-2">
                        <div className="truncate w-32">
                          <span className="font-semibold text-gray-800">
                            Ryann Remo
                          </span>
                        </div>
                        <div>
                          <small className="text-gray-600">Yea, Sure!</small>
                        </div>
                      </div>
                      <div className="flex-2 text-right">
                        <div>
                          <small className="text-gray-500">15 April</small>
                        </div>
                        <div>
                          <small className="text-xs bg-red-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block">
                            23
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="entry cursor-pointer transform duration-300 transition-transform  mb-4 rounded p-4 flex shadow-md border border-gray-300">
                      <div className="flex-2">
                        <div className="w-12 h-12 relative">
                          <Image
                            loader={myLoader}
                            src="/photos/1007836/pexels-photo-1007836.jpeg"
                            alt="Evolov"
                            width="56"
                            height="56"
                            className=" w-14 h-14 rounded-full mx-auto"
                          />

                          <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                        </div>
                      </div>
                      <div className="flex-1 px-2">
                        <div className="truncate w-32">
                          <span className="font-semibold text-gray-800">
                            Ryann Remo
                          </span>
                        </div>
                        <div>
                          <small className="text-gray-600">Yea, Sure!</small>
                        </div>
                      </div>
                      <div className="flex-2 text-right">
                        <div>
                          <small className="text-gray-500">15 April</small>
                        </div>
                        <div>
                          <small className="text-xs bg-red-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block">
                            23
                          </small>
                        </div>
                      </div>
                    </div>

                    <div className="entry cursor-pointer transform duration-300 transition-transform  mb-4 rounded p-4 flex shadow-md border border-gray-300">
                      <div className="flex-2">
                        <div className="w-12 h-12 relative">
                          <Image
                            loader={myLoader}
                            src="/photos/1007836/pexels-photo-1007836.jpeg"
                            alt="Evolov"
                            width="56"
                            height="56"
                            className=" w-14 h-14 rounded-full mx-auto"
                          />

                          <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                        </div>
                      </div>
                      <div className="flex-1 px-2">
                        <div className="truncate w-32">
                          <span className="font-semibold text-gray-800">
                            Ryann Remo
                          </span>
                        </div>
                        <div>
                          <small className="text-gray-600">Yea, Sure!</small>
                        </div>
                      </div>
                      <div className="flex-2 text-right">
                        <div>
                          <small className="text-gray-500">15 April</small>
                        </div>
                        <div>
                          <small className="text-xs bg-red-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block">
                            23
                          </small>
                        </div>
                      </div>
                    </div>

                    <div className="entry cursor-pointer transform duration-300 transition-transform  mb-4 rounded p-4 flex shadow-md border border-gray-300">
                      <div className="flex-2">
                        <div className="w-12 h-12 relative">
                          <Image
                            loader={myLoader}
                            src="/photos/1007836/pexels-photo-1007836.jpeg"
                            alt="Evolov"
                            width="56"
                            height="56"
                            className=" w-14 h-14 rounded-full mx-auto"
                          />

                          <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                        </div>
                      </div>
                      <div className="flex-1 px-2">
                        <div className="truncate w-32">
                          <span className="font-semibold text-gray-800">
                            Ryann Remo
                          </span>
                        </div>
                        <div>
                          <small className="text-gray-600">Yea, Sure!</small>
                        </div>
                      </div>
                      <div className="flex-2 text-right">
                        <div>
                          <small className="text-gray-500">15 April</small>
                        </div>
                        <div>
                          <small className="text-xs bg-red-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block">
                            23
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ChatList;
