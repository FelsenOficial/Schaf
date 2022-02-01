import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const LoginHooks = () => {
  const [borderErrorUsuario, setBorderErrorUsuario] = React.useState({
    borderBottom: '',
  });
  const [borderErrorSenha, setBorderErrorSenha] = React.useState({
    borderBottom: '',
  });
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

  React.useEffect(() => {
    if (formik.errors.usuario) {
      setBorderErrorUsuario({ borderBottom: '1px solid red' });
    } else {
      setBorderErrorUsuario({ borderBottom: '' });
    }
  }, [formik.errors.usuario]);

  React.useEffect(() => {
    if (formik.errors.senha) {
      setBorderErrorSenha({ borderBottom: '1px solid red' });
    } else {
      setBorderErrorSenha({ borderBottom: '' });
    }
  }, [formik.errors.senha]);

  return {
    formik,
    border: {
      borderErrorUsuario,
      borderErrorSenha,
    }
  };
};
