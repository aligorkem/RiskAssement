import axios from "axios"

export function api(){
    
    return axios.create({
        baseURL: `https://6f5hl0qzqi.execute-api.us-east-1.amazonaws.com/dev`,
        headers: {
            'Content-Type': 'text/plain',
            'Accept': '*/*',
            'Origin':'*',
        }
    })
};