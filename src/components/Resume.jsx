import axios from 'axios';
import React, { useState } from 'react';

const Resume = () => {
    const [letter, setLetter] = useState(null);
    const [firstname,setFirstname] = useState("")
      const [lastname,setLastname] = useState("")
      const [phone,setPhone] = useState("")
      const [email,setEmail] = useState("")
      const [gender,setGender] = useState("")

    const handleFileChange = (e) => {
        setLetter(e.target.files[0]);
        console.log("Selected File:", e.target.files[0]);
    };
    
    
      const handleapply = async(e)=>{
        e.preventDefault();
        if(!firstname||!lastname||!email||!letter||!gender||!phone){
          alert("Please fill all fields")
          return;
        }else{
          try {
            const response = await axios.post(`http://localhost:8000/api/job/addresume`,{
              firstname,
              lastname,
              phone,
              email,
              letter,
              gender,
              
            }, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            console.log("Resume uploaded successfully:", response.data);
            setFirstname("")
            setLastname("")
            setPhone("")
            setEmail("")
            setLetter(null)
            setGender("")
            alert("Application submitted successfully!")
      
          } catch (error) {
            console.error("Error uploading resume:", error);
            alert("Error uploading resume");
            
          }
        }
      }

   

    return (
        <div>
            <form method='post' onSubmit={handleapply} className="flex items-center flex-col space-y-6 justify-center w-full">
                <label htmlFor="dropzone-file" className="flex items-center justify-center w-full h-20 px-4 py-1 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                    <div className="flex flex-row space-x-4 items-center justify-center">
                        <svg className="w-8 h-8 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
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
                    <input onChange={handleFileChange} id="dropzone-file" type="file" accept=".pdf,.doc,.docx" className="hidden" />
                </label>
                <button type='submit' className='bg-gray-900 px-4 py-1 text-white font-semibold h-10 tracking-wider rounded-md'>Apply</button>
            </form>
        </div>
    );
};

export default Resume;
