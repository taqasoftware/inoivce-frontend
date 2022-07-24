import { useForm } from "react-hook-form"; 
import { schema } from "./shcema/signIn";
import {yupResolver} from '@hookform/resolvers/yup';
import { useMutation } from "react-query";
import {signInWithNumber} from '../../api/signInWithNumber/signInWithNumber';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const useSignIn = () => {


  const [isSignUp, SetIsSignUp] = useState(false);
  const { mutateAsync,error } = useMutation(signInWithNumber);
  const [wait, setWait] = useState(null);
 
  const { 
    getValues,
    setValue,
    register,
    errors,
    handleSubmit,
    reset
  } = useForm({
    resolver: yupResolver(schema),
  });


  
 
  const onSubmit =  async (data) => {
    
  
   try{
    setWait("waiting");
    
    await mutateAsync({ ...data });

    setWait("تم التسجيل");
 
 
    await sleep(3000);
    
    setWait(null);
    SetIsSignUp(null)
    reset({
      name:'',
      phoneNumber:'',
      cardNumber:'',
      invoiceNumber:''
    })
   }catch(error){
     if(error.message !== 'Invoice Not Found')
    { 
      setWait(null)
     SetIsSignUp(true);
    }else{
      reset({
        name:'',
        phoneNumber:'',
        cardNumber:'',
        invoiceNumber:''
      })
      setWait(null);
      SetIsSignUp(false);
    }
 
   }
 
    if(data.name){
      reset()
    }
   
    
  };
 
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return {
    onSubmit,
    register,
    handleSubmit,
    error,
    errors,
    isSignUp,
    wait,
    setValue,
    getValues
  };
};

