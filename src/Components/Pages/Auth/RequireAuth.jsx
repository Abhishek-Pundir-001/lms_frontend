import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

function RequireAuth({allowedRole}){
    const {isLoggedIn,role} = useSelector((state)=> state?.auth)
    
    return isLoggedIn && allowedRole.includes(role) ? (
        <Outlet />
    ) : isLoggedIn ? (<Navigate to='/denied' />) : (<Navigate to='login'/>)
    
}

export default RequireAuth