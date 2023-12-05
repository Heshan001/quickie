import axios from 'axios';

function addHeaders(){
    axios.defaults.baseURL = 'http://localhost:8000/api';
    axios.defaults.headers.common["Accept"] = "application/json";
    axios.defaults.headers.common["Content-Type"] = "application/json";
}
function interceptorsHandle(){
    axios.interceptors.request.use(config=>{
        const personalAccessToken = localStorage.getItem("token");
        if (personalAccessToken){
            config.headers.Authorization = `Bearer ${personalAccessToken}`;
        }
        return config;
    })

    // axios.interceptors.response.use(
    //     (response)=>{return response},
    //     error=>{
    //         if (error.request.status === 401) {
    //             localStorage.removeItem("token")
    //             localStorage.removeItem("user")
    //             return axios(error.config);
    //         }
    //         return Promise.reject(error);
    //     }
    // )
}
export {
    addHeaders,
    interceptorsHandle
}