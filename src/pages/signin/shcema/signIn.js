import * as yup from 'yup';

export const schema = yup.object().shape({
    phoneNumber: yup.string().required('Phone number is required'),
    invoiceNumber:yup.string().required('Invoice number is required'),
    cardNumber:yup.string(),
    name: yup.string(),
}); 