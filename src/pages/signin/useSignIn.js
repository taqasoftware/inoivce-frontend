import { useForm } from "react-hook-form"; 
import { schema } from "./shcema/signIn";
import {yupResolver} from '@hookform/resolvers/yup';
import { useMutation } from "react-query";
import {signInWithNumber} from '../../api/signInWithNumber/signInWithNumber';
import { useNavigate } from "react-router-dom";
export const useSignIn = () => {


   
  const { mutateAsync,error } = useMutation(signInWithNumber);
  
   const navigate = useNavigate();

  const {
    register,
    errors,
    handleSubmit,
    reset
  } = useForm({
    resolver: yupResolver(schema),
  });


  
 
  const onSubmit =  async (data) => {
    
  
    const costumer = await mutateAsync({ ...data },{
      
    });
 
    if(data.name){
      reset()
    }
   
    navigate(`/invoice-number/${costumer.id}`);
    
  };
 
  
  return {
    onSubmit,
    register,
    handleSubmit,
    error,
    errors
 
  };
};
