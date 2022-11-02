
import React, { useContext, useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { Form, Formik } from "formik";
import Layout from "../../components/Login/Layout";
import { Suspense } from "react";
import Link from "next/link";
import { Select, InputField } from "../../components/formik/Fields";
import { countries } from "../../constants";
import { authContext, signUp, updateInfo } from "../../server/firebase";
import { useMutation } from "@apollo/client";
import { CREATE_COMPANY } from "../../server/mutations";
import { CountryNames, dialCode } from "../../constants/countryNames";
import { useRouter } from "next/router";



const CorporationSignUp = () => {
  const router = useRouter()
  const [passwordShown, setPasswordShown] = useState(false);
  const { location } = useContext(authContext);
  if(location){
    var country = countries.find(({country_name}) =>country_name === location.country_name);
  }
  const [mutate] = useMutation(CREATE_COMPANY);

  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const [ConfirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const toggleConfirmPassword = () => {
    setConfirmPasswordShown(!ConfirmPasswordShown);
  };
  
  const onSubmit = async (values) => {
    console.log(values);
    let firebaseUser;
    await signUp(values.email, values.password).then((userCredential) => {
      firebaseUser = userCredential.user
      updateInfo(values.username)
    }).catch(err => {throw new Error(err.message)})
    await mutate({variables: {
      email: values.email,
      uid: firebaseUser.uid,
      firstName: values.firstName,
      lastName: values.lastName,
      corporationName: values.corporationName,
      corporationId: values.corporationId,
      streetAddress: values.address,
      city: values.city,
      country: country ? country['country_name'] : "",
      isCompany: true,
      isEmployee: false,
      notificationIsOn: true,
      eventType: "create_user",
      phone: country ? `${country['dial_code']}${values.number}` : "",
    }})
    
    router.push('/login')
  }

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-[#F9FAFF]">
          {/* <div>
                {
                    //logo will go here
                }
            </div> */}
          <div className="bg-[#F9FAFF] flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 pt-14">
              <Layout />
              <div>
                <div className="lg:w-[514px] w-auto h-auto mx-4 rounded-sm border-[0.4px] px-14 items-center justify-center text-center border-[#413c9b] shadow-lg bg-white">
                  <div className="flex-col my-20">
                    <div className="flex justify-between">
                      <div className="text-gray-500 text-3xl font-[800]">
                        Sign Up
                      </div>
                      <div className="my-3 text-base font-semibold text-blue-900 cursor-pointer">
                        <Link href="/sign-up">
                        Sign up as an individual
                        </Link>
                        
                      </div>
                    </div>
                    <div>
                      <Formik initialValues={{}} onSubmit={onSubmit}>
                        {({ values, handleChange, handleSubmit, handleBlur }) => (
                          <Form onSubmit={handleSubmit}>
                            <div className="flex-col mt-5">
                              <div className="flex space-x-2">
                                <div className="flex-col text-start">
                                  <InputField
                                    label="First Name"
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="border-2 bg-[#F0F2F7] rounded-lg w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                  />
                                </div>
                                <div className="flex-col text-start">
                                  <InputField
                                    label="Last Name"
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="border-2 bg-[#F0F2F7] rounded-lg w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                  />
                                </div>
                              </div>

                              <div className="flex space-x-2">
                                <div className="w-full flex-col text-start mt-3">
                                  <InputField
                                    label="Username"
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="border-2 bg-[#F0F2F7] rounded-lg w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                  />
                                </div>
                                </div>
                              <div className="flex space-x-2">
                                <div className="flex-col text-start">
                                  <InputField
                                    label="Corporation Name"
                                    type="text"
                                    name="corporationName"
                                    placeholder="Corporation Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="border-2 bg-[#F0F2F7] rounded-lg w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                  />
                                </div>
                                <div className="flex-col text-start">
                                  <InputField
                                    label="Corporation ID"
                                    type="text"
                                    name="corporationId"
                                    placeholder="Corporation ID"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="border-2 bg-[#F0F2F7] rounded-lg w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                  />
                                </div>
                              </div>

                              <div className="flex space-x-2">
                                <div className="w-full flex-col text-start mt-3">
                                  <InputField
                                    label="City"
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="border-2 bg-[#F0F2F7] rounded-lg w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                  />
                                </div>
                                {/* <div className="w-full flex-col text-start mt-3"> */}
                                  {/* <label className="text-gray-600">
                                    Country
                                  </label> */}
                                  {/* <select className="border-2 bg-[#F0F2F7] rounded-lg w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none">
                                    <option
                                      value=""
                                      className="w-full"
                                      key=""
                                      disabled
                                    >
                                      Select Country
                                    </option>
                                    <option
                                      value="Nigeria"
                                      className="w-full"
                                      key="Nigeria"
                                    >
                                      Nigeria
                                    </option>
                                    <option
                                      value="Ghana"
                                      className="w-full"
                                      key="Ghana"
                                    >
                                      Ghana
                                    </option>
                                  </select> */}
                                {/* </div> */}
                              </div>

                              <div className="flex flex-col text-start">
                                <InputField
                                  label="Address"
                                  type="text"
                                  name="address"
                                  placeholder="Address"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="border-2 bg-[#F0F2F7] rounded-lg lg:w-[400px] w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                />
                              </div>
                              <div className="text-start mt-3">
                                <label className="text-gray-600 mt-3">
                                  Number
                                </label>
                              </div>
                              <div className="flex space-x-2">
                                <div>
                                <InputField
                                  disabled
                                  placeholder="code"
                                  type="text"
                                  name="country_code"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={country && country['dial_code']}
                                  className="border-2 bg-[#F0F2F7] rounded-lg lg:w-[70px] w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                />
                                </div>
                                <div className="w-full">
                                <InputField
                                    label=""
                                    type="text"
                                    name="number"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Phone Number"
                                    className="border-2 bg-[#F0F2F7] rounded-lg  w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                  />
                                </div>
                              </div>

                              <div className="flex flex-col text-start" >
                                <div className="flex">
                                  <InputField
                                    label="password"
                                    type={passwordShown ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="border-2 bg-[#F0F2F7] rounded-lg lg:w-[400px] w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                  />
                                  <button
                                    className="-ml-[10%]"
                                    onClick={togglePassword}
                                  >
                                    {passwordShown ? (
                                      <HiOutlineEye className="w-[25px] h-[25px] text-gray-600 mt-3" />
                                    ) : (
                                      <HiOutlineEyeOff className="w-[25px] h-[25px] text-gray-600 mt-3" />
                                    )}
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="text-sm text-gray-500 mt-3 hover:text-blue-gray-900">
                              <Link href="/forgot-password">
                                <a>Forgot Password?</a>
                              </Link>
                            </div>

                            <button
                              type="submit"
                              className="bg-[#35308d] text-white rounded-lg lg:w-[400px] w-full h-[50px] mt-10 font-[500]"
                            >
                              Sign Up
                            </button>

                            <div className="flex justify-center mt-3">
                              <div className="text-sm text-gray-500">
                                <Link href="/login">
                                  <a>Already have an account?</a>
                                </Link>
                              </div>
                            </div>

                          </Form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
};


export default CorporationSignUp;
