import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Radio, RadioGroup, Form } from "rsuite";
import TextareaAutosize from "react-textarea-autosize";
import { motion } from "framer-motion";
import * as Yup from "yup";

import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { arrayMoveImmutable } from "array-move";

import { Formik } from "formik";
import Image from "next/image";

const Contest = () => {
  const [modal, setModal] = useState(false);

  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const fileToDataUri = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file);
    });

  const handleImageChange = async (e) => {
    let files = e.target.files;
    const list = [...previewImages];
    for (let index = 0; index < files.length; index++) {
      const file = files[index];
      await fileToDataUri(file).then((dataUri) => {
        list.push(dataUri);
      });
    }
    setPreviewImages(list);
    setImages(files);
  };

  const handleRemoveImage = (index) => {
    const list = [...previewImages];
    const files = [...images];
    list.splice(index, 1);
    files.splice(index, 1);
    setPreviewImages(list);
    setImages(files);
  };

  const SortablePhoto = SortableElement(({ image, index }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      key={index}
      className="aspect-auto border rounded-lg mb-2 overflow-hidden relative max-h-[190px] w-[190px]"
    >
       <Image
        src={image}
        alt="preview"
        className="aspect-auto"
        width="190"
        height="190"
        

      />
      <button
        onClick={() => handleRemoveImage(index)}
        className="absolute bottom-2 right-2 bg-red-500 text-white rounded-full py-2 px-4 text-sm font-bold"
      >
        X
      </button>
    </motion.div>
  ));

  const SortableGallery = SortableContainer(({ previewImages }) => (
    <div
      className={`${
        previewImages.length > 2 ? "columns-3" : "md:flex-nowrap"
      } gap-2 flex-wrap flex`}
    >
      {previewImages.map((image, idx) => (
        <SortablePhoto image={image} key={idx} index={idx} />
      ))}
    </div>
  ));

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setImages(arrayMoveImmutable(images, oldIndex, newIndex));
    setPreviewImages(arrayMoveImmutable(previewImages, oldIndex, newIndex));
  };

  return (
    <>
      <Layout>
        <div className="bg-[#F9FAFF] content-center  h-full justify-center -mt-[50px] items-center">
          {modal && (
            <div className="items-center justify-center">
              <div
                id="defaultModal"
                tabindex="-1"
                aria-hidden="true"
                style={{ backgroundColor: "rgba(0,0,0,.7)" }}
                className="fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 lg:h-modal h-full animated fadeIn faster "
              >
                <div className="relative w-full h-full max-w-2xl p-4 lg:left-[30%] top-44 md:h-auto rounded-lg">
                  <div className="relative bg-white rounded-xl shadow dark:bg-gray-700 transform transition-all ">
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                      <div className="text-xl font-semibold text-gray-700 dark:text-white">
                        Add your custom form fields
                      </div>
                      <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-toggle="defaultModal"
                        onClick={() => setModal(false)}
                      >
                        <svg
                          aria-hidden="true"
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>

                    <div className="p-6 space-y-6">
                      <input
                        type="text"
                        placeholder="Add new Field"
                        className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-blue-800"
                      />
                    </div>

                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button
                        data-modal-toggle="defaultModal"
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="relative items-center content-center justify-center px-4 mx-auto mb-10 sm:px-8 max-w-7xl mt-14 pt-14">
            <div className="items-center content-center justify-center py-5 text-center">
              <div className="text-3xl text-[#221F60] mb-7">
                Publish Your Contest
              </div>
              <div className="text-gray-500 text-sm mb-7 lg:mx-20">
                Please fill in the details of your car to publish it on our site
                and get the best offers from our customers in no time.
              </div>
            </div>
            <div>
              <Formik
                enableReinitialize
                initialValues={{
                  type: "",
                  title: "",
                  description: "",
                  images: [],
                  country: "",
                  city: "",
                  price: "",
                  reward: "",
                  start_date: "",
                  deadline: "",
                  benifits: "",
                }}
                validationSchema={Yup.object({
                  type: Yup.string().required("Required"),
                  title: Yup.string().required("Required"),
                  description: Yup.string().required("Required"),
                  images: Yup.array().required("Required"),
                  country: Yup.string().required("Required"),
                  city: Yup.string().required("Required"),
                  price: Yup.string().required("Required"),
                  reward: Yup.string().required("Required"),
                  start_date: Yup.string().required("Required"),
                  deadline: Yup.string().required("Required"),
                  benifits: Yup.string().required("Required"),
                })}
                // onSubmit={(values, { setSubmitting }) => {
                //   setTimeout(() => {
                //     alert(JSON.stringify(values, null, 2));
                //     setSubmitting(false);
                //   }, 400);
                // }}
                onSubmit={(values, { setSubmitting }) => {
                  const formData = new FormData();
                  formData.append("type", values.type);
                  formData.append("title", values.title);
                  formData.append("description", values.description);
                  formData.append("country", values.country);
                  formData.append("city", values.city);
                  formData.append("price", values.price);
                  formData.append("reward", values.reward);
                  formData.append("start_date", values.start_date);
                  formData.append("deadline", values.deadline);
                  formData.append("benifits", values.benifits);
                  formData.append("images", values.images);
                  console.log(formData);

                  axios
                    .post("http://localhost:8000/api/cars", formData, {
                      headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${localStorage.getItem(
                          "token"
                        )}`,
                      },
                    })
                    .then((res) => {
                      console.log(res.data);
                      setSubmitting(false);
                    })
                    .catch((err) => {
                      console.log(err);
                      setSubmitting(false);
                    });
                }}
              >
                {({
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <form onSubmit={handleSubmit} className="w-full">
                    <div className="grid justify-center grid-cols-1 gap-4 tems-center tems-center content-center  lg:p-20 p-6 border-2 shadow-lg mx-4 lg:mx-28 bg-white">
                      <div className="flex-col items-center content-center justify-center">
                        <div className="flex-col">
                          <div className="mb-7">
                            <div>
                              <label className="text-[#221F60] font-[600]">
                                Type
                              </label>
                            </div>
                            <div>
                              <input
                                className="shadow-sm border-[0.2px] border-gray-300 text-gray-600 px-4 placeholder:text-[#6c6a9a] placeholder:font-[500] w-full py-3 rounded-lg mt-1 outline-none"
                                type="text"
                                placeholder="Type"
                                name="type"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.type}
                              />
                            </div>
                          </div>

                          <div className="mb-6 ">
                            <div className="flex">
                              <label
                                for="dropzone-file"
                                className="flex flex-col w-full h-16  bg-[#221F60] rounded-lg border-2 border-gray-300 cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-blue-700 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                              >
                                <div className="flex items-center content-center justify-center py-3 pb-6">
                                  <svg
                                    aria-hidden="true"
                                    className="w-10 h-10 mb-3 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                    ></path>
                                  </svg>
                                  <div className="mb-2 ml-3 text-lg text-white dark:text-white">
                                    {images.length > 0
                                      ? "Upload More Images"
                                      : "Upload Images"}
                                  </div>
                                </div>
                                <input
                                  id="dropzone-file"
                                  type="file"
                                  accept="image/*"
                                  multiple="multiple"
                                  onChange={(e) => handleImageChange(e)}
                                  className="hidden"
                                  //  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.images}
                                />
                              </label>
                            </div>
                          </div>
                          {previewImages.length > 0 && (
                            <div className="mb-6 w-fit h-fit border p-1 rounded-lg overflow-hidden transition-all">
                              <SortableGallery
                                previewImages={previewImages}
                                onSortEnd={onSortEnd}
                                axis={"xy"}
                              />
                            </div>
                          )}
                          <div className="mb-6">
                            <div>
                              <label className="text-[#221F60] font-[600]">
                                Title
                              </label>
                            </div>
                            <div>
                              <input
                                className="shadow-sm border-[0.2px] border-gray-300 text-gray-600 px-4 placeholder:text-[#6c6a9a] placeholder:font-[500] w-full py-3 rounded-lg mt-1 outline-none"
                                type="text"
                                placeholder="Title"
                                name="title"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.title}
                              />
                            </div>
                          </div>

                          <div className="mb-6">
                            <div>
                              <label className="text-[#221F60] font-[600]">
                                Description
                              </label>
                            </div>
                            <div>
                              <TextareaAutosize
                                className="shadow-lg border-[0.2px] border-gray-200 text-gray-600 px-4 placeholder:text-[#6c6a9a] placeholder:font-[500] w-full h-auto lg:w-[480px] py-3 rounded-lg mt-1 outline-none"
                                type="text"
                                placeholder="Description"
                                minRows={5}
                                name="description"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.description}
                              />
                            </div>
                          </div>

                          <div className="mb-6">
                            <div>
                              <label className="text-[#221F60] font-[600]">
                                Price
                              </label>
                            </div>
                            <div>
                              <input
                                className="shadow-sm border-[0.2px] border-gray-300 text-gray-600 px-4 placeholder:text-[#6c6a9a] placeholder:font-[500] w-full py-3 rounded-lg mt-1 outline-none"
                                type="text"
                                placeholder="Price"
                                name="price"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.price}
                              />
                            </div>
                          </div>

                          <div className="mb-10">
                            <div>
                              <label className="text-[#221F60] font-[600]">
                                country
                              </label>
                            </div>
                            <div>
                              <input
                                className="shadow-sm border-[0.2px] border-gray-300 text-gray-600 px-4 placeholder:text-[#6c6a9a] placeholder:font-[500] w-full py-3 rounded-lg mt-1 outline-none"
                                type="text"
                                placeholder="country"
                                name="country"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.country}
                              />
                            </div>
                          </div>

                          <div className="mb-2">
                            <div>
                              <label className="text-[#221F60] font-[600]">
                                City
                              </label>
                            </div>
                            <div>
                              <input
                                className="shadow-sm border-[0.2px] border-gray-300 text-gray-600 px-4 placeholder:text-[#6c6a9a] placeholder:font-[500] w-full py-3 rounded-lg mt-1 outline-none"
                                type="text"
                                placeholder="City"
                                name="city"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.city}
                              />
                            </div>

                            <div className="mb-2 mt-6">
                              <div>
                                <label className="text-[#221F60] font-[600]">
                                  Reward
                                </label>
                              </div>
                              <div>
                                <input
                                  className="shadow-sm border-[0.2px] border-gray-300 text-gray-600 px-4 placeholder:text-[#6c6a9a] placeholder:font-[500] w-full py-3 rounded-lg mt-1 outline-none"
                                  type="text"
                                  placeholder="Reward"
                                  name="reward"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.reward}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="justify-center itiems-center">
                          <div className="mb-6">
                            <div>
                              <label className="text-[#221F60] font-[600]">
                                Start Date
                              </label>
                            </div>
                            <div>
                              <input
                                className="shadow-sm border-[0.2px] border-gray-300 text-gray-600 px-4 placeholder:text-[#6c6a9a] placeholder:font-[500] w-full py-3 rounded-lg mt-1 outline-none"
                                type="text"
                                placeholder="Start Date"
                                name="start_date"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.start_date}
                              />
                            </div>
                          </div>

                          <div className="mb-6">
                            <div>
                              <label className="text-[#221F60] font-[600]">
                                Deadline
                              </label>
                            </div>
                            <div>
                              <input
                                className="shadow-sm border-[0.2px] border-gray-300 text-gray-600 px-4 placeholder:text-[#6c6a9a] placeholder:font-[500] w-full py-3 rounded-lg mt-1 outline-none"
                                type="text"
                                placeholder="Deadline"
                                name="deadline"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.deadline}
                              />
                            </div>
                          </div>

                          <div className="mb-6">
                            <div>
                              <label className="text-[#221F60] font-[600]">
                                Benifits
                              </label>
                            </div>
                            <div>
                              <input
                                className="shadow-sm border-[0.2px] border-gray-300 text-gray-600 px-4 placeholder:text-[#6c6a9a] placeholder:font-[500] w-full py-3 rounded-lg mt-1 outline-none"
                                type="text"
                                placeholder="Exterior color"
                                name="benifits"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.benifits}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="items-center justify-center text-center">
                        <button
                          className=" px-40 font-semibold text-[#221F60] text-xl py-3 m-3 bg-white rounded-full shadow-xl border border-gray-300 mt-4 hover:bg-blue-300 "
                          onClick={
                            //MODAL POPUP
                            () => {
                              setModal(!modal);
                            }
                          }
                        >
                          Add More
                        </button>
                      </div>
                      <div className="grid items-center justify-center grid-cols-1 mt-5 text-center lg:grid-cols-2">
                        <div>
                          <button className=" lg:mr-[-50px] px-36  text-[#221F60] text-xl py-5 m-3 bg-white rounded-full shadow-xl border border-gray-300 mt-4 hover:bg-blue-300 ">
                            Review
                          </button>
                        </div>

                        <div>
                          <button className=" lg:ml-[-30px] px-36  bg-[#221F60] text-xl py-5 m-3 text-white rounded-full shadow-xl border border-gray-300 mt-4 hover:bg-blue-300 ">
                            Publish
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contest;
