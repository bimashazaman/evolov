import React, { useState } from "react";
import { Suspense, lazy } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { Formik } from "formik";

import { useContext } from "react";
import Link from "next/link";
import Cookies from 'js-cookie'

import { InputField } from "../../components/formik/Fields";
import { authContext } from "../../server/firebase";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { SIGNIN } from "../../server/mutations";

const Layout = lazy(() => import('../../components/Login/Layout'));


const Login = () => {
  const router = useRouter()
  const { login, currentUser } = useContext(authContext);
  const [passwordShown, setPasswordShown] = useState(false);
  const [mutate] = useMutation(SIGNIN);

  // Password toggle handler

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  
  const onSubmit = async (values) => {
    let firebaseUser;
    await login(values.email, values.password).then((userCredential) => {
      firebaseUser = userCredential.user;
    }).catch((err) => alert(err))
    const toReturn = await mutate({variables: {
      email: firebaseUser.email,
      uid: firebaseUser.uid,
    }})
    Cookies.set('auth_token', toReturn['data']['authorizeToken']['toReturn']['token'], { expires: 30 })
    router.push('/')
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
                  <div className="flex flex-col my-20">
                    <div className="text-[#34308b] text-3xl font-[800]">
                      Log in
                    </div>
                    <div className="my-6 text-sm text-gray-500">
                      Write your email address and password to log in to your
                      account
                    </div>
                    <div>
                      <Formik
                        initialValues={{
                          email: "",
                          password: "",
                        }}
                        validate={(values) => {
                          const errors = {};
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
                          } else if (values.password.length < 8) {
                            errors.password =
                              "Password must be at least 8 characters";
                          }

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
                          /* and other goodies */
                        }) => (
                          <form onSubmit={handleSubmit}>
                            <InputField
                              type="email"
                              name="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Email"
                              className="border-2 bg-[#F0F2F7] rounded-lg lg:w-[400px] w-full h-[50px] mt-10 px-4 text-gray-700 font-[400] outline-none"
                            />

                            <div className="flex">
                              <InputField
                                type={passwordShown ? "text" : "password"}
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}

                                placeholder="Password"
                                className="border-2 bg-[#F0F2F7] rounded-lg lg:w-[400px] w-full h-[50px] mt-10 px-4 text-gray-700 font-[400] outline-none"
                              />
                              <button
                                type="button"
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

                            <div className="text-sm text-gray-500 mt-4 hover:text-blue-gray-900">
                              <Link href="/forgot-password">
                                <a>Forgot password?</a>
                              </Link>
                            </div>

                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="bg-[#35308d] text-white rounded-lg lg:w-[400px] w-full h-[50px] mt-10 font-[500]"
                            >
                              Log in
                            </button>

                            <div className="flex justify-center mt-4">
                              <div className="text-sm text-gray-500">
                                <Link href="/sign-up">
                                  <a>{"Don't have an account? "} Click here</a>
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

export default Login;
