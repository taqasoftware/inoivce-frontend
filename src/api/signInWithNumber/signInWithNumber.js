import { api } from "../Intercepter";

export const signInWithNumber = async (data) => {
    let req;
  if (data.name) {
       req = await api.post(`/costumer/`,{phone_number: data.phoneNumber,full_name:data.name}).catch(err => {        throw new Error(err.response.data.message);
      });
  } else {
     req = await api
      .get(`/costumer/phone-number/${data.phoneNumber}`)
      .catch((err) => {
        throw new Error(err.response.data.message);
      });
  }
  
  return req.data;
 
};
