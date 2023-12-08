import axios from "axios";

function getUrl(image){
    let uri =  axios.defaults.baseURL;

    uri = uri.substring(0,uri.lastIndexOf('/'))

    if(image){
        return `${uri}/${image}`
    }

    return uri;

}

export default getUrl