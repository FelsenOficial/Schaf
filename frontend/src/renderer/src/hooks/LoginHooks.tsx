import React from 'react';
import api from '@/services/api';
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
  let [errorLogin, setErrorLogin] = React.useState(false);
  let [displayError, setDisplayError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const validationSchema = Yup.object({
    usuario: Yup.string().required('Usuário obrigatório'),
    senha: Yup.string().required('Senha obrigatória'),
  });

  const navigate = useNavigate();

  const initialValues = {
    usuario: '',
    senha: '',
  };
  type dadosForm = {
    usuario: string,
    senha: string
  }
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (dados: dadosForm) => {
      setLoading(true)
      try {
          const resp = await api.get('api')
          if (resp.data) {
            if (resp.data.usuario == dados.usuario && resp.data.senha == dados.senha) {
              const login = {state: { dados }};
              navigate('/Home', login);
            } else {
              setErrorLogin(true);
              setLoading(false)
            }
          }
      } catch (error) {
        throw error;
      }
    },
  });
  React.useEffect(() => {
    if (errorLogin === true) {
      setDisplayError(true);
    } else {
      setDisplayError(false);
    }
  }, [errorLogin]);

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
    },
    setErrorLogin,
    displayError,
    loading
  };
};
