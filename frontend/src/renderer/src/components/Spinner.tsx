function Spinner({cor}: {cor: string}) {
  return (
    <div
      style={{ borderTopColor: "transparent" }}
      className={`w-5 h-5 ${cor} border-4 border-solid rounded-full animate-spin`}
    ></div>
  );
}
export default Spinner;
