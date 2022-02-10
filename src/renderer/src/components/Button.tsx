function Button(props: object) {
  return (
    <>
      <button
        type="submit"
        className="
        w-full flex justify-center bg-gradient-to-r from-gray-700
        to-gray-900 hover:opacity-90 text-gray-100 text-sm p-2 
        tracking-wide font-semibold shadow-lg cursor-pointer
        transition ease-in duration-500"
        {...props}
      ></button>
    </>
  );
}
export default Button;
