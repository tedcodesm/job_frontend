import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import * as Icon from "react-feather";

const ProfilePage = () => {
  const { userdata, getUserdata } = useContext(AuthContext);
  return (
    <div className="w-full h-screen flex items-center bg-blue-400 justify-center ">
      <div className="w-[40%]  bg-white flex flex-col space-y-5  justify-center rounded-lg items- px-4 py-4">
        <h1 className="text-2xl text-black font-bold text-center">Profile</h1>
        <p className="font-semibold text-center text-black text-lg">
          Your profile info
        </p>
        <div className="flex flex-col relative space-y-8 w-full items-center">
          <img className=" rounded-full h-40 w-40 border-2" src="/images/user.png" alt="" />
          <label htmlFor="upload" className="cursor-pointer absolute bottom-0 right-40">
            <input id="upload" className="hidden" type="file" />
            <button
              type="button"
              className="bg-blue-300 py-2 px-2 rounded-full text-white"
            >
              <Icon.Camera size={20} />
            </button>
          </label>
        </div>
        <p className="text-neutral-500 textsm text-center">Choose a photo to upload</p>


        <div className="flex items-center flex-col space-y-4">
          <div className="items-start">
            <label htmlFor="" className="ps-5 font-semibold">
              Name:
            </label>
            <p className="border py-2 px-4 rounded-full w-80">
              {userdata?.username}
            </p>
          </div>
          <div className="items-start">
            <label htmlFor="" className="ps-5 font-semibold">
              Email:
            </label>
            <p className="border py-2 px-4 rounded-full w-80">
              {userdata?.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
