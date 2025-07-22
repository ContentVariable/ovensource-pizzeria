import { Link } from "react-router-dom";

function Button({
  children,
  disabled = false,
  to = null,
  onclick = () => {},
  type = "primary",
}) {
  const defaultStyle =
    "cursor-pointer inline-block text-sm font-semibold tracking-wide uppercase transition-colors duration-300 bg-[#B40614] rounded-full text-[#F9FBF7] hover:bg-[#34912A] focus:outline-none focus:ring focus:ring-[#B40614] focus:bg-[#B40614] focus:ring-offset-2 disabled:cursor-not-allowed";
  const styleOptions = {
    primary: defaultStyle + " px-4 py-3 md:px-6 md:py-4",
    small: defaultStyle + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: defaultStyle + " px-2.5 py-1 text-sm",
    secondary:
      "cursor-pointer inline-block text-sm px-4 py-2.5 font-semibold tracking-wide uppercase transition-colors duration-300 rounded-full text-[#2F3234] hover:bg-[#2F3234] hover:text-[#F9FBF7] border-2 border-[#2F3234] md:px-6 md:py-3.5 focus:outline-none focus:text-[#F9FBF7] focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed",
  };

  if (to)
    return (
      <Link to={to} className={styleOptions[type]}>
        {children}
      </Link>
    );

  return (
    <button
      className={styleOptions[type]}
      onClick={onclick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
