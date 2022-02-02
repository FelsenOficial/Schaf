import React from "react";
import { useLocation } from "react-router-dom";

type locationDados = {
   state: any;
 };
export const HomeHooks = () => {
  const [data, setData] = React.useState<any>({});

  const location: locationDados = useLocation();

  React.useEffect(() => {
    setData(location.state.dados);
  }, [location.state.dados]);

  React.useEffect(() => {
    document.title = `Home - ${data.usuario}`;
  }, [data]);

  return {
    data
  };
};
export default HomeHooks;
