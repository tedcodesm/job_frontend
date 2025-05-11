import axios from "axios";
import React, { useEffect, useState } from "react";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";
import { formatMessageDateTime } from "../lib/utils";

const jobTypes = ["All", "Full time", "Part time", "Freelance", "Internship"];

const Center = () => {
  const [job, setJob] = useState([]);
  const [selectedJobType, setSelectedJobType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  

  const GetJobname = async (name) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/job/${encodeURIComponent(name)}`
      );
      console.log(response.data); // Handle job data here
    } catch (error) {
      console.log("Error fetching job data", error);
    }
  };

  const getJob = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/job/getjob");
      setJob(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJob();
  }, []);

  // Filtering jobs based on job type and search query
  const filteredJobs = job.filter((jobo) => {
    const matchesJobType = selectedJobType === "All" || jobo.jobtype === selectedJobType;
    const matchesSearch = jobo.name?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesJobType && matchesSearch;
  });

  return (
    <div className="flex flex-col space-y-4 w-full relative pb-4">
      {/* Search Bar */}
      <div className="flex flex-wrap bg-gray-900 px-8  h-14 relative w-full justify-center items-center">
        <form onSubmit={(e) => e.preventDefault()} className="max-w-xl w-full absolute top-5 mx-auto">
          <div className="flex h-14">
            <div className="relative w-full">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block p-2.5 h-14 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search by Job Tittle..."
              />
              <button
                type="submit"
                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800"
              >
                <Icon.Search size={18} />
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Job Type Buttons */}
      <div className="flex flex-wrap  pt-4 justify-center gap-3 px-4">
        {jobTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedJobType(type)}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all
              ${selectedJobType === type ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}
            `}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Job Listing */}
      <div className="flex flex-row items-center justify-between w-full py-4 px-4">
        <h1 className="text-neutral-400">{filteredJobs.length} result(s) found</h1>
      </div>
      {filteredJobs.map((jobo) => (
        <div key={jobo.id} className="px-4">
          <div className="w-full bg-white cursor-pointer hover:bg-blue-100 py-4 px-4 rounded-md">
            <Link 
              to={`/view/${encodeURIComponent(jobo.name)}`} 
              onClick={() => GetJobname(jobo.name)} 
              className="flex flex-row space-x-4"
            >
              <div>
                <img className="h-20 w-20 rounded-full" src={`http://localhost:8000/${jobo.logo}`} alt="" />
              </div>
              <div className="flex flex-col w-full space-y-2">
                <h1 className="text-neutral-900 text-xl font-semibold">{jobo.name}</h1>
                <p className="text-neutral-500 font-semibold">{jobo.joblocation}</p>
                <div className="flex flex w-full items-center py-4 pr-4 justify-between">
                  <div className="flex flex-col font-semibold">
                    <p className="text-neutral-500">Description</p>
                    <p className="text-neutral-900 max-w-[150px] truncate">{jobo.description}</p>
                  </div>
                  <div className="flex flex-col font-semibold">
                    <p className="text-neutral-500">Jobtype</p>
                    <p className="text-neutral-900">{jobo.jobtype}</p>
                  </div>
                  <div className="flex flex-col font-semibold">
                    <p className="text-neutral-500">Salary</p>
                    <p className="text-neutral-900">${jobo.salary}</p>
                  </div>
                </div>
              </div>
            </Link>
            <div className="flex flex-row justify-between items-center py-2">
              <h1 className="text-neutral-400">Posted : {formatMessageDateTime(jobo.createdAt)} </h1>
              <h1 className="text-neutral-400 space-x-2 flex flex-row items-center">
                <Icon.Bookmark size={24} color="gray" /> Save job{" "}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Center;
