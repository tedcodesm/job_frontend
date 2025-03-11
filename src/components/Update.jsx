import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const  Update = () => {
  const navigate = useNavigate();
  const [job, setJob] = useState();
  const location = useLocation();
  const jobname = location.state?.name;


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


  

  
  return (
    <div>
      <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 class="mb-4 text-xl font-bold text-gray-900">Update Job</h2>
        <form action=""  method="post">
          <div class="grid  gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                for="item-weight"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Logo
              </label>
              <input
                type="file"
                accept="image/*"
                name="item-weight"
                id="item-weight"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="12"
                required=""
              />
            </div>
            <div class="">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
              </label>
              <input
              
                type="text"
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                placeholder="Type job name"
                required=""
              />
            </div>
            <div class="w-full   md:mb-0">
              <label
                class="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
              </label>
              <div class="relative ">
                <select
               

                  class="block appearance-none w-full border-gray-300 border bg-gray-50 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option></option>
                  <option value="Part time">Part time</option>
                  <option value="Full time">Full time</option>
                  <option value="Internship">Internship</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Contract">Contract</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full    md:mb-0">
              <label
                class="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                State
              </label>
              <div class="relative ">
                <select
                  class="block appearance-none w-full border-gray-300 border bg-gray-50 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option value="New Mexico">New Mexico</option>
                  <option value="Missouri">Missouri</option>
                  <option value="Texas">Texas</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full">
              <label
                for="price"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5  "
                placeholder="$2999"
                required=""
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="description"
                class="block mb-2 text-sm font-medium text-gray-900dark:text-white"
              >
                Description
              </label>
              <textarea
                id="description"
                rows="8"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-blue-500 "
                placeholder="Your description here"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-gray-900 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-primary-800"
          >
            Update job
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
