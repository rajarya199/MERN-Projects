import axios from 'axios'
const apiUrl = import.meta.env.VITE_API_URL;

export const addUser=async(data)=>{
    try{
     return   await axios.post(`${apiUrl}/add`,data)
    }
    catch(error){
        console.log('error while calling add user api',error)
    }
}