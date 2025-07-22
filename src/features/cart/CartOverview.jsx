import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

import { formatCurrency } from "../../utilities/helpers";
import { selectTotalsOfCart } from "./cartSlice";

function CartOverview() {
  const { totalCartQuantity, totalCartPrice } = useSelector(selectTotalsOfCart);

  if (!totalCartQuantity) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { ease: "easeInOut" } }}
      className="flex items-center justify-between px-4 py-4 text-sm uppercase bg-[#2F3234] text-stone-200 sm:px-6 md:text-base"
    >
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} Pizza(s)</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open Cart &rarr;</Link>
    </motion.div>
  );
}

export default CartOverview;
