import axios from 'axios';
import { showSuccess } from '../Notification/Notification';


const ApiURl = `http://localhost:3000/`;

export const fetchData = async (url,headers)=>{
    return axios.get(ApiURl+url,{headers});
}

export const postData = async (url,HttpBody,HttpHeaders)=>{
    return axios.post(ApiURl+url, HttpBody, {
        headers: {
          "Content-Type": "application/json",
          // Authorization: "Bearer YOUR_ACCESS_TOKEN",
          ...HttpHeaders
        },    
    });
}


const isFileArray = (arr) => {
  return Array.isArray(arr) && arr.every((item) => item instanceof File);
};

export const postDataImg = async (url, body, HttpHeaders = {}) => {
    const formData = new FormData();
  
    for (const [key, value] of Object.entries(body)) {
      if(key.toLowerCase()==='img' && value)
        value.forEach(file=>formData.append(key,file))
      else
        formData.append(key, value);
    }
  
    try {
      const response = await axios.post(ApiURl+url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          ...HttpHeaders, // Merge custom headers
        },
      });
      return response.data; // Return response to caller
    } catch (error) {
      console.error("Error:", error);
      throw error; // Rethrow error for handling
    }
  };