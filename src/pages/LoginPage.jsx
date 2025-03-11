import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
const [password, setPassword]= useState("1234");
const [email,setEmail]= useState("kaahenjoroge@gmail.com");
const {userlogin} = useContext(AuthContext);
const navigate = useNavigate()

const handlelogin = async(e)=>{
    e.preventDefault();
    if(email===""||password===""){
        toast.error("please all fields are required")
        alert("Please all fields are required")
    }try {
        const success = userlogin(email,password)
        if(success){
            toast.success("Login Successful")
            navigate("/")

        }else{
            toast.error("Invalid credentials")
            alert("Invalid credentials")
            window.location.href = "/login";
        }
    } catch (error) {
        console.log("Error logging in", error)  
        alert("Error logging in")
        window.location.href = "/login";
        // toast.error("Error logging in")
        // window.location.href = "/login";
        
    }

}

  return (
    <div className='items-center justify-center flex w-full h-screen '>
      <form action="" method='post' onSubmit={handlelogin} className="flex flex-col items-start px-4 py-5 shadow-lg">
        <h1 className="text-3xl font-bold text-gray-700">Login to your account</h1>
        <label className='font-semibold' htmlFor="">Email</label>
        <input
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
          className="border-2 border-gray-300 rounded-md w-full p-2 mt-4 focus:outline-none"
          type="text"
          placeholder="Username"
        />
        <label className='font-semibold' htmlFor="">Password</label>
        <input
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
          className="border-2 border-gray-300 rounded-md w-full p-2 mt-4 focus:outline-none"
          type="password"
          placeholder="Password"
        />
        <button type='submit' className="bg-blue-500 text-white w-full rounded-full px-4 py-2 mt-4">
          Login
        </button>
        <Link to="/signin" className="text-gray-900 font-semibold mt-4">
Don't have an account? <span className='text-blue-400'>Sign up now</span>        </Link>    

      </form >
    </div>
  )
}

export default LoginPage
