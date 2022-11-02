import React, { Suspense } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm";
import Image from "next/image";
import Layout from "../../components/Layout";

import { HiChevronDown } from "react-icons/hi";
import { Form, Radio, RadioGroup } from "rsuite";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  "pk_test_51IsGDgLknn1omIIy4CrGxNdDFEABIKJq4EPNcUlK0JyeBYd6roO8j6Qo3O0WktdRe0Nw3E7vcOrXxBCDZEFrAUqG009aSYLE9y"
);

export default function Stripe() {
  const [clientSecret, setClientSecret] = React.useState(
    "pi_3Lt7KELknn1omIIy0P6T7dsb_secret_dHleO1vpHIz58VyhXzk2Oqytc"
  );

  const myLoader = ({ src, width, quality }) => {
    return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
  };

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  const [publishAddress, setPublishAddress] = React.useState(false);
  const [extra, setExtra] = React.useState(false);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-[#F9FAFF]">
          <Layout>
            <div className="flex">
              <div className="flex-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto lg:p-20 items-center content-center justify-center">
                  <div className="p-5">
                    <div className="text-2xl font-bold text-gray-800">
                      Your Order Summary
                    </div>
                    <div className="text-gray-600 font-semibold text-sm">
                      Order #123456
                    </div>
                    <hr />
                    <div className="flex flex-col mt-5 space-y-5">
                      <div className="flex justify-between text-lg ">
                        <div className="font-semibold flex">
                          Publish property{" "}
                          <HiChevronDown
                            className=" mt-2 ml-2 text-lg"
                            onClick={() => {
                              setPublishAddress(!publishAddress);
                            }}
                          />{" "}
                        </div>
                        <div>
                          <span className="text-gray-600 font-semibold">$</span>
                          <span className="text-gray-600 font-semibold">
                            15
                          </span>
                        </div>
                      </div>
                      <div>
                        {publishAddress ? (
                          <div className="border-2 shadow p-2 border-gray-200 rounded-lg">
                            <div className="lg:flex block">
                              <div>
                                <Image
                                  loader={myLoader}
                                  src="photos/164558/pexels-photo-164558.jpeg"
                                  alt="Evolov"
                                  width="200"
                                  height="150"
                                  className="rounded-lg w-full"
                                />
                              </div>
                              <div>
                                <div className="text-lg font-semibold text-gray-600 ml-2">
                                  Your Ad Title
                                </div>
                                <div className="text-sm text-gray-600 ml-2">
                                  Publishing each property cost $15 for until it
                                  is sold or rented out.
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                      <div>
                        <div className="flex justify-between text-lg font-semibold">
                          <div className="flex">
                            Extra Visibility (3 days){" "}
                            <HiChevronDown
                              className=" mt-2 ml-2 text-lg"
                              onClick={() => {
                                setExtra(!extra);
                              }}
                            />{" "}
                          </div>
                          <div>
                            <span className="text-gray-600 font-semibold">
                              $
                            </span>
                            <span className="text-gray-600 font-semibold">
                              15
                            </span>
                          </div>
                        </div>
                        {extra ? (
                          <div className="border-2 shadow p-2 border-gray-200 rounded-lg">
                            <div className="py-2 text-base font-semibold">
                              You are promoting your property to the top of the
                              list for 3 days on the homepage.
                            </div>
                            <div></div>
                            <div>

                              <Form.Group controlId="radioList">
                                <RadioGroup name="radioList">
                                  <div>
                                    How long do you want to promote this ad for?{" "}
                                  </div>

                                  <Radio value="B">
                                    <div>
                                      <b>3 days</b> = 15${" "}
                                    </div>
                                  </Radio>
                                  <Radio value="C">
                                    <div>
                                      <b>7 days</b> = 35${" "}
                                    </div>
                                  </Radio>
                                </RadioGroup>
                                <RadioGroup name="radioList">
                                  <div>
                                    Where do you want to promote this ad?{" "}
                                  </div>
                                  <Radio value="E">
                                    <div>
                                      <b>Home Page (100$)</b> - Promote this ad
                                      on the home page of the website
                                    </div>
                                  </Radio>
                                  <Radio value="F">
                                    <div>
                                      <b>Category Page (40$)</b> - Promote this
                                      ad on the category page of the website
                                    </div>
                                  </Radio>

                                  <Radio value="H">
                                    <div>
                                      <b>Sub Category (20$)</b> - Promote this
                                      ad on the Sub Category of the website
                                    </div>
                                  </Radio>
                                </RadioGroup>
                              </Form.Group>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <hr className="mt-3" />
                    <div className="flex justify-between mt-4 font-semibold">
                      <div className="text-gray-600 text-xl">Subtotal</div>
                      <div className="text-gray-600 text-xl">$ 100.00</div>
                    </div>
                  </div>

                  {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                      <CheckoutForm />
                    </Elements>
                  )}
                </div>
              </div>
            </div>
          </Layout>
        </div>
      </Suspense>
    </>
  );
}
