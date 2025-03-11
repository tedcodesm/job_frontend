import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()


export const AuthProvider = ({children})=>{
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const [usertoken, setUserToken]= useState(null)
    const [userdata, setUserData] = useState(null)




    const getUserdata = async(token)=>{
        try {
            if(token){
                const response = await axios.post(`http://localhost:8000/api/user/getuserdata`,{token})
                const userdata = response.data;
                setUserData(userdata)
                console.log("User data display" ,userdata)
            }
            
        } catch (error) {
          console.log("Error fetching user data" , error)  
        }
    }

    const userlogin = async(email, password) => {
        setLoading(true)
        try {
            const response = await axios.post(`http://localhost:8000/api/user/userlogin`,{email,password})
            const data = response.data
            console.log("Data",data)

            if(data?.token){
                localStorage.setItem("token",data.token)
                localStorage.setItem("isAuthenticated", JSON.stringify(true))
                setIsAuthenticated(true)
                setUserToken(data.token)
                await getUserdata(data.token)
                setLoading(false)
            }else{
                console.log("log in failed")
            }
            
        } catch (error) {
            console.log("Error logging in" , error)
            setLoading(false)
            
        }
    }

    useEffect(()=>{

        const ifloggedin = async()=>{
            try {
                const token = localStorage.getItem("token");
                const LoggedIn = JSON.parse(localStorage.getItem("isAuthenticated"));
                if(token && LoggedIn){
                    setIsAuthenticated(true)
                    setUserToken(token)
                    getUserdata(token)
                    setLoading(false)
                }else{
                    setIsAuthenticated(false)
                    setUserToken(null)
                    setUserData(null)
                    console.log("No token found")
                    setLoading(false)
                }
            } catch (error) {
                console.error("Couldn't fetch authstatus", error)
            }setLoading(false)
        }; ifloggedin();
    },[])

    // logout 
    const userlogout = ()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("isAuthenticated")
        setIsAuthenticated(false)
        setUserToken(null)
        setUserData(null)
    }


    return(
        <AuthContext.Provider value={{isAuthenticated,userlogout, loading, userdata, userlogin, setUserToken, getUserdata}}>
            {children}
        </AuthContext.Provider>
    )

}