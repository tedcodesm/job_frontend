import React from 'react'
import Center from "./Center";


const Sidebar = () => {
  
  return (
    <div className='w-full flex flex-col items-start px-4'>
      <div className="flex flex-row w-full items-center justify-between">
        <h1 className='font-semibold text-lg'>Filter</h1>
        <h1 className='text-neutral-400'> Clear All</h1>
      </div>
      <div className="flex flex-col py-2 border-b-2 border-neutral-400   w-full items-center justify-between">
       <div  className="flex flex-row py-2 w-full items-center justify-between"> <h1 className='text-neutral-400 '>JOB TYPE</h1>
       <h1 className='text-neutral-400'> Clear </h1></div>
      <ul className="flex flex-col space-y-4 font-semibold w-full ">
      <li><a className='text-blue-400' href="">All(284)</a></li>
      <li><a href="">Full Time(146)</a></li>
      <li><a href="">Part Time(32)</a></li>
      <li><a href="">Contract(18)</a></li>
      <li><a href="">Internship(81)</a></li>
      <li><a href="">Freelance(7)</a></li>
      </ul>
      </div>
      <div className="flex flex-col py-2 border-b-2 border-neutral-400  w-full items-center justify-between">
       <div  className="flex flex-row py-2 w-full items-center justify-between"> <h1 className='text-neutral-400 '>Location</h1>
       <h1 className='text-neutral-400'> Clear </h1></div>
      <ul className="flex flex-col space-y-4 font-semibold w-full ">
      <li><a className='text-blue-400' href="">Chicago(284)</a></li>
      <li><a href="">Niles(146)</a></li>
      <li><a href="">North l (32)</a></li>
      <li><a href="">Frontw(18)</a></li>
      <li><a href="">Skokie(81)</a></li>
      <li><a href="">Oak(7)</a></li>
      </ul>
      </div>
      <div className="flex flex-col py-2 border-b-2 border-neutral-400  w-full items-center justify-between">
       <div  className="flex flex-row py-2 w-full items-center justify-between"> <h1 className='text-neutral-400 '>Company</h1>
       <h1 className='text-neutral-400'> Clear </h1></div>
      <ul className="flex flex-col space-y-4 font-semibold w-full ">
      <li><a className='text-blue-400' href="">All(284)</a></li>
      <li><a href="">Aboort(146)</a></li>
      <li><a href="">Drivative(32)</a></li>
      <li><a href="">zebra(18)</a></li>
      <li><a href="">pillay(81)</a></li>
      <li><a href="">okaytax(7)</a></li>
      </ul>
      </div>

    </div>
  )
}

export default Sidebar
