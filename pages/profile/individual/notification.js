import React from "react";
import Layout from "../../../components/Layout";
import ProfileSidebar from "../../../components/ProfileSidebar/ProfileSidebar";

import { Toggle } from "rsuite";
import CheckIcon from "@rsuite/icons/Check";
import CloseIcon from "@rsuite/icons/Close";
const Notification = () => {
  // const handleClose = () => setOpen(false);
  return (
    <Layout>
      <div className="bg-[#F9FAFF]">
        <div className="flex">
          <ProfileSidebar />

          <div className="w-full lg:px-[5%] pl-16 mt-10">
            <div className="p-4 mb-10 bg-white rounded-lg shadow-md">
              <div className="flex justify-between">
                <div className="text-2xl font-semibold">
                  Notification For Direct Message
                </div>
              </div>
              <div className="text-sm font-semibold text-gray-400">
                Get notified when someone send you a message
              </div>
              <br />
              <div className="flex justify-between">
                <div className="text-lg font-semibold">SMS Notification</div>
                <Toggle
                  size="lg"
                  checkedChildren="On"
                  unCheckedChildren="Off"
                />
              </div>
              <div className="text-sm font-semibold text-gray-400">
                Get notified when someone send you a message
              </div>
              <br />

              <div className="flex justify-between">
                <div className="text-lg font-semibold">Email Notification</div>

                <Toggle
                  size="lg"
                  checkedChildren="On"
                  unCheckedChildren="Off"
                />
              </div>
              <div className="text-sm font-semibold text-gray-400">
                You will get a email when someone send you a message
              </div>
              <br />
            </div>

            <div className="p-4 mb-10 bg-white rounded-lg shadow-md">
              <div className="flex justify-between">
                <div className="text-2xl font-semibold">
                  Notification to find Listed items for sale
                </div>
              </div>

              <br />
              <div className="flex justify-between">
                <div className="text-lg font-semibold">SMS Notification</div>
                <Toggle
                  size="lg"
                  checkedChildren="On"
                  unCheckedChildren="Off"
                />
              </div>
              <div className="text-sm font-semibold text-gray-400">
                Get notified when someone send you a message
              </div>
              <br />

              <div className="flex justify-between">
                <div className="text-lg font-semibold">Email Notification</div>

                <Toggle
                  size="lg"
                  checkedChildren="On"
                  unCheckedChildren="Off"
                />
              </div>
              <div className="text-sm font-semibold text-gray-400">
                You will get a email when someone send you a message
              </div>
              <br />
            </div>



            <div className="p-4 mb-10 bg-white rounded-lg shadow-md">
              <div className="flex justify-between">
                <div className="text-2xl font-semibold">
                  Notification to find Listed items for sale based on location
                </div>
              </div>

              <br />
              <div className="flex justify-between">
                <div className="text-lg font-semibold">SMS Notification</div>
                <Toggle
                  size="lg"
                  checkedChildren="On"
                  unCheckedChildren="Off"
                />
              </div>
              <div className="text-sm font-semibold text-gray-400">
                Get notified when someone send you a message
              </div>
              <br />

              <div className="flex justify-between">
                <div className="text-lg font-semibold">Email Notification</div>

                <Toggle
                  size="lg"
                  checkedChildren="On"
                  unCheckedChildren="Off"
                />
              </div>
              <div className="text-sm font-semibold text-gray-400">
                You will get a email when someone send you a message
              </div>
              <br />
            </div>


            <div className="p-4 mb-10 bg-white rounded-lg shadow-md">
              <div className="flex justify-between">
                <div className="text-2xl font-semibold">
                  Notification to find Listed items for sale based on words
                </div>
              </div>

              <br />
              <div className="flex justify-between">
                <div className="text-lg font-semibold">SMS Notification</div>
                <Toggle
                  size="lg"
                  checkedChildren="On"
                  unCheckedChildren="Off"
                />
              </div>
              <div className="text-sm font-semibold text-gray-400">
                Get notified when someone send you a message
              </div>
              <br />

              <div className="flex justify-between">
                <div className="text-lg font-semibold">Email Notification</div>

                <Toggle
                  size="lg"
                  checkedChildren="On"
                  unCheckedChildren="Off"
                />
              </div>
              <div className="text-sm font-semibold text-gray-400">
                You will get a email when someone send you a message
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Notification;
