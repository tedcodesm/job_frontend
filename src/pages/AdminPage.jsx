import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminNavbar from '../components/AdminNavbar'
import Dashboard from '../components/Dashboard'

const AdminPage = () => {
  return (
    <div className='w-full h-full bg-gray-100 flex flex-row'>
      <div className='w-[20%]'><AdminSidebar/></div>
      <div className='flex flex-col w-[80%]'><AdminNavbar/>
      <Dashboard/>
      </div>
    </div>
  )
}

export default AdminPage
