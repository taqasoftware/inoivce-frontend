import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { submitInvoice } from "../../api/submit-invoice/SubmitInvoice";
import { schema } from "./shema/invoiceShema";
import { useState } from "react";
export const useInvoice = () => {
  const { mutateAsync, isSuccess, data } = useMutation(submitInvoice);
  const [wait, setWait] = useState(null);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const { register, errors, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  const onSubmit = async (invoiceData, id) => {
    setWait("waiting");

    try {
      await mutateAsync({ ...invoiceData, id });
   
   
      setWait("تم التسجيل");
 

      await sleep(3000);
      navigate("/");
    } catch (error) {
      setError(error.message);
     
      if(error.message === "the last discount did not used"){
        console.log('hi')
        setWait('يرجى استخدام الفاتورة الاخيره لتسجيل فاتورة جديدة');
        await sleep(3000);
        navigate("/");
      }
      reset();
    }

    setWait(null);
  };

  return {
    onSubmit,
    register,
    handleSubmit,
    error,
    errors,
    wait,
  };
};
