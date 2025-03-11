import React, { useContext, useState } from "react";
import * as Icon from "react-feather";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const { isAuthenticated, userlogout } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <div className="w-full flex relative flex-col bg-gray-200 h-40">
      <div className="w-full  h-40 bg-gray-900 text-white flex flex-col ">
        <div className="flex flex-row items-center justify-between py-4">
          <ul className="flex flex-row justify-between items-center w-full px-4 font-semibold">
            <li className="font-bold text-xl">
              <Link to="/">
                <img
                  className="h-9 w-12 object-contain rounded-full"
                  src="../images/logo.jpeg"
                  alt=""
                />
              </Link>
            </li>
            <li>
              <a href="">Find Job</a>
            </li>
            <li>
              <a href="">Companies</a>
            </li>
            <li>
              <a href="">Reviews</a>
            </li>
            <li>
              <Link to="/admin">Services</Link>
            </li>
          </ul>
          <ul className="flex flex-row items-center space-x-12 justify-end w-full px-4 font-semibold">
            <li>
              <a href="">
                {isAuthenticated ? (
                  <div className="flex flex-row items-center space-x-4">
                    <div className="flex items-center justify-center w-full">
                      <div
                        className="flex  items-center justify-center w-full h-10 px-4 py-1 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-gray-50   "
                      >
                        <div className="flex flex-row items-center justify-center">
                          <svg
                            className="w-6 h-6 mr-2 text-gray-500 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className=" text-xs text-gray-500 ">
                            <span className="font-semibold">
                              {" "}
                              upload resume by <br /> clicking your prefered job
                            </span>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={userlogout}
                      className="bg-blue-400 px-4 py-1 rounded-full text-white"
                    >
                      SignOut
                    </button>
                  </div>
                ) : (
                  <Link to="/login">
                    {" "}
                    <button className="bg-blue-400 px-4 py-1 rounded-full text-white">
                      Login
                    </button>
                  </Link>
                )}
              </a>
            </li>
            <li>
              <a href="">
                <Icon.Bell size={24} color="white" />
              </a>
            </li>
            <li>
              <Link to="/prof">
                <img
                  className="h-12 w-12 object-cover  rounded-full"
                  src="../images/me.jpg"
                  alt=""
                />{" "}
              </Link>
            </li>
          </ul>
        </div>
        <h1 className="font-bold text-3xl text-center ">
          Find your dream in tech
        </h1>
       
      </div>
    </div>
  );
};

export default Navbar;
