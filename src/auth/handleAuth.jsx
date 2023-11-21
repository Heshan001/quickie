import { Outlet, Navigate } from "react-router-dom";

const handleAuth = () => {
    const auth = localStorage.getItem('userToken')
    if(!auth){
        return <Navigate to = '/selection' replace={true}/>

    }

    return<Outlet/>
}
export default handleAuth