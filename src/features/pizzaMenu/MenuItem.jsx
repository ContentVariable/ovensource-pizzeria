import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

import Button from "../../ui/Button";
import DeleteItem from "../../ui/DeleteItem";
import UpdateItemQuantity from "../../ui/UpdateItemQuantity";

import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import { formatCurrency } from "../../utilities/helpers";

const itemVariants = {
  hidden: {
    x: -500,
    opacity: 0,
    transition: {
      x: { type: "easeIn" },
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      opacity: { duration: 1 },
      x: { type: "easeOut" },
    },
  },
};

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
      ingredients,
    };
    dispatch(addItem(newItem));
  }

  return (
    <motion.li
      variants={itemVariants}
      className={`flex gap-4 bg-[#F9FBF7] hover:bg-[#e6e9e4] ${
        soldOut && "cursor-not-allowed"
      }`}
    >
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 3xl:h-36 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex flex-col py-2 pr-2 grow 3xl:py-3 3xl:pr-2">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic capitalize text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="flex items-center justify-between mt-auto">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity pizzaId={id} curQuantity={currentQuantity} />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button type="small" onclick={handleAddToCart}>
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </motion.li>
  );
}

export default MenuItem;
