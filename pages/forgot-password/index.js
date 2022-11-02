import React, { useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { Formik } from "formik";
import Layout from "../../components/Login/Layout";
import { Suspense } from "react";
import Link from "next/link";

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
                      Forgot Password?
                    </div>
                    <div className="my-6 text-sm text-gray-500">
                      Enter your phone number we will send you a link to get
                      back into your account.
                    </div>
                    <div>
                      <Formik initialValues={{}} onSubmit={() => {}}>
                        {({ values, handleChange, handleSubmit }) => (
                          <form onSubmit={handleSubmit}>
                            <input
                              type="text"
                              placeholder="Type your phone number"
                              className="border-2 bg-[#F0F2F7] rounded-lg lg:w-[400px] w-full h-[50px] mt-10 px-4 text-gray-700 font-[400] outline-none"
                            />

                            <div className="text-sm text-blue-900 mt-4 font-semibold hover:text-blue-gray-900">
                              <Link href="/login">
                                <a>Back to Login</a>
                              </Link>
                            </div>

                            <button
                              type="submit"
                              className="bg-[#35308d] text-white rounded-lg lg:w-[400px] w-full h-[50px] mt-10 font-[500]"
                            >
                              Reset Password
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
