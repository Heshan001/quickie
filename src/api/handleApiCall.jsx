import axios from "axios"
import urlDoc from './url'

const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001'

console.log(baseUrl)

const handleApiCall = ({
    variant = 'user',
    urlType,
    data,
    params,
    cb = returnData => returnData,
    setLoading = state => state,
    urlParams = '',
    auth = true

}) => {
    const url = `${baseUrl}${urlDoc[variant][urlType]?.url}${urlParams}`
    const method = urlDoc[variant][urlType]?.type

    async function handelCall() {
        setLoading(true)
        try{
            const response = await axios({
                method,
        url,
        data,
        params,
        headers: {
          'Content-Type': 'application/json',
          Authorization: auth
            ? `Bearer ${localStorage.getItem('userToken')}`
            : ''
        }
            }) 
            setLoading(false)
            return cd(response.data, response.status)
        } catch(error){
            setLoading(false)
            if(error.response?.status === 401) {
                localStorage.removeItem('userToken')
            }
            cd(error,error.response?.status)
            throw error
        }
    }
    return handelCall()
}
export default handleApiCall
