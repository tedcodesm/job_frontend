import React from 'react'
import * as Icon from "react-feather"
const AdminNavbar = () => {
  return (
    <div className='h-20 items-center justify-between px-4 bg-white flex flex-row w-full'>
      <input type="text" placeholder='search' />
      <div className="flex flex-row items-center space-x-8 justify-end">
        <Icon.Bell size={24}/>
        <button className="ring rounded-lg px-4 py-1 text-blue-400">Upgrade</button>
        <Icon.Menu size={24}/>
      </div>
    </div>
  )
}

export default AdminNavbar
