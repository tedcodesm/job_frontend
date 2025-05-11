import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import * as Icon from "react-feather";
import Resume from "../components/Resume";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ViewPage = () => {
  const [job, setJob] = useState();
  const { name } = useParams();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [letter, setLetter] = useState(null);
  const [gender, setGender] = useState("");

  const handleFileChange = (e, fileType) => {
   if(fileType === 'letter'){
    setLetter(e.target.files[0]);
    console.log("Selected File:", e.target.files[0]);
   }
  };

  const handleapply = async (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !letter || !gender || !phone) {
      toast.error("All fields are required")
      return;
    } else {
      try {
        const response = await axios.post(
          `http://localhost:8000/api/job/addresume`,
          {
            firstname,
            lastname,
            phone,
            email,
            letter,
            gender,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Resume uploaded successfully:", response.data);
        setFirstname("");
        setLastname("");
        setPhone("");
        setEmail("");
        setLetter(null);
        setGender("");
        toast.success("Application submitted successfully!");
      } catch (error) {
        console.error("Error uploading resume:", error);
        toast.error("Error uploading resume");
      }
    }
  };

  const getJob = async (name) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/job/get/${encodeURIComponent(name)}`
      );
      const data = response.data;
      setJob(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (name) {
      getJob(name);
    }
  }, [name]);

  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-row items- lg:h-screen bg-gray-200 sm:px-16 px-4 md:py-16 gap-10 py-4 ">
        <form
          method="post"
          onSubmit={handleapply}
          enctype="multipart/form-data"
          action=""
          className="flex flex-col space-y-8 bg-white rounded-lg w-[70%]"
        >
          <div className="w-full items-center flex justify-center rounded-t-lg  bg-blue-400 h-12 text-white">
            <h1 className="font-semibold text-center text-lg">Fill in the details below </h1>
          </div>
          <div className="flex flex-col w-full space-y-4 py-4 lg:py-8 px-4">
            <div className="flex flex-row items-center gap-4 grid grid-cols-3">
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                id=""
                className="w-full h-10 border  border-blue-100 rounded-lg ps-4"
              >
                <option value="" className="text-gray-200">Select Gender</option>{" "}
                {/* Placeholder option */}
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <input
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                type="text"
                placeholder="First Name"
                className="w-full h-10 border  border-blue-100 rounded-lg ps-4"
              />
              <input
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                type="text"
                placeholder="Last Name"
                className="w-full h-10 border  border-blue-100 rounded-lg ps-4"
              />
            </div>
            <div className="flex flex-row items-center py-4 lg:py-8 gap-4 grid grid-cols-2 w-full">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Your Email"
                className="w-full h-10 border  border-blue-100 rounded-lg ps-4"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder="Enter Phone number"
                className="w-full h-10 border  border-blue-100 rounded-lg ps-4"
              />
            </div>
            <label
              htmlFor="dropzone-file"
              className="flex items-center justify-center w-full h-20 lg:h-40 px-4 py-1 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
            >
              <div className="flex flex-row space-x-4 items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <div className="flex flex-col start">
                  <p className="text-gray-900 text-xl font-bold">
                    <span className="font-semibold">Upload your resume</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    We'll match you with the best jobs. Right job, right away!
                  </p>
                </div>
              </div>
              <input
                onChange={(e) => handleFileChange(e, 'letter')}
                name="letter"
                id="dropzone-file"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
              />
            </label>
            <button
              type="submit"
              className="bg-gray-900 px-4 py-1 text-white font-semibold h-10 tracking-wider rounded-md"
            >
              Apply
            </button>
          </div>
        </form>
        <div className="flex flex-col bg-white rounded-lg w-[30%]">
          <div className="w-full items-center flex justify-center rounded-t-lg  bg-blue-400 h-12 text-white">
            <h1 className="font-semibold text-center text-lg">Job Summary</h1>
          </div>
          {job ? (
            <div className="flex flex-col space-y-3 max-w-[300px] font-semibold px-4 py-4">
              <div className="flex flex-row items-center">
                <Icon.BarChart2 size={24} className="text-red-400 mr-2" />
                {job.description}
              </div>
              <div className="flex flex-row items-center">
                <Icon.Briefcase size={24} className="text-red-400 mr-2" />
                {job.name}
              </div>
              <div className="flex flex-row items-center">
                <Icon.MapPin
                  size={24}
                  className="text-red-400 font-bold mr-2"
                />
                {job.joblocation}
              </div>

              <div className="flex flex-row items-center">
                <Icon.Calendar size={24} className="text-red-400 mr-2" />
                Bachelor
              </div>
              <div className="flex flex-row items-center">
                <Icon.Bookmark size={24} className="text-red-400 mr-2" />
                {job.jobtype}
              </div>
            </div>
          ) : (
            <div className="w-full py-16 items-center justify-center">
              <div class="text-center">
                <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
                <h2 class="text-zinc-900  mt-4">Loading job...</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
