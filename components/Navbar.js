import { useState, useEffect, useContext } from "react";
import { MobileNav, Typography, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

import { Modal, ButtonToolbar, Button, Placeholder } from "rsuite";
import Property from "./publish/Property";
import Vehicle from "./publish/Vehicle";
import Market from "./publish/Market";
import Boats from "./publish/Boat";
import Plane from "./publish/Plane";
import Businesses from "./publish/Business";
import { Tender } from "./publish/Tender";
import Courses from "./publish/Courses";
import Castings from "./publish/Castings";
import { authContext, logout } from "../server/firebase";
import { useRouter } from "next/router";

export default function Example() {
  const router = useRouter();

  const [openNav, setOpenNav] = useState(false);
  const [openDropdownSettings, setOpenDropdownSettings] = useState(false);
  const [camera, setCamera] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // if user have no account image
  const user_have_image = false;


  const { currentUser } = useContext(authContext);
  //property
  const [property, setProperty] = useState(false);
  const [vehicle, setVehicle] = useState(false);
  const [market, setMarket] = useState(false);
  const [vacancy, setVacancy] = useState(false);
  const [Boat, setBoat] = useState(false);
  const [plane, setPlane] = useState(false);
  const [Business, setBusiness] = useState(false);
  const [tender, setTender] = useState(false);
  const [course, setCourse] = useState(false);
  const [casting, setCasting] = useState(false);
  const [openImageDrop, setOpenImageDrop] = useState(false);


  //publish modal
  const [fullScreenModal, setFullScreenModal] = useState(false);

  const handleProperty = () => {
    setProperty(true);
    setFullScreenModal(false);
  };

  const handleVehicle = () => {
    setVehicle(true);
    setFullScreenModal(false);
  };

  const handleMarket = () => {
    setMarket(true);
    setFullScreenModal(false);
  };

  const handleBoat = () => {
    setBoat(true);
    setFullScreenModal(false);
  };

  const handlePlane = () => {
    setPlane(true);
    setFullScreenModal(false);
  };

  const handleBusiness = () => {
    setBusiness(true);
    setFullScreenModal(false);
  };

  const handleTender = () => {
    setTender(true);
    setFullScreenModal(false);
  };

  const handleCourse = () => {
    setCourse(true);
    setFullScreenModal(false);
  };

  const handleCasting = () => {
    setCasting(true);
    setFullScreenModal(false);
  };

  const [size, setSize] = useState();
  const handleOpen = (value) => {
    setSize(value);
    setFullScreenModal(true);
  };
  const handleClose = () => {
    setFullScreenModal(false);
    setProperty(false);
    setVehicle(false);
    setMarket(false);
    setVacancy(false);
    setBoat(false);
    setPlane(false);
    setBusiness(false);
    setTender(false);
    setCourse(false);
    setCasting(false);
  };

  useEffect(() => {
    if (currentUser) {
      setIsLoggedIn(true);
    }
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  },  [currentUser]);

  const navList = (
    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <div>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white absolute items-center justify-center mt-[5px] ml-2 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            type="text"
            className="bg-[#221F60] border pl-[30px] placeholder-style w-72 right-1 rounded-lg text-white"
            placeholder="Search"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="items-center w-8 -ml-5 bg-white rounded-lg h-9"
            onClick={() => {
              setOpenDropdownSettings(!openDropdownSettings);
              console.log("clicked");
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
        </div>

        {openDropdownSettings ? (
          <div className="absolute flex-end ">
            <div className="relative z-40 w-auto h-auto px-5 py-2 mt-1 ml-16 bg-white rounded-lg">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="flex-col overflow-y-auto h-72">
                  <div className="flex-col text-gray-600">
                    <div>Select Country</div>
                    <div className="relative top-0">
                      <input
                        type="text"
                        placeholder="Seach Country"
                        className="sticky p-3 my-2 bg-gray-100 outline-none"
                      />
                    </div>
                  </div>
                  <div className="px-2 py-2 mb-1 text-lg font-semibold text-gray-800 rounded-lg hover:bg-blue-400 hover:text-white focus:bg-green-600">
                    Norway
                  </div>
                  <div className="px-2 py-2 mb-1 text-lg font-semibold text-gray-800 rounded-lg hover:bg-blue-400 hover:text-white focus:bg-green-600">
                    India
                  </div>
                  <div className="px-2 py-2 mb-1 text-lg font-semibold text-gray-800 rounded-lg hover:bg-blue-400 hover:text-white focus:bg-green-600">
                    Norway
                  </div>
                  <div className="px-2 py-2 mb-1 text-lg font-semibold text-gray-800 rounded-lg hover:bg-blue-400 hover:text-white focus:bg-green-600">
                    Norway
                  </div>
                  <div className="px-2 py-2 mb-1 text-lg font-semibold text-gray-800 rounded-lg hover:bg-blue-400 hover:text-white focus:bg-green-600">
                    Norway
                  </div>
                  <div className="px-2 py-2 mb-1 text-lg font-semibold text-gray-800 rounded-lg hover:bg-blue-400 hover:text-white focus:bg-green-600">
                    Norway
                  </div>
                  <div className="px-2 py-2 mb-1 text-lg font-semibold text-gray-800 rounded-lg hover:bg-blue-400 hover:text-white focus:bg-green-600">
                    Norway
                  </div>
                  <div className="px-2 py-2 mb-1 text-lg font-semibold text-gray-800 rounded-lg hover:bg-blue-400 hover:text-white focus:bg-green-600">
                    Norway
                  </div>
                  <div className="px-2 py-2 mb-1 text-lg font-semibold text-gray-800 rounded-lg hover:bg-blue-400 hover:text-white focus:bg-green-600">
                    Pakistan
                  </div>
                </div>

                <div className="flex-col ">
                  <div className="mb-1 text-lg text-gray-600">
                    Select Category
                  </div>
                  <hr />

                  <div className="flex space-x-6 text-lg">
                    <div>
                      <div>
                        <input type="checkbox" />{" "}
                        <span className="ml-2 font-semibold text-gray-800">
                          All
                        </span>
                      </div>
                      <div>
                        <input type="checkbox" />{" "}
                        <span className="ml-2 font-semibold text-gray-800">
                          Car
                        </span>
                      </div>
                      <div>
                        <input type="checkbox" />{" "}
                        <span className="ml-2 font-semibold text-gray-800 checked:bg-green-700">
                          Home
                        </span>
                      </div>
                    </div>

                    <div>
                      <div>
                        <input type="checkbox" />{" "}
                        <span className="ml-2 font-semibold text-gray-800">
                          All
                        </span>
                      </div>
                      <div>
                        <input type="checkbox" />{" "}
                        <span className="ml-2 font-semibold text-gray-800">
                          Car
                        </span>
                      </div>
                      <div>
                        <input type="checkbox" />{" "}
                        <span className="ml-2 font-semibold text-gray-800 checked:bg-green-700">
                          Home
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative bottom-0 text-right ">
                <button
                  className="relative bottom-0 fle bg-[#221F60] p-3 text-white font-semibold rounded-lg hover:bg-blue-900 mt-2"
                  onClick={() => setOpenDropdownSettings(false)}
                >
                  Apply Settings
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <Typography as="li" color="white" className="p-1 font-normal">
        <a className="flex items-center text-sm text-gray-200 no-underline focus:text-white focus:font-semibold">
          Home
        </a>
      </Typography>
      <Typography as="li" color="white" className="p-1 font-normal">
        <div
          className="flex items-center text-sm text-gray-200 no-underline focus:text-white focus:font-semibold cursor-pointer"
          size="lg"
          onClick={() => handleOpen("full")}
        >
          Publish
        </div>
      </Typography>
      <Typography as="li" color="white" className="p-1 font-normal">
        <Link href="/chat/chats">
          <a className="flex items-center text-sm text-gray-200 no-underline focus:text-white focus:font-semibold">
            Chat
          </a>
        </Link>
      </Typography>
      <Typography as="li" color="white" className="p-1 font-normal">
        <a className="flex items-center text-sm text-gray-200 no-underline focus:text-white focus:font-semibold">
          Contact us
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className=" bg-[#221F60] max-w-screen-3xl py-3 shadow-lg px-5 lg:px-14 lg:py-3">
      <div className="container flex items-center justify-between text-blue-gray-900">
        <Link href="/">
          <a>
            <Image
              src="/images/logo/logo.png"
              width={150}
              height={65}
              alt="Evolov"
            />
          </a>
        </Link>

        <div className="hidden lg:block">{navList}</div>
        {isLoggedIn ? (
          <div className="hidden lg:block">
            <div className="flex flex-col">
              <div
                className="flex"
                onClick={() => setOpenImageDrop(!openImageDrop)}
              >
                {user_have_image ? (
                  <Image
                    loader={myLoader}
                    src="/photos/1007836/pexels-photo-1007836.jpeg"
                    alt="Evolov"
                    width="40"
                    height="40"
                    className="w-10 h-10 rounded-full cursor-pointer"
                  />
                ) : (
                  <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg
                      className="absolute -left-1 w-12 h-12 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                )}

                <div className="text-white font-semibold text-sm ml-2 cursor-pointer items-center justify-center flex hover:text-gray-300">
                  Bimasha Zaman
                </div>
              </div>

              {openImageDrop ? (
                <div
                  className=" z-[400] w-44 bg-white rounded dark:bg-gray-700
                 absolute top-20 right-4 shadow-2xl 
                 "
                  data-popper-placement="bottom-start"
                >
                  <div className="py-3 font-semibold px-4 text-sm text-gray-700 dark:text-white">
                    <div>Bimasha Zaman</div>
                    <div className="font-medium truncate">name@gmail.com</div>
                  </div>
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="avatarButton"
                  >
                    <li>
                      <Link href="/profile/my-individual">
                        <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-800 font-semibold">
                          Your Profile
                        </a>
                      </Link>
                    </li>

                    <hr className="border-gray-200 dark:border-gray-600" />

                    <li>
                      <Link href="/profile/individual/settings">
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-800 font-semibold"
                        >
                          Settings
                        </a>
                      </Link>
                    </li>
                    <hr className="border-gray-200 dark:border-gray-600" />
                    <li>
                      <Link href="/profile/individual/ads">
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-800 font-semibold"
                        >
                          My Ads
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <div className="">
                    <hr />
                    <a
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-red-700 font-semibold"
                      onClick={(e) => {
                        logout();
                        router.push("/");
                        setIsLoggedIn(false);
                      }}
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ) : (

          <div className="hidden lg:block">
            <button className="mb-2 bg-white text-[#221F60] mr-3 text-sm py-1 px-6 font-semibold rounded-full">
              <Link href="/sign-up">
                <a className="hover:no-underline">Sign Up</a>
              </Link>
            </button>
            <button className="mb-2 bg-[#FF942C] text-white text-sm py-1 px-7 font-medium rounded-full">
              <Link href="/login">
                <a className="mb-2 bg-[#FF942C] text-white text-sm no-underline hover:no-underline font-medium rounded-full">
                  Login
                </a>
              </Link>
            </button>
          </div>
        )}

        <IconButton
          variant="text"
          className="w-6 h-6 p-2 ml-auto text-white text-inherit lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>

      <Modal size={size} open={fullScreenModal} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Choose a Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container grid items-center content-center justify-center grid-cols-1 gap-4  mx-auto lg:grid-cols-3">
            <Link href="/property" passHref>
              <a>
                <div
                  className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer"
                  onClick={handleProperty}
                >
                  <div>
                    <Image
                      loader={myLoader}
                      src="photos/1396122/pexels-photo-1396122.jpeg"
                      alt="Evolov"
                      width="345"
                      height="231"
                      className="rounded-lg"
                    />
                  </div>

                  <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
                    Property
                  </div>
                </div>
              </a>
            </Link>

            <div
              className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer"
              onClick={handleVehicle}
            >
              <div>
                <Image
                  loader={myLoader}
                  src="photos/112460/pexels-photo-112460.jpeg"
                  alt="Evolov"
                  width="345"
                  height="231"
                  className="rounded-lg"
                />
              </div>
              <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
                Vehicle
              </div>
            </div>

            {/* <div
              className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer"
              onClick={handleMarket}
            >
              <div>
                <Image
                  loader={myLoader}
                  src="photos/264507/pexels-photo-264507.jpeg"
                  alt="Evolov"
                  width="345"
                  height="231"
                  className="rounded-lg"
                />
              </div>
              <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
                Market
              </div>
            </div> */}
            {/* <div className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer">
              <div>
                <Image
                  loader={myLoader}
                  src="photos/1684149/pexels-photo-1684149.jpeg"
                  alt="Evolov"
                  width="345"
                  height="231"
                  className="rounded-lg"
                />
              </div>

              <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
                Vacancy
              </div>
            </div> */}

            <div className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer">
              <div onClick={handleBoat}>
                <Image
                  loader={myLoader}
                  src="photos/296278/pexels-photo-296278.jpeg"
                  alt="Evolov"
                  width="345"
                  height="231"
                  className="rounded-lg"
                />
              </div>
              <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
                Boat
              </div>
            </div>

            <div
              className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer"
              onClick={handlePlane}
            >
              <div>
                <Image
                  loader={myLoader}
                  src="photos/1089306/pexels-photo-1089306.jpeg?"
                  alt="Evolov"
                  width="345"
                  height="231"
                  className="rounded-lg"
                />
              </div>
              <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
                Plane
              </div>
            </div>

            <div
              className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer"
              onClick={handleBusiness}
            >
              <div>
                <Image
                  loader={myLoader}
                  src="photos/936137/pexels-photo-936137.jpeg"
                  alt="Evolov"
                  width="345"
                  height="231"
                  className="rounded-lg"
                />
              </div>

              <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
                Business
              </div>
            </div>

            {/* <div
              className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer"
              onClick={handleTender}
            >
              <div>
                <Image
                  loader={myLoader}
                  src="photos/3184306/pexels-photo-3184306.jpeg"
                  alt="Evolov"
                  width="345"
                  height="231"
                  className="rounded-lg"
                />
              </div>
              <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
                Tender
              </div>
            </div> */}

            {/* <div
              className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer"
              onClick={handleCourse}
            >
              <div>
                <Image
                  loader={myLoader}
                  src="photos/5905717/pexels-photo-5905717.jpeg"
                  alt="Evolov"
                  width="345"
                  height="231"
                  className="rounded-lg"
                />
              </div>
              <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
                Course
              </div>
            </div> */}
            {/* <div className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer">
              <div>
                <Image
                  loader={myLoader}
                  src="photos/587741/pexels-photo-587741.jpeg"
                  alt="Evolov"
                  width="345"
                  height="231"
                  className="rounded-lg"
                />
              </div>

              <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
                Events
              </div>
            </div> */}

            {/* <div
              className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer"
              onClick={handleCasting}
            >
              <div>
                <Image
                  loader={myLoader}
                  src="photos/66134/pexels-photo-66134.jpeg"
                  alt="Evolov"
                  width="345"
                  height="231"
                  className="rounded-lg"
                />
              </div>
              <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
                Casting
              </div>
            </div> */}

            {/* <div className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer">
              <div>
                <Image
                  loader={myLoader}
                  src="photos/6994982/pexels-photo-6994982.jpeg"
                  alt="Evolov"
                  width="345"
                  height="231"
                  className="rounded-lg"
                />
              </div>
              <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
                Crowfunding
              </div>
            </div> */}

            {/* <div className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer">
              <div>
                <Image
                  loader={myLoader}
                  src="photos/3760259/pexels-photo-3760259.jpeg"
                  alt="Evolov"
                  width="345"
                  height="231"
                  className="rounded-lg"
                />
              </div>
              <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
                Contest
              </div>
            </div> */}

            {/* <div className="w-[345px] h-[308px] shadow-lg rounded-xl mb-10 cursor-pointer">
              <div>
                <Image
                  loader={myLoader}
                  src="photos/34092/pexels-photo.jpg"
                  alt="Evolov"
                  width="345"
                  height="231"
                  className="rounded-lg"
                />
              </div>
              <div className="p-5 text-lg font-semibold text-[#221F60] font-mono">
                Company Register
              </div>
            </div> */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size={size} open={property} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Choose a subcategory on property</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Property />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size={size} open={Boat} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Choose a subcategory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Boats />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size={size} open={vehicle} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Choose a subcategory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Vehicle />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size={size} open={market} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Choose a subcategory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Market />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size={size} open={plane} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Choose a subcategory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Plane />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size={size} open={Business} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Choose a subcategory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Businesses />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size={size} open={tender} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Choose a subcategory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tender />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size={size} open={course} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Choose a subcategory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Courses />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size={size} open={casting} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Choose a subcategory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Castings />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      <MobileNav open={openNav}>
        {navList}
        <div>
          {isLoggedIn ? (
            <div className="block lg:hidden">
              <div className="flex flex-col">
                <div className="flex">
                  {user_have_image ? (
                    <Image
                      loader={myLoader}
                      src="/photos/1007836/pexels-photo-1007836.jpeg"
                      alt="Evolov"
                      width="40"
                      height="40"
                      className="w-10 h-10 rounded-full cursor-pointer"
                    />
                  ) : (
                    <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                      <svg
                        className="absolute -left-1 w-12 h-12 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => setOpenImageDrop(!openImageDrop)}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  )}

                  <div
                    className="text-white font-semibold text-sm ml-2 cursor-pointer items-center justify-center flex hover:text-gray-300"
                    onClick={() => setOpenImageDrop(!openImageDrop)}
                  >
                    Bimasha Zaman
                  </div>
                </div>

                {openImageDrop ? (
                  <div
                    className=" z-[400] w-44 bg-white rounded  shadow dark:bg-gray-700
                 absolute top-auto mt-10 left-5
                 "
                    data-popper-placement="bottom-start"
                  >
                    <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                      <div>Bimasha Zaman</div>
                      <div className="font-medium truncate">name@gmail.com</div>
                    </div>
                    <ul
                      className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="avatarButton"
                    >
                      <li>
                        <Link href="/profile/my-individual">
                          <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-800 font-semibold">
                            Your Profile
                          </a>
                        </Link>
                      </li>

                      <li>
                        <Link href="/profile/individual/settings">
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-800 font-semibold"
                          >
                            Settings
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/profile/individual/ads">
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-800 font-semibold"
                          >
                            My Ads
                          </a>
                        </Link>
                      </li>
                    </ul>
                    <div className="py-1">
                      <a
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-800 font-semibold"
                        onClick={(e) => {
                          logout();
                          router.push("/");
                          setIsLoggedIn(false);
                        }}
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ) : (
            <div className="hidden lg:block">
              <button className="mb-2 bg-white text-[#221F60] mr-3 text-sm py-1 px-6 font-semibold rounded-full">
                <Link href="/sign-up">
                  <a className="hover:no-underline">Sign Up</a>
                </Link>
              </button>
              <button className="mb-2 bg-[#FF942C] text-white text-sm py-1 px-7 font-medium rounded-full">
                <Link href="/login">
                  <a className="mb-2 bg-[#FF942C] text-white text-sm no-underline hover:no-underline font-medium rounded-full">
                    Login
                  </a>
                </Link>
              </button>
            </div>
          )}
        </div>

        {/* <button className="mb-2 bg-[#FF942C] text-white text-sm py-1 px-7 font-medium rounded-full">
=======
        <button className="mb-2 bg-[#FF942C] text-white text-sm py-1 px-7 font-medium rounded-full">
>>>>>>> 3b98b44 (VEHICLE_FILTER)
          <Link href="/login">
            <a className="mb-2 bg-[#FF942C] text-white text-sm no-underline hover:no-underline font-medium rounded-full">
              Login
            </a>
          </Link>
        </button>
        <button className="mb-2 bg-white text-[#221F60] ml-3 text-sm py-1 px-6 font-semibold rounded-full">
          <Link href="/sign-up">
            <a>Sign Up</a>
          </Link>
        </button> */}

      </MobileNav>
    </div>
  );
}
