import * as Yup from 'yup';

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const validationSchema = Yup.object().shape({
  name: Yup.string().max(60, 'Макс 60 символов').required('Обязательное поле'),
  phone: Yup.string().required('Обязательное поле'),
  email: Yup.string()
    .matches(emailRegex, 'Некорректный email')
    .email('Некорректный email')
    .required('Обязательное поле'),
  agree1: Yup.boolean().oneOf([true], 'Необходимо согласие'),
  agree2: Yup.boolean().oneOf([true], 'Необходимо согласие'),
});

export const initialValues = {
  name: '',
  phone: '',
  email: '',
  agree1: false,
  agree2: false,
};
