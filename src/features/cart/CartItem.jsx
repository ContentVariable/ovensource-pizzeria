// import { useDispatch } from "react-redux";
import DeleteItem from "../../ui/DeleteItem";
import UpdateItemQuantity from "../../ui/UpdateItemQuantity";
import { formatCurrency } from "../../utilities/helpers";
import Button from "../../ui/Button";
// import { addIngredient, removeIngredient } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice, ingredients } = item;
  // const dispatch = useDispatch();

  return (
    <li className="py-3 flex items-center gap-2 justify-between">
      <div className="flex flex-col">
        <p className="mb-1 sm:mb-0">
          {quantity}&times; {name}
        </p>
        <p className="capitalize text-sm text-stone-400 italic">
          {ingredients.join(", ")}
        </p>
        {/* {addIngredients && (
          <p className="capitalize text-sm text-stone-400 italic">
            {addIngredients.join(", ")}
          </p>
        )}
        {removeIngredients && (
          <p className="capitalize text-sm text-stone-400 italic">
            {removeIngredients.join(", ")}
          </p>
        )} */}
      </div>
      <div className="flex items-center justify-between gap-3 sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} curQuantity={quantity} />
        <DeleteItem pizzaId={pizzaId} />
        {/* <Button
          type="secondary"
          onclick={() => dispatch(addIngredient(pizzaId))}
        >
          Test Add
        </Button>
        <Button
          type="secondary"
          onclick={() => dispatch(removeIngredient(pizzaId))}
        >
          Test Add
        </Button> */}
      </div>
    </li>
  );
}

export default CartItem;
