import { api } from "../Intercepter";

export const submitInvoice = async (data, id) => {
 
  const req = await api
    .post(`/invoice/`, { invoice_number: data.invoice, costumer_id: 1 })
    .catch((err) => {
      throw new Error(err.response.data.message);
    });

  return req;
};
