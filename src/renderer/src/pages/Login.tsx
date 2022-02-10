import Button from "@/components/Button";
import Input from "@/components/Input";
import Spinner from "@/components/Spinner";
import LoginHooks from "@/hooks/LoginHooks";

export function Login() {
  const { formik, setErrorLogin, errorLogin, loading } = LoginHooks();
  return (
    <section className="relative min-h-screen flex">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-gradient-to-b from-cyan-500 to-cyan-400">
        <div className="w-full h-full flex flex-auto items-center justify-center p-10 overflow-hidden bg-no-repeat bg-cover relative">
          <div className="absolute opacity-75 inset-0 z-0"></div>
          <div className="w-full max-w-lg z-10 shadow-2xl">
            <div className="max-w-lg w-full space-y-8 bg-white p-10 border-b border-gray-100">
              <div className="text-center flex flex-col justify-center items-center border-b border-gray-50">
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
              <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
                <div>
                  <Input
                    cor={errorLogin ? "border-red-500" : "border-gray-400"}
                    placeholder="Digite o usuário"
                    value={formik.values.usuario}
                    onChange={(e: object) => {
                      formik.handleChange(e);
                      setErrorLogin(false);
                    }}
                    name="usuario"
                    id="usuario"
                  />
                </div>
                <div>
                  <Input
                    cor={errorLogin ? "border-red-300" : "border-gray-300"}
                    type="password"
                    placeholder="Digite a senha"
                    value={formik.values.senha}
                    onChange={(e: object) => {
                      formik.handleChange(e);
                      setErrorLogin(false);
                    }}
                    name="senha"
                    id="senha"
                  />
                </div>
                <div>
                  <Button>
                    {!loading ? "Acessar" : <Spinner cor="border-cyan-100" />}
                  </Button>
                </div>
                {errorLogin ? (
                  <div className="p-2 border border-red-300 bg-red-50 text-red-500 text-base w-full text-center relative">
                    Usuário ou senha inválidos {}
                    <div className="absolute top-0 right-0 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 cursor-pointer"
                        onClick={() => setErrorLogin(false)}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                ) : null}
                <div className="flex items-center text-gray-500 justify-between">
                  <div className="p-3">
                    <a
                      href="#"
                      className="text-base text-blue-400 hover:opacity-80"
                    >
                      Redefinir Senha
                    </a>
                  </div>
                  <span className="p-3"></span>
                  <div className="p-3">
                    <a
                      href="#"
                      className="text-base text-blue-400 hover:opacity-80"
                    >
                      Cadastrar Usuário
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <ul className="circles">
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
          </ul> */}
        </div>
      </div>
    </section>
  );
}
