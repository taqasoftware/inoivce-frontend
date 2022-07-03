import { SubmitHandler, useFieldArray, useForm } from "react-hook-form"; 
 
import {yupResolver} from '@hookform/resolvers/yup';
import { useMutation } from "react-query"; 
import { useNavigate } from "react-router-dom";
import { submitInvoice } from "../../api/submit-invoice/SubmitInvoice";
import { schema } from "./shema/invoiceShema";
export const useInvoice = () => {


  
  const { mutateAsync, isSuccess,error,data } = useMutation(submitInvoice);
  
   const navigate = useNavigate();

  const {
    register,
    errors,
    handleSubmit,
    reset
  } = useForm({
    resolver: yupResolver(schema),
  });


  
 
  const onSubmit =  async (data,id) => {
    
    
    console.log(id)
    await mutateAsync({ ...data,id});
     
    if(data){
      reset()
       navigate("/");
    }
    
    
  };
 
  
  return {
    onSubmit,
    register,
    handleSubmit,
    error,
    errors
 
  };
};
