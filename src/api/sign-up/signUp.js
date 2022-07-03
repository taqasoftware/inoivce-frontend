import { api } from "../Intercepter"


export const signInWithNumber = async (data) => {


    const req = await api.post(`/costumer/`,{phone_number: data.phoneNumber,full_name:data.name}).catch(err => {
        throw new Error(err.response.data.message);
    });
    
    return req;
    
}