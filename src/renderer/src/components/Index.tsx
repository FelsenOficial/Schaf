import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Index() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = React.useState();
  const [senha, setSenha] = React.useState();
  let [formDados, setFormDados] = React.useState({});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate('/Home', formDados);
  };

  const handleInputChange = (e: any) => {
    if (e.target.id == 'usuario') {
      setUsuario(e.target.value);
      setSenha(senha);
    }

    if (e.target.id == 'senha') {
      setUsuario(usuario);
      setSenha(e.target.value);
    }
  };

  React.useEffect(() => {
    const formDadosNovo = {
      state: {
        dados: {
          usuario: usuario,
          senha: senha,
        },
      },
    };
    setFormDados(formDadosNovo);
  }, [usuario, senha]);

  return (
    <div className="relative min-h-screen flex">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-gray-900">
        <div className="w-full h-full flex flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-cover relative">
          <div className="absolute bg-gradient-to-b from-cyan-500 to-cyan-400 opacity-75 inset-0 z-0"></div>
          <div
            className="w-full max-w-md z-10"
            style={{
              background: "url('imageslogin_bg.svg')",
              boxShadow: '0 2px 6px rgb(0 0 0 / 20%)',
            }}
          >
            <div className="max-w-md w-full space-y-8 bg-white p-10">
              <div className="text-center flex flex-col justify-center items-center">
                <h2 className="my-6 text-2xl">
                  <img src="images/profile.svg" alt="" />
                </h2>
                <p className="font-bold text-black text-lg">
                  Bem vindo(a)!
                  <p className="mt-2 text-sm text-gray-500">
                    Insira suas credenciais para acessar
                  </p>
                </p>
              </div>
              <hr></hr>
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div>
                  <input
                    className="text-gray-900 w-full text-base px-2 py-2 border-b border-gray-400 focus:outline-none focus:border-indigo-500 placeholder:text-gray-400"
                    type=""
                    placeholder="Digite o usuário"
                    id="usuario"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mt-8">
                  <input
                    className="text-gray-900 w-full text-base px-2 py-2 border-b border-gray-400 focus:outline-none focus:border-indigo-500 placeholder:text-gray-400"
                    type="password"
                    placeholder="Digite a senha"
                    id="senha"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600 hover:opacity-90 text-gray-100 text-sm p-2 tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Acessar
                  </button>
                </div>
                <div className="flex items-center text-gray-500 justify-between">
                  <div className="p-3">
                    <a
                      href="#"
                      className="text-base text-indigo-400 hover:text-blue-500 hover:border-b hover:border-blue-300"
                    >
                      Redefinir Senha
                    </a>
                  </div>
                  <span className="p-3">
                    <span className=""></span>
                  </span>
                  <div className="p-3">
                    <a
                      href="#"
                      className="text-base text-indigo-400 hover:text-blue-500 hover:border-b hover:border-blue-300"
                    >
                      Cadastrar Usuário
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
