import { api } from "../Intercepter";

export const signInWithNumber = async (data) => {
    let req;
  if (data.name) {
       req = await api.post(`/costumer/`,{phone_number: data.phoneNumber,full_name:data.name,invoice_number:data.invoiceNumber,card_number:data.cardNumber}).catch(err => {        throw new Error(err.response.data.message);
      });
  } else {
     req = await api
      .post(`/costumer/phone-number/`,{phone_number:data.phoneNumber,invoice_number:data.invoiceNumber})
      .catch((err) => {
        throw new Error(err);
      });
  }
  
  return req.data;
 
};
