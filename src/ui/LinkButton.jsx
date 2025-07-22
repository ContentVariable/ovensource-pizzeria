import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();

  const defaultStyle =
    "cursor-pointer text-sm text-[#B40614] bg-red-100 rounded-full py-1 px-3 hover:text-[#F9FBF7] duration-500 hover:bg-[#B40614] hover:text-white";

  if (to === "-1")
    return (
      <button className={defaultStyle} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={defaultStyle}>
      {children}
    </Link>
  );
}

export default LinkButton;
