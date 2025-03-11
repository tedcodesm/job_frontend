import React from 'react'

const ProfilePage = () => {
  return (
    <div className='w-full h-screen flex items-center bg-blue-400 justify-center '>
        <div className="w-[40%] h-[50%] bg-white flex  justify-center rounded-lg items-center px-4 py-4">
            <div className="flex flex-col space-y-8 w-full items-center">
            <img className='rounded-full h-40 w-40 border-4' src="" alt="" />
            <input type="file" />
            <button className="bg-blue-300 py-1 px-4 w-60 rounded-full text-white">Upload</button>
            </div>
            
        </div>

      
    </div>
  )
}

export default ProfilePage
