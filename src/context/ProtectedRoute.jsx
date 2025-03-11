import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const {loading,isAuthenticated} = useContext(AuthContext)
    

    if(loading)
    
        return( 
           <div className="flex items-center justify-center w-full h-screen">
<div className="loader border-t-4 rounded-full border-gray-500 bg-gray-300 animate-spin
aspect-square w-20 flex justify-center items-center text-yellow-700">

</div>
            </div>
            
           )
    
  return isAuthenticated ? <Outlet/>:<Navigate to="/login" replace />
  
}

export default ProtectedRoute
