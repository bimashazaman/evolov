import Image from "next/image";
import React from "react";
import { Modal, Button } from "rsuite";
import Layout from "../../../components/Layout";

const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

const Chats = () => {
  const [open, setOpen] = React.useState(false);

  const [open2, setOpen2] = React.useState(false);

  const [size, setSize] = React.useState();

  const handleOpen = (value) => {
    setSize(value);
    setOpen(true);
  };

  const handleOpen2 = (value) => {
    setSize(value);
    setOpen2(true);
  };
  const handleClose = () => {
    setOpen(false);
    setOpen2(false);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    });
  }

  return (
    <div>
      <Layout>
        <Modal size={size} open={open} onClose={handleClose}>
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-xl font-bold text-gray-700">Products</div>
            <div className="text-gray-500 ">
              You got 3 new messages on this categories. Click on the Products
              to view the messages.
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
                      <div className="entry cursor-pointer transform hover:scale-95 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                        <div className="flex-2">
                          <div className="w-12 h-12 relative">
                            <Image
                              loader={myLoader}
                              src="/photos/2381069/pexels-photo-2381069.jpeg"
                              alt="Evolov"
                              width="56"
                              height="56"
                              className=" w-14 h-14 rounded-full mx-auto"
                            />

                            <span className="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                          </div>
                        </div>
                        <div className="flex-1 px-2 ml-3 items-center justify-center">
                          <div className="truncate mt-3 w-32">
                            <span className="text-gray-800 font-semibold text-base">
                              Propery
                            </span>
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
                      <div className="entry cursor-pointer transform hover:scale-95 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                        <div className="flex-2">
                          <div className="w-12 h-12 relative">
                            <Image
                              loader={myLoader}
                              src="/photos/2381069/pexels-photo-2381069.jpeg"
                              alt="Evolov"
                              width="56"
                              height="56"
                              className=" w-14 h-14 rounded-full mx-auto"
                            />

                            <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                          </div>
                        </div>
                        <div className="flex-1 px-2 ml-3 items-center justify-center">
                          <div className="truncate mt-3 w-32">
                            <span className="text-gray-800 font-semibold text-base">
                              Ryann Remo
                            </span>
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
                      <div className="entry cursor-pointer transform hover:scale-95 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                        <div className="flex-2">
                          <div className="w-12 h-12 relative">
                            <Image
                              loader={myLoader}
                              src="/photos/2381069/pexels-photo-2381069.jpeg"
                              alt="Evolov"
                              width="56"
                              height="56"
                              className=" w-14 h-14 rounded-full mx-auto"
                            />

                            <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                          </div>
                        </div>
                        <div className="flex-1 px-2 ml-3 items-center justify-center">
                          <div className="truncate mt-3 w-32">
                            <span className="text-gray-800 font-semibold text-base">
                              Ryann Remo
                            </span>
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

                      <div className="entry cursor-pointer transform hover:scale-95 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                        <div className="flex-2">
                          <div className="w-12 h-12 relative">
                            <Image
                              loader={myLoader}
                              src="/photos/2381069/pexels-photo-2381069.jpeg"
                              alt="Evolov"
                              width="56"
                              height="56"
                              className=" w-14 h-14 rounded-full mx-auto"
                            />

                            <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                          </div>
                        </div>
                        <div className="flex-1 px-2 ml-3 items-center justify-center">
                          <div className="truncate mt-3 w-32">
                            <span className="text-gray-800 font-semibold text-base">
                              Ryann Remo
                            </span>
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

                      <div className="entry cursor-pointer transform hover:scale-95 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                        <div className="flex-2">
                          <div className="w-12 h-12 relative">
                            <Image
                              loader={myLoader}
                              src="/photos/2381069/pexels-photo-2381069.jpeg"
                              alt="Evolov"
                              width="56"
                              height="56"
                              className=" w-14 h-14 rounded-full mx-auto"
                            />

                            <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                          </div>
                        </div>
                        <div className="flex-1 px-2 ml-3 items-center justify-center">
                          <div className="truncate mt-3 w-32">
                            <span className="text-gray-800 font-semibold text-base">
                              Ryann Remo
                            </span>
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
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose} appearance="subtle">
              Cancel
            </Button>
            <Button
              onClick={handleClose}
              appearance="primary"
              className="bg-blue-700"
            >
              Ok
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal size={size} open={open2} onClose={handleClose}>
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
                              src="/photos/2381069/pexels-photo-2381069.jpeg"
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
                              src="/photos/2381069/pexels-photo-2381069.jpeg"
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
                              src="/photos/2381069/pexels-photo-2381069.jpeg"
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
                              src="/photos/2381069/pexels-photo-2381069.jpeg"
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
                              src="/photos/2381069/pexels-photo-2381069.jpeg"
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
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose} appearance="subtle">
              Cancel
            </Button>
            <Button
              onClick={handleClose}
              appearance="primary"
              className="bg-blue-700"
            >
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="w-full h-screen">
          <div className="flex h-full">
            <div className="hidden xl:block sm:flex-2 w-64 bg-gray-200">
              <div className="user-profile text-center">
                <div className="w-32 h-32 rounded-full m-auto mt-16 border-2 border-white bg-white shadow-lg">
                  <Image
                    loader={myLoader}
                    src="/photos/2381069/pexels-photo-2381069.jpeg"
                    alt="Evolov"
                    width="128"
                    height="128"
                    className="block object-cover rounded-full"
                  />
                </div>
                <div className="text-gray-800 mt-8">
                  Omer Mohamed Ali
                  <span className="inline-block align-text-bottom">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="menu mt-8">
                <div className="flex text-base font-semibold items-center px-4 py-2 cursor-pointer hover:bg-gray-300">
                  Products
                </div>
                <div>
                  <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-300">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300">
                      <Image
                        loader={myLoader}
                        src="/photos/2381069/pexels-photo-2381069.jpeg"
                        alt="Evolov"
                        width="56"
                        height="56"
                        className=" w-14 h-14 rounded-full mx-auto"
                      />
                    </div>
                    <div className="ml-4 text-sm font-medium text-gray-700">
                      Tesla blue car
                    </div>
                  </div>
                  <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-300">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300">
                      <Image
                        loader={myLoader}
                        src="/photos/2381069/pexels-photo-2381069.jpeg"
                        alt="Evolov"
                        width="56"
                        height="56"
                        className=" w-14 h-14 rounded-full mx-auto"
                      />
                    </div>
                    <div className="ml-4 text-sm font-medium text-gray-700">
                      Property
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-gray-100 w-full h-full">
              <div className="main-body container m-auto w-11/12 h-full flex flex-col">
                <div className="py-4 flex-2 flex flex-row">
                  <div className="flex-1">
                    <span className="xl:hidden inline-block text-gray-700 hover:text-gray-900 align-bottom">
                      <span className="block h-6 w-6 p-1 rounded-full hover:bg-gray-400">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          size="lg"
                          onClick={() => handleOpen("lg")}
                        >
                          <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                      </span>
                    </span>
                    <span className="lg:hidden inline-block ml-8 text-gray-700 hover:text-gray-900 align-bottom">
                      <span className="block h-6 w-6 p-1 rounded-full hover:bg-gray-400">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          onClick={() => handleOpen2("lg")}
                        >
                          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="flex-1 text-right">
                    <span className="inline-block text-gray-700">
                      Status:{" "}
                      <span className="inline-block align-text-bottom w-4 h-4 bg-green-400 rounded-full border-2 border-white"></span>{" "}
                      <b>Online</b>
                      {/* <span className="inline-block align-text-bottom">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          className="w-4 h-4"
                        >
                          <path d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </span> */}
                    </span>

                    <span className="inline-block ml-8 text-gray-700 hover:text-gray-900 align-bottom">
                      <span className="block h-6 w-6 p-1 rounded-full hover:bg-gray-400">
                        {/* <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          className="w-4 h-4"
                        >
                          <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                        </svg> */}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="main flex-1 flex flex-col">
                  <div className="hidden lg:block heading flex-2">
                    <h1 className="text-3xl text-gray-700 mb-4">Chat</h1>
                  </div>

                  <div className="flex-1 flex h-full">
                    <div className="sidebar hidden lg:flex w-1/3 flex-2 flex-col pr-6">
                      <div className="search flex-2 pb-6 px-2">
                        <input
                          type="text"
                          className="outline-none py-2 block w-full bg-transparent border-b-2 border-gray-200"
                          placeholder="Search"
                        />
                      </div>
                      <div className="flex-1 h-full overflow-auto px-2">
                        <div className="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                          <div className="flex-2">
                            <div className="w-12 h-12 relative">
                              <Image
                                loader={myLoader}
                                src="/photos/2381069/pexels-photo-2381069.jpeg"
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
                              <span className="text-gray-800">Ryann Remo</span>
                            </div>
                            <div>
                              <small className="text-gray-600">
                                Yea, Sure!
                              </small>
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
                        <div className="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                          <div className="flex-2">
                            <div className="w-12 h-12 relative">
                              <Image
                                loader={myLoader}
                                src="/photos/2381069/pexels-photo-2381069.jpeg"
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
                              <span className="text-gray-800">Karp Bonolo</span>
                            </div>
                            <div>
                              <small className="text-gray-600">
                                Yea, Sure!
                              </small>
                            </div>
                          </div>
                          <div className="flex-2 text-right">
                            <div>
                              <small className="text-gray-500">15 April</small>
                            </div>
                            <div>
                              <small className="text-xs bg-red-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block">
                                10
                              </small>
                            </div>
                          </div>
                        </div>
                        <div className="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md border-l-4 border-red-500">
                          <div className="flex-2">
                            <div className="w-12 h-12 relative">
                              <Image
                                loader={myLoader}
                                src="/photos/2381069/pexels-photo-2381069.jpeg"
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
                              <span className="text-gray-800">
                                Mercedes Yemelyan
                              </span>
                            </div>
                            <div>
                              <small className="text-gray-600">
                                Yea, Sure!
                              </small>
                            </div>
                          </div>
                          <div className="flex-2 text-right">
                            <div>
                              <small className="text-gray-500">15 April</small>
                            </div>
                          </div>
                        </div>
                        <div className="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                          <div className="flex-2">
                            <div className="w-12 h-12 relative">
                              <Image
                                loader={myLoader}
                                src="/photos/2381069/pexels-photo-2381069.jpeg"
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
                              <span className="text-gray-800">
                                Cadi Kajet??n
                              </span>
                            </div>
                            <div>
                              <small className="text-gray-600">
                                Yea, Sure!
                              </small>
                            </div>
                          </div>
                          <div className="flex-2 text-right">
                            <div>
                              <small className="text-gray-500">15 April</small>
                            </div>
                          </div>
                        </div>
                        <div className="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md">
                          <div className="flex-2">
                            <div className="w-12 h-12 relative">
                              <Image
                                loader={myLoader}
                                src="/photos/2381069/pexels-photo-2381069.jpeg"
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
                              <span className="text-gray-800">Rina Samuel</span>
                            </div>
                            <div>
                              <small className="text-gray-600">
                                Yea, Sure!
                              </small>
                            </div>
                          </div>
                          <div className="flex-2 text-right">
                            <div>
                              <small className="text-gray-500">15 April</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chat-area flex-1 flex flex-col">
                      <div className="flex-3">
                        <h2 className="text-xl py-1 mb-8 border-b-2 border-gray-200">
                          Chatting with <b>Mercedes Yemelyan</b>
                        </h2>
                      </div>
                      <div className="messages flex-1 overflow-auto">
                        <div className="message mb-4 flex">
                          <div className="flex-2">
                            <div className="w-12 h-12 relative">
                              <Image
                                loader={myLoader}
                                src="/photos/2381069/pexels-photo-2381069.jpeg"
                                alt="Evolov"
                                width="56"
                                height="56"
                                className=" w-14 h-14 rounded-full mx-auto"
                              />

                              <span className="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                            </div>
                          </div>
                          <div className="flex-1 px-2">
                            <div className="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700">
                              <span>
                                Hey there. We would like to invite you over to
                                our office for a visit. How about it?
                              </span>
                            </div>
                            <div className="pl-4">
                              <small className="text-gray-500">15 April</small>
                            </div>
                          </div>
                        </div>
                        <div className="message mb-4 flex">
                          <div className="flex-2">
                            <div className="w-12 h-12 relative">
                              <Image
                                loader={myLoader}
                                src="/photos/2381069/pexels-photo-2381069.jpeg"
                                alt="Evolov"
                                width="56"
                                height="56"
                                className=" w-14 h-14 rounded-full mx-auto"
                              />

                              <span className="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                            </div>
                          </div>
                          <div className="flex-1 px-2">
                            <div className="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700">
                              <span>
                                All travel expenses are covered by us of course
                                :D
                              </span>
                            </div>
                            <div className="pl-4">
                              <small className="text-gray-500">15 April</small>
                            </div>
                          </div>
                        </div>
                        <div className="message me mb-4 flex text-right">
                          <div className="flex-1 px-2">
                            <div className="inline-block bg-blue-600 rounded-full p-2 px-6 text-white">
                              <span> like a dream come true</span>
                            </div>
                            <div className="pr-4">
                              <small className="text-gray-500">15 April</small>
                            </div>
                          </div>
                        </div>
                        <div className="message me mb-4 flex text-right">
                          <div className="flex-1 px-2">
                            <div className="inline-block bg-blue-600 rounded-full p-2 px-6 text-white">
                              <span>I accept. Thank you very much.</span>
                            </div>
                            <div className="pr-4">
                              <small className="text-gray-500">15 April</small>
                            </div>
                          </div>
                        </div>
                        <div className="message mb-4 flex">
                          <div className="flex-2">
                            <div className="w-12 h-12 relative">
                              <Image
                                loader={myLoader}
                                src="/photos/2381069/pexels-photo-2381069.jpeg"
                                alt="Evolov"
                                width="56"
                                height="56"
                                className=" w-14 h-14 rounded-full mx-auto"
                              />

                              <span className="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                            </div>
                          </div>
                          <div className="flex-1 px-2">
                            <div className="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700">
                              <span>
                                You are welome. We will stay in touch.
                              </span>
                            </div>
                            <div className="pl-4">
                              <small className="text-gray-500">15 April</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-2 pt-4 pb-10">
                        <div className="write bg-white shadow flex rounded-lg">
                          <div className="flex-3 flex content-center items-center text-center p-4 pr-0">
                            <span className="block text-center text-gray-400 hover:text-gray-800">
                              <svg
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                className="h-6 w-6"
                              >
                                <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                            </span>
                          </div>
                          <div className="flex-1">
                            <textarea
                              name="message"
                              className="w-full block outline-none py-4 px-4 bg-transparent"
                              rows="1"
                              placeholder="Type a message..."
                              autofocus
                            ></textarea>
                          </div>
                          <div className="flex-2 w-32 p-2 flex content-center items-center">
                            <div className="flex-1 text-center">
                              <span className="text-gray-400 hover:text-gray-800">
                                <span className="inline-block align-text-bottom">
                                  <svg
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                  >
                                    <path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                                  </svg>
                                </span>
                              </span>
                            </div>
                            <div className="flex-1">
                              <button className="bg-blue-400 w-10 h-10 rounded-full inline-block">
                                <span className="inline-block align-text-bottom">
                                  <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4 text-white"
                                  >
                                    <path d="M5 13l4 4L19 7"></path>
                                  </svg>
                                </span>
                              </button>
                            </div>
                          </div>
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
    </div>
  );
};

export default Chats;
