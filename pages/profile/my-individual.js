import React, { useState } from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import {
  HiOutlineCamera,
  HiPencil,
  HiPresentationChartLine,
  HiStar,
} from "react-icons/hi";
import Link from "next/link";
import { Modal, Button } from "rsuite";

import { Radio, RadioGroup, Form } from "rsuite";

import ProfileRating from "../../components/ProfileRating/ProfileRating";
const myLoader = ({ src, width, quality }) => {
  return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
};

const My_individual = () => {
  const [editName, setEditName] = useState(false);
  const [promote, setPromote] = React.useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [editAddress, setEditAddress] = useState(false);
  const [editDescription, setEditDescription] = useState(false);
  const [following, setFollowing] = useState(false);
  const handleFollowing = () => {
    setFollowing(!following);
  };
  const [follow, setFollow] = useState("Unfollow");

  const handleClose = () => {
    setEditName(false);
    setEditEmail(false);
    setEditPhone(false);
    setEditAddress(false);
    setEditDescription(false);
    setPromote(false);
  };

  return (
    <Layout>
      <div className="bg-[#F9FAFF]">
        <Modal open={promote} onClose={handleClose} className="">
          <Modal.Header>
            <Modal.Title>Promote This Ad</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            By promoting this ad, you will be able to reach more people and get
            more sales. You can choose to promote this ad for 3 or 7 days. You
            can also choose which page you want to promote this ad on.
            <br />
            <br />
            <Form.Group controlId="radioList">
              <RadioGroup name="radioList">
                <p>How long do you want to promote this ad for? </p>

                <Radio value="B">
                  <p>3 Days</p>
                </Radio>
                <Radio value="C">
                  <p>7 Days</p>
                </Radio>
              </RadioGroup>
              <RadioGroup name="radioList">
                <p>Where do you want to promote this ad? </p>
                <Radio value="E">
                  <p>
                    <b>Home Page</b> - Promote this ad on the home page of the
                    website
                  </p>
                </Radio>
                <Radio value="F">
                  <p>
                    <b>Category Page</b> - Promote this ad on the category page
                    of the website
                  </p>
                </Radio>

                <Radio value="H">
                  <p>
                    <b>Sub Category</b> - Promote this ad on the Sub Category of
                    the website
                  </p>
                </Radio>
              </RadioGroup>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={handleClose}
              appearance="primary"
              className="bg-green-400"
            >
              Yes
            </Button>
            <Button onClick={handleClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal open={editName} onClose={handleClose}>
          <Modal.Body className="p-4">
            <div className="mb-2 text-2xl font-semibold">Edit Name</div>

            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-blue-800"
            />
            {/* <Placeholder.Paragraph rows={20} /> */}
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={handleClose}
              appearance="primary"
              className="bg-blue-600"
            >
              Save
            </Button>
            <Button onClick={handleClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal open={editEmail} onClose={handleClose}>
          <Modal.Body className="p-4">
            <div className="mb-2 text-2xl font-semibold">Edit Email</div>

            <input
              type="text"
              placeholder="Email"
              className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-blue-800"
            />
            {/* <Placeholder.Paragraph rows={20} /> */}
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={handleClose}
              appearance="primary"
              className="bg-blue-600"
            >
              Save
            </Button>
            <Button onClick={handleClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal open={editPhone} onClose={handleClose}>
          <Modal.Body className="p-4">
            <div className="mb-2 text-2xl font-semibold">Edit Phone</div>

            <input
              type="text"
              placeholder="Phone"
              className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-blue-800"
            />
            {/* <Placeholder.Paragraph rows={20} /> */}
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={handleClose}
              appearance="primary"
              className="bg-blue-600"
            >
              Save
            </Button>
            <Button onClick={handleClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal open={editAddress} onClose={handleClose}>
          <Modal.Body className="p-4">
            <div className="mb-2 text-2xl font-semibold">Edit Address</div>

            <input
              type="text"
              placeholder="Address"
              className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-blue-800"
            />
            {/* <Placeholder.Paragraph rows={20} /> */}
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={handleClose}
              appearance="primary"
              className="bg-blue-600"
            >
              Save
            </Button>
            <Button onClick={handleClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal open={editDescription} onClose={handleClose}>
          <Modal.Body className="p-4">
            <div className="mb-2 text-2xl font-semibold">Edit Description</div>

            <textarea
              type="email"
              placeholder="Add a description"
              className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-blue-800"
              rows="5"
            ></textarea>

            {/* <Placeholder.Paragraph rows={20} /> */}
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={handleClose}
              appearance="primary"
              className="bg-blue-600"
            >
              Save
            </Button>
            <Button onClick={handleClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal open={following} onClose={handleClose}>
          <Modal.Body className="p-4">
            <div className="mb-2 text-2xl font-semibold">Following</div>

            <div className="flex justify-between mb-2 hover:bg-gray-100">
              <div className="flex ">
                <div className="w-20 h-20">
                  <Image
                    loader={myLoader}
                    src="photos/614810/pexels-photo-614810.jpeg"
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    layout="responsive"
                    className="flex-shrink-0 object-cover object-center mr-4 rounded-full"
                  />
                </div>
                <div className="items-center justify-center mt-5 ml-2 text-xl">
                  Bimasha Perera
                </div>
              </div>

              <div>
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
                  onClick={() => setFollow("Follow")}
                >
                  {follow}
                </button>
              </div>
            </div>

            <div className="flex justify-between mb-2 hover:bg-gray-100">
              <div className="flex ">
                <div className="w-20 h-20">
                  <Image
                    loader={myLoader}
                    src="photos/614810/pexels-photo-614810.jpeg"
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    layout="responsive"
                    className="flex-shrink-0 object-cover object-center mr-4 rounded-full"
                  />
                </div>
                <div className="items-center justify-center mt-5 ml-2 text-xl">
                  Bimasha Perera
                </div>
              </div>

              <div>
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
                  onClick={() => setFollow("Follow")}
                >
                  {follow}
                </button>
              </div>
            </div>

            <div className="flex justify-between mb-2 hover:bg-gray-100">
              <div className="flex ">
                <div className="w-20 h-20">
                  <Image
                    loader={myLoader}
                    src="photos/614810/pexels-photo-614810.jpeg"
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    layout="responsive"
                    className="flex-shrink-0 object-cover object-center mr-4 rounded-full"
                  />
                </div>
                <div className="items-center justify-center mt-5 ml-2 text-xl">
                  Bimasha Perera
                </div>
              </div>

              <div>
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
                  onClick={() => setFollow("Follow")}
                >
                  {follow}
                </button>
              </div>
            </div>

            <div className="flex justify-between mb-2 hover:bg-gray-100">
              <div className="flex ">
                <div className="w-20 h-20">
                  <Image
                    loader={myLoader}
                    src="photos/614810/pexels-photo-614810.jpeg"
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    layout="responsive"
                    className="flex-shrink-0 object-cover object-center mr-4 rounded-full"
                  />
                </div>
                <div className="items-center justify-center mt-5 ml-2 text-xl">
                  Bimasha Perera
                </div>
              </div>

              <div>
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
                  onClick={() => setFollow("Follow")}
                >
                  {follow}
                </button>
              </div>
            </div>

            <div className="flex justify-between mb-2 hover:bg-gray-100">
              <div className="flex ">
                <div className="w-20 h-20">
                  <Image
                    loader={myLoader}
                    src="photos/614810/pexels-photo-614810.jpeg"
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    layout="responsive"
                    className="flex-shrink-0 object-cover object-center mr-4 rounded-full"
                  />
                </div>
                <div className="items-center justify-center mt-5 ml-2 text-xl">
                  Bimasha Perera
                </div>
              </div>

              <div>
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
                  onClick={() => setFollow("Follow")}
                >
                  {follow}
                </button>
              </div>
            </div>

            <div className="flex justify-between mb-2 hover:bg-gray-100">
              <div className="flex ">
                <div className="w-20 h-20">
                  <Image
                    loader={myLoader}
                    src="photos/614810/pexels-photo-614810.jpeg"
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    layout="responsive"
                    className="flex-shrink-0 object-cover object-center mr-4 rounded-full"
                  />
                </div>
                <div className="items-center justify-center mt-5 ml-2 text-xl">
                  Bimasha Perera
                </div>
              </div>

              <div>
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
                  onClick={() => setFollow("Follow")}
                >
                  {follow}
                </button>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              data-modal-close
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleFollowing}
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>

        <div className="flex flex-col items-center justify-center ">
          <div className=" h-[178px] w-full">
            <Image
              loader={myLoader}
              src="photos/960137/pexels-photo-960137.jpeg"
              alt="Picture of the author"
              width={1920}
              height={225}
              layout="responsive"
              className="object-cover w-full h-full "
            />
          </div>
          <div className="-mt-36">
            <div className="h-[240px] w-[240px]">
              <Image
                loader={myLoader}
                src="photos/614810/pexels-photo-614810.jpeg"
                alt="Picture of the author"
                width={240}
                height={240}
                layout="responsive"
                className="rounded-full h-[240px] w-[240px] opacity-4  -mt-36 object-cover"
              />

              <HiOutlineCamera
                className="absolute  rounded-full h-[150px] w-[150px] object-cover text-opacity-20  text-white text-5xl cursor-pointer"
                style={{
                  marginTop: "-122px",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />

              <input
                type="file"
                className="absolute opacity-0 cursor-pointer"
                style={{
                  marginTop: "-122px",
                  left: "60%",
                  transform: "translate(-50%, -50%)",
                }}

                // onChange={saveImage}
              />
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 px-4 lg:grid-cols-3">
            <div className="hidden lg:flex">
              <div className="pl-24 text-4xl text-[#393486] flex">
                <HiStar className="mr-2" />{" "}
                <div className="flex-col text-lg">
                  5212
                  <div>Points</div>
                </div>
              </div>
            </div>
            <div className="items-center justify-center text-center ">
              <div className="text-2xl font-bold text-[#393486] my-2">
                John Doe{" "}
                <HiPencil
                  className="inline-block text-xl text-gray-700 hover:bg-gray-200 hover:rounded-full"
                  onClick={() => setEditName(true)}
                />
              </div>
              <div className="flex items-center justify-center font-semibold text-[#393486] p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Sweden{" "}
                <HiPencil
                  className="inline-block text-xl text-gray-700 hover:bg-gray-200 hover:rounded-full"
                  onClick={() => setEditAddress(true)}
                />
              </div>
              <center></center>
            </div>

            <div className="flex-col items-end justify-end hidden mr-20 text-right lg:flex">
              Member since
              <div>
                <div className="text-[#393486] font-semibold text-sm">2021</div>

                <div>
                  Phone: +9478934545{" "}
                  <HiPencil
                    className="inline-block text-xl text-gray-700 hover:bg-gray-200 hover:rounded-full"
                    onClick={() => setEditPhone(true)}
                  />
                </div>
                <div>
                  Email: example.com{" "}
                  <HiPencil
                    className="inline-block text-xl text-gray-700 hover:bg-gray-200 hover:rounded-full"
                    onClick={() => setEditEmail(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid max-w-5xl grid-cols-1 gap-4 mx-auto my-4 lg:grid-cols-3">
          <div>
            <div
              className="lg:w-[320px] w-auto h-auto lg:h-[128px] shadow-lg  border border-gray-300 rounded-2xl mx-5 lg:my-6 my-2 hover:bg-gray-100 cursor-pointer "
              onClick={() => setFollowing(true)}
            >
              <div className="text-xl p-4 text-[#393486]">Following</div>

              <div className="px-4 pb-4 text-sm text-gray-600">
                The sellers you follow
              </div>
            </div>

            <Link href="/profile/individual/ads">
              <div className="lg:w-[320px] w-auto h-auto lg:h-[128px] shadow-lg  border border-gray-300 rounded-2xl mx-5 lg:my-6 my-2 hover:bg-gray-100 cursor-pointer ">
                <div className="text-xl p-4 text-[#393486]">My Ads</div>

                <div className="px-4 pb-4 text-sm text-gray-600 ">
                  The ads you have posted
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link href="/profile/individual/favorite">
              <div className="lg:w-[320px] w-auto h-auto lg:h-[128px] shadow-lg  border border-gray-300 rounded-2xl mx-5 lg:my-6 my-2 hover:bg-gray-100 cursor-pointer ">
                <div className="text-xl p-4 text-[#393486]">My Favorites</div>

                <div className="px-4 pb-4 text-sm text-gray-600 ">
                  The ads you have saved
                </div>
              </div>
            </Link>
            <Link href="/profile/individual/notification">
              <div className="lg:w-[320px] w-auto h-auto lg:h-[128px] shadow-lg  border border-gray-300 rounded-2xl mx-5 lg:my-6 my-2 hover:bg-gray-100 cursor-pointer ">
                <div className="text-xl p-4 text-[#393486]">Notifications</div>

                <div className="px-4 pb-4 text-sm text-gray-600">
                  stay updated
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link href="/profile/individual/settings">
              {/* <a> */}
              <div className="lg:w-[320px] w-auto h-auto lg:h-[128px] shadow-lg  border border-gray-300 rounded-2xl mx-5 lg:my-6 my-2 hover:bg-gray-100 cursor-pointer ">
                <div className="text-xl p-4 text-[#393486]">Settings</div>

                <div className="px-4 pb-4 text-sm text-gray-600 ">
                  Manage your account
                </div>
              </div>
              {/* </a> */}
            </Link>

            <Link href="/profile/individual/cv">
              <div className="lg:w-[320px] w-auto h-auto lg:h-[128px] shadow-lg  border border-gray-300 rounded-2xl mx-5 lg:my-6 my-2 hover:bg-gray-100 cursor-pointer ">
                <div className="text-xl p-4 text-[#393486]">My CV</div>

                <div className="px-4 pb-4 text-sm text-gray-600 ">
                  Update your CV
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="relative flex max-w-5xl mx-auto my-5 felx-col">
          <div className="my-8 lg:my-2">
            <div className="text-3xl text-left font-bold text-[#393486] lg:my-2 my-14">
              About John Doe{" "}
              <HiPencil
                onClick={() => setEditDescription(true)}
                className="inline-block text-xl text-gray-700 hover:bg-gray-200 hover:rounded-full"
              />
            </div>
            <div className="font-[500] lg:my-2 my-14">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, nunc vel tincidunt luctus, nunc nisl aliquam nisl, vel
              aliquam nisl nisl sit amet nisl. Sed tincidunt, nunc vel tincidunt
              luctus, nunc nisl aliquam nisl, vel aliquam nisl nisl sit amet
              nisl. Sed tincidunt, nunc vel tincidunt luctus, nunc nisl aliquam
              nisl, vel aliquam nisl nisl sit amet nisl. Sed tincidunt, nunc vel
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, nunc vel tincidunt luctus, nunc nisl aliquam nisl, vel
              aliquam nisl nisl sit amet nisl. Sed tincidunt, nunc vel tincidunt
              luctus, nunc nisl aliquam nisl, vel aliquam nisl nisl sit amet
              nisl. Sed tincidunt, nunc vel tincidunt luctus, nunc nisl aliquam
              nisl, vel aliquam nisl nisl sit amet nisl. Sed tincidunt, nunc vel
            </div>
            <hr className="mt-3" />
            <div className="flex justify-between px-14">
              <div className="flex">
                <div className="text-2xl my-5 text-[#393486] text-left">
                  Ads
                </div>
                <div className="mx-3 my-6">
                  <select className="p-1 px-3 border border-gray-400 rounded-lg outline-none">
                    <option className="text-gray-400">Category</option>
                    <option className="text-gray-700" value="volvo">
                      Volvo
                    </option>
                    <option className="text-gray-700" value="saab">
                      Saab
                    </option>
                    <option className="text-gray-700" value="mercedes">
                      Mercedes
                    </option>
                  </select>
                </div>
              </div>
              <Link href="/profile/individual/ads">
                <div className="p-2 my-4 text-gray-800 border border-gray-400 rounded-lg hover:bg-gray-100">
                  Manage your ads
                </div>
              </Link>
            </div>
            <div>
              <div>
                <div className="container grid items-center content-center justify-center grid-cols-1 gap-4 py-5 lg:grid-cols-2 md:grid-cols-2 lg:mx-auto px-14 lg:px-1">
                  <div className="lg:w-[438px]  w-auto  h-auto lg:h-[238px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                    <div>
                      <Link href="/property/individual">
                        <a>
                          <Image
                            loader={myLoader}
                            src="photos/1396122/pexels-photo-1396122.jpeg"
                            alt="Evolov"
                            width="498"
                            height="268"
                            className="rounded-lg"
                          />
                        </a>
                      </Link>

                      <div
                        className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-400 right-7 top-7 sm:right-3 sm:top-3"
                        title="Save"
                      ></div>
                    </div>

                    <div className="flex justify-between">
                      <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                        Appertment for sale
                        <div className="text-sm font-semibold">
                          kr 4343,342,34
                        </div>
                      </div>
                      <button onClick={() => setPromote(true)}>
                        <div className="p-1 mt-1 text-sm text-gray-100 bg-green-700 rounded-lg">
                          Promote Ad
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="lg:w-[438px]  w-auto  h-auto  lg:h-[238px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                    <div>
                      <Link href="/property/individual">
                        <a>
                          <Image
                            loader={myLoader}
                            src="photos/1396122/pexels-photo-1396122.jpeg"
                            alt="Evolov"
                            width="498"
                            height="268"
                            className="rounded-lg"
                          />
                        </a>
                      </Link>

                      <div
                        className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-400 right-7 top-7 sm:right-3 sm:top-3"
                        title="Save"
                      ></div>
                    </div>

                    <div className="flex justify-between">
                      <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                        Appertment for sale
                        <div className="text-sm font-normal">New jersey</div>
                        <div className="text-sm font-normal">
                          kr 4343,342,34
                        </div>
                      </div>
                      <div className="flex-col p-3 font-semibold text-orange-600">
                        Private
                        <div className="text-sm font-normal mt-5 text-[#221F60]">
                          25,000m
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-[438px]  w-auto  h-auto lg:h-[238px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                    <div>
                      <Link href="/property/individual">
                        <a>
                          <Image
                            loader={myLoader}
                            src="photos/1396122/pexels-photo-1396122.jpeg"
                            alt="Evolov"
                            width="498"
                            height="268"
                            className="rounded-lg"
                          />
                        </a>
                      </Link>

                      <div
                        className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-400 right-7 top-7 sm:right-3 sm:top-3"
                        title="Save"
                      ></div>
                    </div>

                    <div className="flex justify-between">
                      <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                        Appertment for sale
                        <div className="text-sm font-normal">New jersey</div>
                        <div className="text-sm font-normal">
                          kr 4343,342,34
                        </div>
                      </div>
                      <div className="flex-col p-3 font-semibold text-orange-600">
                        Private
                        <div className="text-sm font-normal mt-5 text-[#221F60]">
                          25,000m
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-[438px]  w-auto  h-auto lg:h-[238px] shadow-lg rounded-xl lg:mb-24 mb-6 cursor-pointer relative">
                    <div>
                      <Link href="/property/individual">
                        <a>
                          <Image
                            loader={myLoader}
                            src="photos/1396122/pexels-photo-1396122.jpeg"
                            alt="Evolov"
                            width="498"
                            height="268"
                            className="rounded-lg"
                          />
                        </a>
                      </Link>

                      <div
                        className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 hover:bg-opacity-70 text-neutral-600 dark:text-neutral-400 right-7 top-7 sm:right-3 sm:top-3"
                        title="Save"
                      ></div>
                    </div>

                    <div className="flex justify-between">
                      <div className="p-3 text-lg flex-col font-semibold text-[#221F60] font-mono">
                        Appertment for sale
                        <div className="text-sm font-normal">New jersey</div>
                        <div className="text-sm font-normal">
                          kr 4343,342,34
                        </div>
                      </div>
                      <div className="flex-col p-3 font-semibold text-orange-600">
                        Private
                        <div className="text-sm font-normal mt-5 text-[#221F60]">
                          25,000m
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProfileRating />
      </div>
    </Layout>
  );
};

export default My_individual;
