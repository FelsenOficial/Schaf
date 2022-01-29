import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

type locationDados = {
  state: any;
};
export function Home() {
  const [data, setData] = React.useState<any>({});
  const location: locationDados = useLocation();
  const navigate = useNavigate();
  React.useEffect(() => {
    setData(location.state.dados);
  }, [location.state.dados]);

  return (
    <>
      <h1>
        Olá, <span>{data.usuario}</span>
      </h1>
      <h2>
        Sua senha é <span className="text-green-400">{data.senha}</span>
      </h2>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Sair
      </button>
    </>
  );
}
