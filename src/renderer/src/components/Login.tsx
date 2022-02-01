import { LoginHooks } from '@/hooks/LoginHooks';

export function Login() {
  const { formik, border } = LoginHooks();
  return (
    <div className="relative min-h-screen flex">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-gray-900">
        <div className="w-full h-full flex flex-auto items-center justify-center p-10 overflow-hidden bg-no-repeat bg-cover relative">
          <div className="absolute bg-gradient-to-b from-cyan-500 to-cyan-400 opacity-75 inset-0 z-0"></div>
          <div
            className="w-full max-w-md z-10"
            style={{
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
                  <br></br>
                  <span className="mt-2 text-sm text-gray-500">
                    Insira suas credenciais para acessar
                  </span>
                </p>
              </div>
              <hr></hr>
              <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
                <div>
                  <input
                    style={border.borderErrorUsuario}
                    className="text-gray-900 w-full text-base px-2 py-2 border-b border-gray-400 focus:outline-none focus:border-indigo-500 placeholder:text-gray-400"
                    type=""
                    placeholder="Digite o usuário"
                    value={formik.values.usuario}
                    onChange={formik.handleChange}
                    name="usuario"
                    id="usuario"
                  />
                </div>
                {formik.errors.usuario ? (
                  <span className="p-1 pt-2 text-red-500 text-sm bt-">
                    {formik.errors.usuario}
                  </span>
                ) : null}
                <div className="mt-8">
                  <input
                    style={border.borderErrorSenha}
                    className="text-gray-900 w-full text-base px-2 py-2 border-b border-gray-400 focus:outline-none focus:border-indigo-500 placeholder:text-gray-400"
                    type="password"
                    placeholder="Digite a senha"
                    value={formik.values.senha}
                    onChange={formik.handleChange}
                    name="senha"
                    id="senha"
                  />
                </div>
                {formik.errors.senha ? (
                  <span className="p-1 pt-2 text-red-500 text-sm">
                    {formik.errors.senha}
                  </span>
                ) : null}
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
                  <span className="p-3"></span>
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
