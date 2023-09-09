import { useEffect } from 'react'
import { useUserData } from '../contexts/UserContext'
import { Outlet } from 'react-router-dom';
const Logout = () => {
    const userData = useUserData();
    useEffect(()=>{
        userData.dispatch({type:"LogoutUser"})
    },[])
  return (
    <Outlet/>
  )
}

export default Logout