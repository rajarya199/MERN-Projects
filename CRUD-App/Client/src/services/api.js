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

export const getAllUsers=async()=>{
    try{
        return await axios.get(`${apiUrl}/all`)
    }
    catch(error){
        console.log('error while calling get all users api',error)
    }
}