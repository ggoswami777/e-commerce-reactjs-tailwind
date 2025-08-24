import axios from "axios";

const BaseUrl='https://api.escuelajs.co/api/v1';
export const getAllProducts=async()=>{
    const url=`${BaseUrl}/products`;
    try{
        const {data}=await axios.get(url);
        console.log('data from getAllProducts api',data);
        return data;
    }catch(error){
        console.log('error while calling getAllProducts api',error);
    }
}