import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Center from './Center'
import End from './End'
import axios from 'axios'

const Body = () => {

 
  return (
    <div className='w-full bg-gray-200 h-full flex flex-row '>
   <div className='w-[80%]'><Center/></div>
   <div className='w-[20%]'><End/></div>
      
    </div>
  )
}

export default Body
