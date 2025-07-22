import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 uppercase bg-[#B40614] border-b border-stone-200 sm:px-6">
      <Link
        to="/"
        className="font-thin text-[#F9FBf7] tracking-widest capitalize"
      >
        OvenSource Pizzeria
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
