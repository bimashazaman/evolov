import React, { useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { Formik } from "formik";
import Layout from "../../components/Login/Layout";
import { Suspense } from "react";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const [ConfirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const toggleConfirmPassword = () => {
    setConfirmPasswordShown(!ConfirmPasswordShown);
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
                    Reset Password
                  </div>
                  <div className="my-6 text-sm text-gray-500">
                    Reset your password to recover and access your account
                  </div>
                  <div>
                    <Formik initialValues={{}} onSubmit={() => {}}>
                      {({ values, handleChange, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                          <div className="flex">
                            <input
                              type={passwordShown ? "text" : "password"}
                              placeholder="New Password"
                              className="border-2 bg-[#F0F2F7] rounded-lg lg:w-[400px] w-full h-[50px] mt-4 px-4 text-gray-700 font-[400] outline-none"
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
                          <div className="flex">
                            <input
                              type={ConfirmPasswordShown ? "text" : "password"}
                              placeholder="Confirm Password"
                              className="border-2 bg-[#F0F2F7] rounded-lg lg:w-[400px] w-full h-[50px] mt-4 px-4 text-gray-700 font-[400] outline-none"
                            />
                            <button
                              className="-ml-[10%]"
                              onClick={toggleConfirmPassword}
                            >
                              {ConfirmPasswordShown ? (
                                <HiOutlineEye className="w-[25px] h-[25px] text-gray-600 mt-3" />
                              ) : (
                                <HiOutlineEyeOff className="w-[25px] h-[25px] text-gray-600 mt-3" />
                              )}
                            </button>
                          </div>
                          <div className="text-sm text-gray-500 mt-4 hover:text-blue-gray-900">
                            Forgot Password?
                          </div>

                          <button
                            type="submit"
                            className="bg-[#35308d] text-white rounded-lg lg:w-[400px] w-full h-[50px] mt-10 font-[500]"
                          >
                            Log in
                          </button>

                          <div className="flex justify-center mt-4">
                            <div className="text-sm text-gray-500">
                              {"Don't have an account? "} <a>Click here</a>
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

export default Login;
