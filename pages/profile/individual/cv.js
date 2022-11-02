import React from "react";
import Layout from "../../../components/Layout";
import { HiOutlinePlusCircle, HiOutlineUpload, HiPencil } from "react-icons/hi";
import { Form, Button, Modal } from "rsuite";
import ProfileSidebar from "../../../components/ProfileSidebar/ProfileSidebar";
import Image from "next/image";

const IndividualInfo = () => {
  const [open, setOpen] = React.useState(false);
  const [Experience, setExperience] = React.useState(false);
  const [Education, setEducation] = React.useState(false);
  const [resume, setResume] = React.useState(false);
  // const [formValue, setFormValue] = React.useState({
  //   firstName: "",
  //   lastName: "",
  //   country: "",
  //   city: "",
  //   address: "",
  //   phone: "",
  //   postalCode: "",
  //   socialMedia: "",
  //   email: "",
  //   password: "",
  //   textarea: "",
  // });

  // const handleChange = (value) => {
  //   setFormValue(value);
  // };

  const handleClose = () => {
    setOpen(false);
    setExperience(false);
    setEducation(false);
    setResume(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const myLoader = ({ src, width, quality }) => {
    return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <Layout>
      <div className="bg-[#F9FAFF]">
        <br />
        <br />
        <div className="flex">
          <ProfileSidebar />
          <div className="flex flex-col w-full">
            <div className="lg:px-[5%] pl-16 w-full">
              <div className="bg-[#F9FAFF]">
                <div className="pl-4 text-xl">Your Cocurriculam Vitae</div>
                <div className="pl-4 text-base font-semibold text-gray-500">
                  Your CV is 0% complete. Please complete your CV to get a
                  better chance of getting hired.
                </div>

                <br />

                <Modal open={open} onClose={handleClose} size="xs">
                  <Modal.Header>
                    <div className="text-2xl font-bold text-[#393486] my-2">
                      Personal Information{" "}
                    </div>
                  </Modal.Header>
                  <Modal.Body>
                    <Form fluid>
                      <Form.Group controlId="name-9">
                        <Form.ControlLabel>First Name</Form.ControlLabel>
                        <Form.Control name="firstName" />
                        <Form.HelpText>Required</Form.HelpText>
                      </Form.Group>

                      <Form.Group controlId="name-9">
                        <Form.ControlLabel>Last Name</Form.ControlLabel>
                        <Form.Control name="lastName" />
                        <Form.HelpText>Required</Form.HelpText>
                      </Form.Group>

                      <Form.Group controlId="name-9">
                        <Form.ControlLabel>Country</Form.ControlLabel>
                        <Form.Control name="country" />
                        <Form.HelpText>Required</Form.HelpText>
                      </Form.Group>

                      <Form.Group controlId="name-9">
                        <Form.ControlLabel>City</Form.ControlLabel>
                        <Form.Control name="" />
                        <Form.HelpText>Required</Form.HelpText>
                      </Form.Group>

                      <Form.Group controlId="name-9">
                        <Form.ControlLabel>Address</Form.ControlLabel>
                        <Form.Control name="" />
                        <Form.HelpText>Required</Form.HelpText>
                      </Form.Group>

                      <Form.Group controlId="name-9">
                        <Form.ControlLabel>Phone</Form.ControlLabel>
                        <Form.Control name="" />
                        <Form.HelpText>Required</Form.HelpText>
                      </Form.Group>

                      <Form.Group controlId="name-9">
                        <Form.ControlLabel>Postal Code</Form.ControlLabel>
                        <Form.Control name="" />
                        <Form.HelpText>Required</Form.HelpText>
                      </Form.Group>

                      <Form.Group controlId="name-9">
                        <Form.ControlLabel>Social Media</Form.ControlLabel>
                        <Form.Control name="" />
                        <Form.HelpText>Required</Form.HelpText>
                      </Form.Group>
                      <Form.Group controlId="email-9">
                        <Form.ControlLabel>Email</Form.ControlLabel>
                        <Form.Control name="email" type="email" />
                        <Form.HelpText>Required</Form.HelpText>
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      onClick={handleClose}
                      appearance="primary"
                      className="bg-[#221F60]"
                    >
                      Confirm
                    </Button>
                    <Button onClick={handleClose} appearance="subtle">
                      Cancel
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button
                  onClick={handleOpen}
                  className="w-full hover:bg-transparent"
                >
                  <div className=" flex justify-between py-3 text-base px-3 font-semibold border border-gray-300 shadow-sm w-full rounded-lg">
                    Personal Information <HiPencil className="ml-2 mt-1" />
                  </div>
                </Button>
              </div>

              <div className="bg-[#F9FAFF]">
                <Modal open={Experience} onClose={handleClose} size="xs">
                  <Modal.Header>
                    {/* <Modal.Title>New User</Modal.Title> */}

                    <div className="text-2xl font-bold text-[#393486] my-2">
                      Work Experience{" "}
                    </div>
                  </Modal.Header>
                  <Modal.Body>
                    <Form fluid>
                      <Form.Group controlId="name-9">
                        <Form.ControlLabel>Company Name</Form.ControlLabel>
                        <Form.Control name="" />
                        <Form.HelpText>Required</Form.HelpText>
                      </Form.Group>

                      <Form.Group controlId="name-9">
                        <Form.ControlLabel>Job Title</Form.ControlLabel>
                        <Form.Control name="" />
                        <Form.HelpText>Required</Form.HelpText>
                      </Form.Group>

                      <Form.Group controlId="name-9">
                        <Form.ControlLabel>Country</Form.ControlLabel>
                        <Form.Control name="" />
                        <Form.HelpText>Required</Form.HelpText>
                      </Form.Group>

                      <Form.Group controlId="name-9">
                        <Form.ControlLabel>Year</Form.ControlLabel>
                        <Form.Control name="" />
                        <Form.HelpText>Required</Form.HelpText>
                      </Form.Group>

                      <Form.Group controlId="name-9">
                        <Form.ControlLabel>Description</Form.ControlLabel>
                        <Form.Control name="" />
                        <Form.HelpText>Required</Form.HelpText>
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      onClick={handleClose}
                      appearance="primary"
                      className="bg-[#221F60]"
                    >
                      Confirm
                    </Button>
                    <Button onClick={handleClose} appearance="subtle">
                      Cancel
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button
                  onClick={setExperience}
                  className="w-full hover:bg-transparent"
                >
                  <div className=" flex justify-between py-3 text-base px-3 font-semibold border border-gray-300 shadow-sm w-full rounded-lg">
                    Work Experience{" "}
                    <HiOutlinePlusCircle className="ml-2 mt-1" />
                  </div>
                </Button>
              </div>

              <div className="bg-[#F9FAFF]">
                <Modal open={Education} onClose={handleClose} size="xs">
                  <Modal.Header>
                    {/* <Modal.Title>New User</Modal.Title> */}

                    <div className="text-2xl font-bold text-[#393486] my-2">
                      Education{" "}
                    </div>
                  </Modal.Header>
                  <Modal.Body>
                    <Form fluid>
                      <Form.Group controlId="name-9">
                        <Form.ControlLabel>
                          University/College Name
                        </Form.ControlLabel>
                        <Form.Control name="" />
                        <Form.HelpText>Required</Form.HelpText>
                      </Form.Group>

                      <Form.Group controlId="name-9">
                        <Form.ControlLabel>
                          Degree/Certificate Name
                        </Form.ControlLabel>
                        <Form.Control name="" />
                        <Form.HelpText>Required</Form.HelpText>
                      </Form.Group>

                      <Form.Group controlId="name-9">
                        <Form.ControlLabel>
                          Year of Completion
                        </Form.ControlLabel>
                        <Form.Control name="" />
                        <Form.HelpText>Required</Form.HelpText>
                      </Form.Group>

                      <Form.Group controlId="name-9">
                        <Form.ControlLabel>Description</Form.ControlLabel>
                        <Form.Control name="" />
                        <Form.HelpText>Required</Form.HelpText>
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      onClick={handleClose}
                      appearance="primary"
                      className="bg-[#221F60]"
                    >
                      Confirm
                    </Button>
                    <Button onClick={handleClose} appearance="subtle">
                      Cancel
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button
                  onClick={setEducation}
                  className="w-full hover:bg-transparent"
                >
                  <div className=" flex justify-between py-3 text-base px-3 font-semibold border border-gray-300 shadow-sm w-full rounded-lg">
                    Education <HiOutlinePlusCircle className="ml-2 mt-1" />
                  </div>
                </Button>
              </div>

              <div className="bg-[#F9FAFF]">
                <Modal open={resume} onClose={handleClose} size="xs">
                  <Modal.Header>
                    {/* <Modal.Title>New User</Modal.Title> */}

                    <div className="text-2xl font-bold text-[#393486] my-2">
                      Upload Files{" "}
                    </div>
                  </Modal.Header>
                  <Modal.Body>
                    <Form fluid>
                      <Form.Group controlId="name-9">
                        <Form.ControlLabel>Upload Your Image</Form.ControlLabel>
                        <Form.Control name="" type="file" />
                        <Form.HelpText>Required</Form.HelpText>
                      </Form.Group>
                      <Form.Group controlId="name-9">
                        <Form.ControlLabel>Upload Resume</Form.ControlLabel>
                        <Form.Control name="" type="file" />
                        <Form.HelpText>Required</Form.HelpText>
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      onClick={handleClose}
                      appearance="primary"
                      className="bg-[#221F60]"
                    >
                      Confirm
                    </Button>
                    <Button onClick={handleClose} appearance="subtle">
                      Cancel
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button
                  onClick={setResume}
                  className="w-full hover:bg-transparent"
                >
                  <div className=" flex justify-between py-3 text-base px-3 font-semibold border border-gray-300 shadow-sm w-full rounded-lg">
                    Upload Resume
                    <HiOutlineUpload className="ml-2 mt-1" />
                  </div>
                </Button>
              </div>

              <div className=" items-center justify-center text-center">
                <button>
                  <div className="bg-[#221F60] text-gray-300 mt-2 px-10 flex justify-between py-1 text-base border border-gray-300 shadow-md  w-full rounded-full cursor-pointer hover:bg-blue-900">
                    Save
                  </div>
                </button>
              </div>
            </div>

            <div className="text-center items-center justify-center mt-4 text-2xl text-gray-600">
              Your Cv template
            </div>
            <div className="lg:mx-[5%] lg:my-1 pl-16 border border-gray-300 shadow-lg h-auto">
              <div className="grid grid-cols-2 py-14 px-5 justify-between">
                <div>
                  <div>
                    <div className="text-3xl mb-1 font-bold text-[#393486]">
                      {/* {name} */}
                      Your Name
                    </div>
                    <div className="text-xl mb-3 font-semibold text-[#393486]">
                      Your Profession
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <div className=" text-base font-medium text-[#393486]">
                          {/* {email} */}
                          Your Email
                        </div>
                        <div className=" text-base font-medium text-[#393486]">
                          {/* {phone} */}
                          Your Phone
                        </div>
                      </div>

                      <div className="">
                        <div className=" text-base font-medium text-[#393486]">
                          {/* {city} */}
                          Your City
                        </div>
                        <div className=" text-base font-medium text-[#393486]">
                          {/* {country} */}
                          Your Country
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="h-[150px] w-[150px] relative lg:left-64 left:10 items-end justify-end ">
                    <Image
                      loader={myLoader}
                      src="photos/614810/pexels-photo-614810.jpeg"
                      alt="Picture of the author"
                      width={150}
                      height={150}
                      layout="responsive"
                      className="rounded-full h-[150px] w-[150px] opacity-4  -mt-36 object-cover items-end justify-end "
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 text-2xl mb-1 font-bold text-[#393486]">
                Professional Summary
              </div>
              <div>
                <div className="text-sm mb-2 font-medium text-[#393486]">
                  {/* {summary} */}
                  Your Summary goes here Your Summary goes here Your Summary
                  goes Your Summary goes here Your Summary goes here Your
                  Summary goes Your Summary goes here Your Summary goes here
                  Your Summary goes Your Summary goes here Your Summary goes
                  here Your Summary goes Your Summary goes here Your Summary
                  goes here Your Summary goes
                </div>
              </div>
              <hr className="border-[#221F60] border-opacity-10" />
              <div className="mt-4 text-2xl mb-3 font-bold text-[#393486]">
                Work Experience
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex">
                  <div className="text-sm mb-2 font-semibold text-[#393486]">
                    2011-2013
                  </div>

                  <div className="ml-[5%]">
                    <div className="text-xl mb-1 font-semibold text-[#393486]">
                      Your Position
                    </div>
                    <div className="font-semibold mb-2 text-[#393486]">
                      Your Company
                    </div>
                    <div className="text-xs mb-2 font-semibold text-[#393486]">
                      {/* {description} */}
                      • Created a new product line for the company <br />•
                      Developed a new marketing strategy for the company <br />
                      • Increased sales by 20% in the first year <br />
                      • Increased sales by 20% in the first year <br />
                      • Increased sales by 20% in the first year <br />
                      • Increased sales by 20% in the first year <br />
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <div className="text-sm mb-2 font-semibold text-[#393486]">
                    2011-2013
                  </div>

                  <div className="ml-[5%]">
                    <div className="text-xl mb-1 font-semibold text-[#393486]">
                      Your Position
                    </div>
                    <div className="font-semibold mb-2 text-[#393486]">
                      Your Company
                    </div>
                    <div className="text-xs mb-2 font-semibold text-[#393486]">
                      {/* {description} */}
                      • Created a new product line for the company <br />
                      • Developed a new marketing strategy for the company{" "}
                      <br />
                      • Increased sales by 20% in the first year <br />
                      • Increased sales by 20% in the first year <br />
                      • Increased sales by 20% in the first year <br />
                      • Increased sales by 20% in the first year <br />
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <div className="text-sm mb-2 font-semibold text-[#393486]">
                    2011-2013
                  </div>

                  <div className="ml-[5%]">
                    <div className="text-xl mb-1 font-semibold text-[#393486]">
                      Your Position
                    </div>
                    <div className="font-semibold mb-2 text-[#393486]">
                      Your Company
                    </div>
                    <div className="text-xs mb-2 font-semibold text-[#393486]">
                      {/* {description} */}
                      • Created a new product line for the company <br />
                      • Developed a new marketing strategy for the company{" "}
                      <br />
                      • Increased sales by 20% in the first year <br />
                      • Increased sales by 20% in the first year <br />
                      • Increased sales by 20% in the first year <br />
                      • Increased sales by 20% in the first year <br />
                    </div>
                  </div>
                </div>
              </div>

              <hr/>
              <div className="mt-4 text-2xl mb-3 font-bold text-[#393486]">
                Education
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex">
                  <div className="text-sm mb-2 font-semibold text-[#393486]">
                    2011-2013
                  </div>

                  <div className="ml-[5%]">
                    <div className="text-xl mb-1 font-semibold text-[#393486]">
                      Your Degree
                    </div>
                    <div className="font-semibold mb-2 text-[#393486]">
                      Your University
                    </div>
                    <div className="text-xs mb-2 font-semibold text-[#393486]">
                      {/* {description} */}
                      • Created a new product line for the company <br />•
                      Developed a new marketing strategy for the company <br />
                      • Increased sales by 20% in the first year <br />
                      • Increased sales by 20% in the first year <br />
                      • Increased sales by 20% in the first year <br />
                      • Increased sales by 20% in the first year <br />
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <div className="text-sm mb-2 font-semibold text-[#393486]">
                    2011-2013
                  </div>

                  <div className="ml-[5%]">
                    <div className="text-xl mb-1 font-semibold text-[#393486]">
                      Your Degree
                    </div>
                    <div className="font-semibold mb-2 text-[#393486]">
                      Your University
                    </div>
                    <div className="text-xs mb-2 font-semibold text-[#393486]">
                      {/* {description} */}
                      • Created a new product line for the company <br />
                      • Developed a new marketing strategy for the company{" "}
                      <br />
                      • Increased sales by 20% in the first year <br />
                      • Increased sales by 20% in the first year <br />
                      • Increased sales by 20% in the first year <br />
                      • Increased sales by 20% in the first year <br />
                    </div>
                  </div>
                </div>

                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndividualInfo;
