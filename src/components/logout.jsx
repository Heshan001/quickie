import React from "react";
import { useNavigate } from "react-router";
import '../styles/institute/logout.css'

function Logout() {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        navigate('/login')
    } 

    return(
        <div>
            <button className="logoutBtn" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout