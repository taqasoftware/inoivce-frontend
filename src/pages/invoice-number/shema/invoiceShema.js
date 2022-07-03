import * as yup from 'yup';

export const schema = yup.object().shape({
    invoice: yup.string().required('Invoice is required'),

});