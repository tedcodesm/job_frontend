import axios from "axios";
import React, { useEffect, useState } from "react";
import * as Icon from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Wera = () => {
  const [job, setJob] = useState([]);
  const navigate = useNavigate();

  const getJob = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/job/getjob");
      const data = response.data;
      setJob(data);
    } catch (error) {
      console.log("Error fetching job data", error);
    }
  };

  const GetJobname = async (name) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/job/${encodeURIComponent(name)}`
      );
      const data = response.data;
      navigate("/update", { state: name });
    } catch (error) {
      console.log("Error fetching job data", error);
    }
  };

  const deleteJob = async (name) => {
    try {
      await axios.delete(
        `http://localhost:8000/api/job/delete/${encodeURIComponent(name)}`
      );
      setJob(job.filter((j) => j.name !== name));
      toast.success("job delleted successfully");
      console.log("job delleted successfully");
    } catch (error) {
      console.log("Error deleting job", error);
    }
  };

  useEffect(() => {
    getJob();
  }, []);

  return (
    <div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="flex items-center justify-between px-4 flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white ">
          <label for="table-search" class="sr-only">
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search for users"
            />
          </div>
          <Link to="/add">
            {" "}
            <button className="items-center py-1 px-4 bg-blue-900 text-white rounded-lg font-semibold">
              Add Job{" "}
            </button>
          </Link>{" "}
        </div>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2 "
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                Logo
              </th>
              <th scope="col" class="px-6 py-3">
                Position
              </th>
              <th scope="col" class="px-6 py-3">
                Description
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
              <th scope="col" class="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {job.map((jobo) => {
              return (
                <tr class="bg-white border-b  border-gray-200 hover:bg-gray-50 ">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 "
                      />
                      <label for="checkbox-table-search-1" class="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                  >
                    <img
                      class="w-10 h-10 rounded-full"
                      src={`http://localhost:8000/${jobo.logo}`}
                      alt="Jese image"
                    />
                  </th>
                  <td class="px-6 py-4">{jobo.name}</td>
                  <td class="px-6 py-4">
                    <div class="flex items-center">{jobo.description}</div>
                  </td>
                  <td class="px-6 py-4">
                    <Link
                      to=""
                      class="font-medium text-blue-600  hover:underline"
                    >
                      <Icon.PenTool
                        size={24}
                        color="blue"
                        className="cursor-pointer"
                        onClick={() =>
                          navigate("/update", { state: { name: jobo.name } })
                        }
                      />
                    </Link>
                  </td>
                  <td class="px-6 py-4">
                    {/* <a
                onClick={() => deleteJob(jobo.name)}
                href="#" class="font-medium text-blue-600  hover:underline">
                  <Icon.Trash2 size={24} color="red" /></a> */}

                    <label
                      htmlFor={`modal-${jobo.name}`}
                      className="bg-white cursor-pointer"
                    >
                      <Icon.Trash2 size={24} color="red" />
                    </label>

                    {/* Modal */}
                    <input
                      type="checkbox"
                      id={`modal-${jobo.name}`}
                      className="modal-toggle hidden"
                    />
                    <div className="modal">
                      <div className="modal-box bg-blue-200">
                        <h3 className="text-lg font-bold text-black">Hello!</h3>
                        <p className="py-4 font-semibold text-lg">
                          Do you really want to delete this?
                        </p>
                        <div className="modal-action w-full gap-10">
                          {/* Cancel button */}
                          <label htmlFor={`modal-${jobo.name}`} className="btn">
                            Cancel
                          </label>

                          {/* Delete button */}
                          <button
                            onClick={() => deleteJob(jobo.name)}
                            className="btn bg-red-500 text-white"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wera;
