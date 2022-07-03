import * as yup from 'yup';

export const schema = yup.object().shape({
    phoneNumber: yup.string().required('Phone number is required'),
    name: yup.string(),
}); 