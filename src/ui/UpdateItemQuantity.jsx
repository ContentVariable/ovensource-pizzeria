import { useDispatch } from "react-redux";
import Button from "./Button";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/cart/cartSlice";

function UpdateItemQuantity({ pizzaId, curQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-1 items-center md:gap-3">
      <Button
        type="round"
        onclick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium gap=2 md:gap-3">{curQuantity}</span>
      <Button
        type="round"
        onclick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
