import React from "react";
import Image from "next/image";
import Icons from "./socialIcons/Icons";
import Newsletter from "./Newsletter/Newsletter";

const Footer = () => {
  return (
    <>
    <br/>
    <br/>
      <footer className="p-4 bg-[#3D3474]  sm:p-6 dark:bg-gray-900">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 flex">
           <div className="lg:flex hidden">
            
           <Image

                src="/images/logo/footer.png"
                width={150}
                height={65}
                alt="Evolov"
               
              />
           </div>
              <Newsletter />
           

          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <ul className="text-white dark:text-gray-400">
                <li className="mb-4">
                  <a href="" className="text-white hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="" className="text-white hover:underline">
                    Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-white dark:text-gray-400">
                <li className="mb-4">
                  <a href="" className="text-white hover:underline ">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="" className="text-white hover:underline">
                    News
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-white dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-white">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">
            © 2022{" "}
            <a href="" className="hover:underline">
              Evolov
            </a>
            . All Rights Reserved.
          </span>
          <Icons />
        </div>
      </footer>
    </>
  );
};

export default Footer;
