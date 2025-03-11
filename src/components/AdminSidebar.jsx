import React from "react";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="w-full flex flex-col sm:space-y-10 h-full sm:py-8 items-start px-4 sm:px-12  bg-blue-900">
      <Link className="flex flex-row items-center   space-x-4 justify-start" to="/admin">
        <Icon.File size={24} color="white" />
        <h1 className="text-white font-semibold text-lg">Dashboard</h1>
      </Link>
      <Link className="flex flex-row items-center space-x-4 justify-start" to="/job">
        <Icon.Box size={24} color="white" />
        <h1 className="text-white font-semibold text-lg">Jobs</h1>
      </Link>
      <a className="flex flex-row items-center space-x-4 justify-start" href="">
        <Icon.ShoppingCart size={24} color="white" />
        <h1 className="text-white font-semibold text-lg">forms</h1>
      </a>
      <Link className="flex flex-row items-center space-x-4 justify-start" to="/">
        <Icon.User size={24} color="white" />
        <h1 className="text-white font-semibold text-lg">Users</h1>
      </Link>
      <a className="flex flex-row items-center space-x-4 justify-start" href="">
        <Icon.UserCheck size={24} color="white" />
        <h1 className="text-white font-semibold text-lg">Customers</h1>
      </a>
      
      <a className="flex flex-row items-center space-x-4 justify-start" href="">
        <Icon.BarChart size={24} color="white" />
        <h1 className="text-white font-semibold text-lg">Statistics</h1>
      </a>
      <a className="flex flex-row items-center space-x-4 justify-start" href="">
        <Icon.Settings size={24} color="white" />
        <h1 className="text-white font-semibold text-lg">Settings</h1>
      </a>
      <a className="flex flex-row items-center space-x-4 justify-start" href="">
        <Icon.LogOut size={24} color="white" />
        <h1 className="text-white font-semibold text-lg  px-4 rounded-full py-1 bg-blue-500">Logout</h1>
      </a>
  
    </div>
  );
};

export default AdminSidebar;
