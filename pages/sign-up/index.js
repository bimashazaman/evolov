
import React, { useState, useContext, Suspense, useEffect } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { Formik, useFormikContext } from "formik";
import Link from "next/link";

import Layout from "../../components/Login/Layout";
import { Select, InputField } from "../../components/formik/Fields";
import { countries } from "../../constants";
import { authContext, signUp, updateInfo } from "../../server/firebase";
import { useMutation } from "@apollo/client";
import { CREATE_ORDINARY_USER } from "../../server/mutations";
import { CountryNames, dialCode } from "../../constants/countryNames";
import { useRouter } from "next/router";


const SignUp = () => {
  const router = useRouter()
  const [passwordShown, setPasswordShown] = useState(false);
  const { location } = useContext(authContext);
  if(location){
    var country = countries.find(({country_name}) =>country_name === location.country_name);
  }
  const [mutate] = useMutation(CREATE_ORDINARY_USER);

  
  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };


  const onSubmit = async (values) => {
    let firebaseUser;
    await signUp(values.email, values.password).then((userCredential) => {
      firebaseUser = userCredential.user
      updateInfo(values.username)
    }).catch(err => {throw new Error(err.message)})
    await mutate({variables: {
      email: values.email,
      uid: firebaseUser.uid,
      firstName: values.first_name,
      lastName: values.last_name,
      country: country ? country['country_name'] : "",
      isCompany: false,
      isEmployee: false,
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
                      <div className="text-[#34308b] text-3xl font-[800]">
                        Sign Up
                      </div>
                      <div className="my-3 text-base text-gray-500 hover:text-blue-800 cursor-pointer">
                        <Link href="/sign-up/corporation">
                          Sign up as Corporation
                        </Link>
                      </div>
                    </div>
                    <div>
                      <Formik
                        initialValues={{
                          first_name: "",
                          last_name: "",
                          username: "",
                          country: "",
                          country_code: "",
                          number: "",
                          email: "",
                          password: "",
                          confirm_password: "",
                        }}
                        validate={(values) => {
                          const errors = {};
                          if (!values.first_name) {
                            errors.first_name = "Required";
                          }
                          if (!values.last_name) {
                            errors.last_name = "Required";
                          }
                          if (!values.username) {
                            errors.username = "Required";
                          }
                          if (!values.number) {
                            errors.number = "Required";
                          }
                          if (!values.email) {
                            errors.email = "Required";
                          } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                              values.email
                            )
                          ) {
                            errors.email = "Invalid email address";
                          }
                          if (!values.password) {
                            errors.password = "Required";
                          }
                          console.log(errors);
                          return errors;
                        }}
                        onSubmit={onSubmit}
                      >
                        {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                        }) => (
                          <form onSubmit={handleSubmit}>
                            <div className="flex-col mt-5">
                              <div className="flex space-x-2">
                                <div className="flex-col text-start">
                                  <InputField
                                    label="First Name"
                                    type="text"
                                    name="first_name"
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
                                    name="last_name"
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
                                {/* <div className="w-full flex-col text-start mt-3">
                                  <Select

                                    placeholder={country ? `${country.country_name}` : "Select Country"}
                                    label="Country"
                                    name="country"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="border-2 bg-[#F0F2F7] rounded-lg w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                    value={country && country['country_name']}
                                    options={CountryNames}
                                  />
                                </div> */}
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
                                    label=""
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
                                    className="border-2 bg-[#F0F2F7] rounded-lg w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                  />
                                </div>
                              </div>

                              <div className="flex flex-col text-start">
                                <InputField
                                  label="Email"
                                  type="text"
                                  name="email"
                                  placeholder="Email Address"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="border-2 bg-[#F0F2F7] rounded-lg lg:w-[400px] w-full h-[50px] mt-1 px-4 text-gray-700 font-[400] outline-none"
                                />
                              </div>
                              <div className="text-start mt-3">
                                <label className="text-gray-600 mt-3">
                                  Password
                                </label>
                              </div>
                              <div className="flex flex-col text-start">
                                <div className="flex">
                                  <InputField
                                    label=""
                                    type={passwordShown ? "text" : "password"}
                                    name="password"
                                    placeholder="New Password"
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
                              disabled={isSubmitting}
                              className="bg-[#35308d] text-white rounded-lg lg:w-[400px] w-full h-[50px] mt-10 font-[500]"
                            >
                              Sign Up
                            </button>

                            <div className="flex justify-center mt-3">
                              <div className="text-sm text-gray-500">
                                <Link href="/login">
                                  <a>{"Already Have an account? Click here"}</a>
                                </Link>
                              </div>
                            </div>
                          </form>
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
export default SignUp;
