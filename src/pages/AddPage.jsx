import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminNavbar from '../components/AdminNavbar'
import AddJob from '../components/AddJob'

const AddPage = () => {
  return (
    <div className='w-full h-full bg-gray-100 flex flex-row'>
      <div className='w-[20%]'><AdminSidebar/></div>
      <div className='w-[80%] flex flex-col'><AdminNavbar/>
      <AddJob/>
      </div>
    </div>
  )
}

export default AddPage
