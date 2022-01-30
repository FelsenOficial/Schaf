import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const LoginHooks = () => {
  const validationSchema = Yup.object({
    usuario: Yup.string().required('Usuário obrigatório'),
    senha: Yup.string().required('Senha obrigatória'),
  });
  const navigate = useNavigate();

  const initialValues = {
    usuario: '',
    senha: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (dados: object) => {
      try {
        const login = {
          state: {
            dados,
          },
        };
        navigate('/Home', login);
      } catch (error) {
        throw error;
      }
    },
  });
  return {
    validationSchema,
    initialValues,
    formik,
  };
};
