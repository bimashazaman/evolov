import React from "react";
import Layout from "../../../components/Layout";
import ProfileSidebar from "../../../components/ProfileSidebar/CompanyProfileSidebar";
import { Modal, Button } from "rsuite";
const Settings = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const [Deactivate, setDeactivate] = React.useState(false);
  const handleDeactivate = () => setDeactivate(true);

  function handleClose() {
    setOpen(false);
    setDeactivate(false);
  }
  // const handleClose = () => setOpen(false);
  return (
    <Layout>
      <div className="bg-[#F9FAFF]">
        <Modal open={open} onClose={handleClose}>
          <Modal.Body>
            <div className="font-semibold text-2xl">
              Are you sure you want to delete your account? This action cannot
              be undone.
            </div>

            <ul className="text-lg py-10">
              <li>
                You will lose access to all your ads, messages, and other
                information.
              </li>
              <li>
                You will be logged out of all devices and will need to log in
              </li>
              <li>
                Your account will be deleted permanently and cannot be recovered
                in the future.
              </li>
              <li>
                You will not be able to recover your account or any of the
                information you have added.
              </li>
              <li>
                You will not be able to use the same email address to create a
                new account.
              </li>
              <li>
                You will not be able to use the same phone number to create a
                new account.
              </li>

              <li>
                You will not be able to use the same username to create a new
                account.
              </li>

              <li>
                You will lose access to all your ads, messages, and other
                information.
              </li>
              <li>
                You will be logged out of all devices and will need to log in
              </li>
            </ul>

            {/* <Placeholder.Paragraph rows={20} /> */}
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={handleClose}
              appearance="primary"
              className="bg-red-600"
            >
              Delete Account
            </Button>
            <Button onClick={handleClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal open={Deactivate} onClose={handleClose}>
          <Modal.Body>
            <div className="font-semibold text-2xl">
              Deactivate your account temporarily
            </div>

            <ul className="text-lg py-10">
              <li>
                Deactivate your account temporarily and reactivate it later.
              </li>
              <li>
                You will get a notification when your account is reactivated.
              </li>
              <li>You will get your account back after 30 days.</li>
              <li>
                Deactivate your account temporarily and reactivate it later.
              </li>
              <li>
                You will get a notification when your account is reactivated.
              </li>
              <li>You will get your account back after 30 days.</li>
              <li>
                Deactivate your account temporarily and reactivate it later.
              </li>
              <li>
                You will get a notification when your account is reactivated.
              </li>
              <li>You will get your account back after 30 days.</li>
              <li>
                Deactivate your account temporarily and reactivate it later.
              </li>
              <li>
                You will get a notification when your account is reactivated.
              </li>
              <li>You will get your account back after 30 days.</li>
              <li>
                Deactivate your account temporarily and reactivate it later.
              </li>
              <li>
                You will get a notification when your account is reactivated.
              </li>
              <li>You will get your account back after 30 days.</li>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={handleClose}
              appearance="primary"
              className="bg-red-600"
            >
              Deactivate Account
            </Button>
            <Button onClick={handleClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
        <br />
        <br />
        <div className="flex">
          <ProfileSidebar />

          <div className="w-full lg:px-[5%] pl-16 ">
            <div className="bg-white shadow-md rounded-lg p-4 mb-10">
              <div className="flex justify-between">
                <div className="text-2xl font-semibold">Account Settings</div>
              </div>
              <div className="text-sm font-semibold text-gray-400">
                Manage your account
              </div>
              <br />
              <div className="flex justify-between">
                <div className="text-lg font-semibold">Delete your account</div>
                <div
                  className="text-sm font-[500] text-gray-100 bg-red-700 px-7 py-1 rounded-full"
                  onClick={handleOpen}
                >
                  Delete
                </div>
              </div>
              <div className="text-sm font-semibold text-gray-400">
                Your account will be deleted permanently
              </div>
              <br />

              <div className="flex justify-between">
                <div className="text-lg font-semibold">Deactivate Account</div>
                <div
                  className="text-sm font-[500] text-gray-100 bg-blue-900 px-4 py-1 rounded-full"
                  onClick={handleDeactivate}
                >
                  Deactivate
                </div>
              </div>
              <div className="text-sm font-semibold text-gray-400">
                Your account will be temporarily removed.
              </div>
              <br />
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 mb-10">
              <div className="flex justify-between">
                <div className="text-2xl font-semibold">Verify account</div>
              </div>
              <div className="text-sm font-semibold text-gray-400">
                Verify your account to get more features
              </div>
              <br />
              <div className="flex justify-between">
                <div className="text-lg font-semibold">
                  Passport verification
                </div>
                <div className="text-sm font-[500] text-gray-600 border-gray-600  px-7 py-1 rounded-full">
                  Not verified
                </div>
              </div>
              <div className="text-sm font-semibold text-gray-400">
                Your account will be verified
              </div>
              <br />

              <div className="flex justify-between">
                <div className="text-lg font-semibold">
                  Driviving License verification
                </div>
                <div className="text-sm font-[500] text-gray-600 border-gray-600  px-7 py-1 rounded-full">
                  Not verified
                </div>
              </div>
              <div className="text-sm font-semibold text-gray-400">
                Your account will be verified
              </div>
              <br />
            </div>

        

            <div className="bg-white shadow-md rounded-lg p-4 mb-10">
              <div className="flex justify-between">
                <div className="text-2xl font-semibold">Change Credentials</div>
              </div>
              <div className="text-sm font-semibold text-gray-400">
                Change your credentials
              </div>
              <br />
              <div className="flex justify-between">
                <div className="text-lg font-semibold">Change Password</div>
                <div className="text-sm font-[500] text-gray-600 border border-gray-600  px-7 py-1 rounded-full">
                  Change
                </div>
              </div>
              <div className="text-sm font-semibold text-gray-400">
                Your password will be changed
              </div>
              <br />

              <div className="flex justify-between">
                <div className="text-lg font-semibold">Change Email</div>
                <div className="text-sm font-[500] text-gray-600 border border-gray-600  px-7 py-1 rounded-full">
                  Change
                </div>
              </div>
              <div className="text-sm font-semibold text-gray-400">
                Your email will be changed
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
