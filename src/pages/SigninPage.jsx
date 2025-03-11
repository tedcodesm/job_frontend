import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SigninPage = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  
    // handle registration
    const createAccount = async (e) => {
      e.preventDefault();
      setLoading(true)
      try {
        if (!username || !password || !phone || !email) {
          toast.error("All fields are required");
          setLoading(false)
          return;
        } else {
          const response = await axios.post(
            "http://localhost:8000/api/user/createuser",
            {
              username,
              email,
              phone,
              password,
            }
          );
          const data = response.data;
          toast.success("User registered successfully");
          setLoading(false)
          setEmail("")
          setUsername("")
          setPhone("")
          setPassword("")
          navigate('/otp',{state:email})
        }
      } catch (error) {
        console.log(error);
        if (error.status == 400) {
          toast.error("User already exists");
          setLoading(false)
        }
      }
    };
  return (
    <div className='w-full h-screen items-center justify-center flex'>
<div
  class="max-w-md w-full bg-gradient-to-r from-blue-800 to-purple-600 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8"
>
  <h2
    class="text-center text-4xl font-extrabold text-white"
  >
    Welcome
  </h2>
  <p  class="text-center text-gray-200">
    Sign in to your account
  </p>
  <form method="POST" onSubmit={createAccount} action="#" class="space-y-6">
    <div class="relative">
      <input
       value={username}
       onChange={(e) => setUsername(e.target.value)}
        placeholder="Your Username"
        class="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
        required=""
        id="userename"
        name="username"
        type="text"
      />
      <label
        class="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
        for="email"
        > Username</label
      >
    </div>
    <div class="relative">
      <input
       value={email}
       onChange={(e) => setEmail(e.target.value)}
        placeholder="you email"
        class="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
        required=""
        id="email"
        name="email"
        type="email"
      />
      <label
        class="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
        for="email"
        >Email address</label
      >
    </div>
    <div class="relative">
      <input
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
        placeholder="Your phone"
        class="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
        required=""
        id="tel"
        name="tel"
        type="tel"
      />
      <label
        class="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
        for="tel"
        >Your phone</label
      >
    </div>
    
    <div class="relative">
      <input
      value={password}
      onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        class="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
        required=""
        id="password"
        name="password"
        type="password"
      />
      <label
        class="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
        for="password"
        >Password</label
      >
    </div>
    
    <button
      class="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
      type="submit"
    >
      Sign In
    </button>
  </form>
  <div class="text-center text-gray-300">
    Already have an account?
    <Link class="text-purple-300 hover:underline" to="/login">Login</Link>
  </div>
</div>

    </div>
  )
}

export default SigninPage
