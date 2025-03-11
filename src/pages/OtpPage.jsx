import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const OtpPage = () => {
    const [otp, setOtp] = useState(""); 
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const useremail = location.state;
    const navigate = useNavigate()
  
    const handleVerification = async (e) => {
      e.preventDefault(); 
      setLoading(true);
      
      try {
        const response = await axios.post(
          "http://localhost:8000/api/user/verify",
          {
            email: useremail,
            otp,
          }
        );
        const data = response.data;
        toast.success("Verification Successful");
        setLoading(false);
        navigate("/login")
      } catch (error) {
  
        //  error handling
        if (error.status == 400) {
          toast.error("Incorrect OTP");
        } else if (error.status == 401) {
          toast.error("Verification link expired");
        } else if (error.status == 404) {
          toast.error("User not found");
        } else {
          toast.error("Something went wrong");
        }
      } 
        setLoading(false);
      
    };
  
    return (
      <div className="w-full h-screen flex justify-center items-center flex-col bg-gray-200">
        {loading ? (
          <div className="flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-ping [animation-delay:-.7s]"></div>
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.9s]"></div>
          </div>
        ) : (
          <>
            <form
              onSubmit={handleVerification}
              className="flex flex-col items-center justify-center space-y-4 w-80 py-4 rounded-md px-4 bg-white"
              method="post"
              action=""
            >
             
              <h1 className="font-semibold text-black text-xl">
                Enter Verification Code
              </h1>
              <p className="text-center">
                We've sent a code to {""}
                <span className="font-bold">{useremail}</span>
              </p>
              <input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter code"
                className="w-full py-2 px-4 border border-gray-400 rounded-md text-black"
                type="number"
                disabled={loading} // Disable input when loading
              />
              
              <button
                type="submit"
                className={`py-2 px-4 w-full rounded-md text-white ${
                  loading ? "bg-gray-400" : "bg-blue-600"
                }`}
                disabled={loading} // Disable button when loading
              >
                {loading ? "Verifying..." : "Verify"}
              </button>
            </form>
          </>
        )}
      </div>
    );
  };

export default OtpPage
