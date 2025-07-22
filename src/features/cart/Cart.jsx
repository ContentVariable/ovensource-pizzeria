import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

import EmptyCart from "./EmptyCart";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";

import { getName } from "../user/userSlice";
import { clearCart, getCart } from "./cartSlice";

function Cart() {
  const username = useSelector(getName);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  useEffect(
    function () {
      if (username) document.title = `${username}'s Cart`;
    },
    [username]
  );

  if (!cart.length) return <EmptyCart />;

  return (
    <main>
      <div className="bg-[url(../src/assets/ovensource_pizza_img4.jpg)] bg-cover bg-[50%_60%] bg-[#2F3234]/85 bg-blend-overlay flex flex-col items-center min-h-[20vh] justify-center px-4 py-[10rem] mb-1 text-center">
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
            className="mb-4 text-2xl text-[#F9FBF7] font-semibold md:text-[3rem]"
          >
            Cart
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
            className="mb-4 text-[#F9FBF7] text-[1.2rem]"
          >
            Review Your Fresh Pizza Selections
          </motion.h2>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 1 } }}
        className="max-w-5xl mx-auto"
      >
        <div className="px-4 py-3">
          <LinkButton to="/menu">&larr; Back to Menu</LinkButton>

          <h2 className="text-xl font-semibold mt-7">Your Cart, {username}</h2>

          <ul className="mt-3 border-b divide-y divide-stone-200">
            {cart.map((item) => (
              <CartItem item={item} key={item.pizzaId} />
            ))}
          </ul>

          <div className="mt-6 space-x-2">
            <Button to="/order/new">Order Pizzas</Button>
            <Button type="secondary" onclick={() => dispatch(clearCart())}>
              Clear Cart
            </Button>
          </div>
        </div>
      </motion.div>
    </main>
  );
}

export default Cart;
