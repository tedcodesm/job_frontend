import axios from 'axios'
import React, { useEffect, useState } from 'react'

const End = () => {
const [job,setJob] = useState([])

const getJob = async()=>{
  try {
    const response = await axios.get("http://localhost:8000/api/job/getjob");
    const data = response.data
    setJob(data)

  } catch (error) {
    console.log('Error fetching job data', error)

    
  }
}

useEffect(()=>{
  getJob()
},[])

  return (
    <div className='w-full h-full flex flex-col space-y-2 px-'>
      <div className="bg-gray-900 h-14 w-full"></div>
       <div className="px-4 flex  flex-col space-y-8 py-4">

       <h1 className="font-semibold text-2xl">Be the first to see new jobs in <span className='text-blue-400'>Chicago</span></h1> 
      <input className='py-2 px-4 h-16' type="text" placeholder='Kaahenjoroge@gmail.com' />
      <button className='w-full h-12 text-white bg-blue-400 rounded-md'>Subscribe</button>
      <p className='text-sm text-gray-400 mt-4 border-b-2 border-neutral-300'>Not interested hide now.</p>
      <p className='text-xl font-semibold text-gray-900'>Popular in<span className='text-blue-400'>Chicago</span></p>
      {
        job.map((jobo)=>{
          return(
            <div className="flex flex-row space-x-4 w-full">
        <img className='h-12 w-12' src={`http://localhost:8000/${jobo.logo}`} alt="" />
        <div className="flex flex-col">
            <h2 className="text-sm text-gray-600">{jobo.name}</h2>
            <p className="text-sm text-gray-400">129 jobs</p>
        </div>
      </div>
          )
        })
      }
       </div>
    </div>
  )
}

export default End
