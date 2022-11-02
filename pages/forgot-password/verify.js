import React, { useState } from "react";
import { Formik } from "formik";
import Layout from "../../components/Login/Layout";
import Link from "next/link";
import { Suspense } from "react";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

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
                <div className="flex flex-col my-20">
                  <div className="text-[#34308b] text-3xl font-[800]">
                    Verify Your Phone Number
                  </div>
                  <div className="my-6 text-sm text-gray-500">
                    We have sent you a verification code to your phone number
                  </div>
                  <div>
                    <Formik initialValues={{}} onSubmit={() => {}}>
                      {({ values, handleChange, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                          <div className="flex space-x-3 px-6">
                            <div>
                              <input
                                type="text"
                                className="border-2 border-gray-400 rounded-lg  w-full h-[60px] mt-10 px-4 text-gray-700 font-[400] outline-none text-2xl"
                                maxLength="1"
                              />
                            </div>
                            <div>
                              <input
                                type="text"
                                className="border-2 border-gray-400 rounded-lg  w-full h-[60px] mt-10 px-4 text-gray-700 font-[400] outline-none text-2xl"
                                maxLength="1"
                              />
                            </div>
                            <div>
                              <input
                                type="text"
                                className="border-2 border-gray-400 rounded-lg  w-full h-[60px] mt-10 px-4 text-gray-700 font-[400] outline-none text-2xl"
                                maxLength="1"
                              />
                            </div>

                            <div>
                              <input
                                type="text"
                                className="border-2 border-gray-400 rounded-lg  w-full h-[60px] mt-10 px-4 text-gray-700 font-[400] outline-none text-2xl"
                                maxLength="1"
                              />
                            </div>
                          </div>

                          <div className="text-sm text-blue-900 mt-4 font-semibold hover:text-blue-gray-900">
                            <Link href="/login">
                            <a>
                              {" Didn't receive the code? Resend"}
                            </a>
                            </Link>
                          </div>

                          <button
                            type="submit"
                            className="bg-[#35308d] text-white rounded-lg lg:w-[400px] w-full h-[50px] mt-10 font-[500]"
                          >
                            Verify
                          </button>
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

export default Login;
