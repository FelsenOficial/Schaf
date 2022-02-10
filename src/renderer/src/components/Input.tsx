function Input(props:any) {
  return (
    <>
      <input
        className={`${props.cor} animation-all duration-300
        text-center text-gray-900 w-full text-sm px-2 py-2
        border-b outline-none focus:border-gray-900
        placeholder:text-gray-400`}
        type="text"
        {...props}
      />
    </>
  );
}
export default Input;
