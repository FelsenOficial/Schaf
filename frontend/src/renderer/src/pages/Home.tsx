import HomeHooks from "@/hooks/HomeHooks";
import { useNavigate } from "react-router-dom";

export function Home() {
  const { data } = HomeHooks();
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen z-20 flex flex-col">
      <header className="bg-gray-900 p-6 shadow-2xl">
        <div className="flex flex-row justify-between grow-0 text-white">
          <h1>
            Olá, <span>{data.usuario}!</span>
          </h1>
          <h2>
            Sua senha é <span className="text-green-400">{data.senha}</span>
          </h2>
          <button onClick={() => navigate("/")}>Sair</button>
        </div>
      </header>
      <section className="flex flex-row h-full">
        <aside className="bg-gray-400 w-60 h-full">
          <ul>
            <li className="bg-white p-2 text-center border-b border-gray-50">
              teste
            </li>
            <li className="bg-white p-2 text-center border-b border-gray-50">
              teste
            </li>
            <li className="bg-white p-2 text-center border-b border-gray-50">
              teste
            </li>
            <li className="bg-white p-2 text-center border-b border-gray-50">
              teste
            </li>
            <li className="bg-white p-2 text-center border-b border-gray-50">
              teste
            </li>
          </ul>
        </aside>
        <main className="bg-blue-200 h-full flex flex-row z-10 grow">
          saddas
        </main>
      </section>
    </div>
  );
}
