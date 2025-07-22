import { useEffect } from "react";
import { useFetcher, useLoaderData } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

import OrderItem from "./OrderItem";
import UpdateOrder from "./UpdateOrder";

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utilities/helpers";

function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    },
    [fetcher]
  );

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <main>
      <div className="bg-[url(../src/assets/ovensource_pizza_img5.jpg)] bg-cover bg-[50%_45%] bg-[#2F3234]/85 bg-blend-overlay flex flex-col items-center min-h-[20vh] justify-center px-4 py-[10rem] mb-1 text-center">
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
            className="mb-4 text-2xl text-[#F9FBF7] font-semibold md:text-[3rem]"
          >
            Thank You!
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
            className="mb-4 text-[#F9FBF7] text-[1.2rem]"
          >
            Your Pizza Order Is Confirmed and Baking to Perfection
          </motion.h2>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 1 } }}
        className="max-w-5xl mx-auto"
      >
        <div className=" px-4 py-6 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-xl font-semibold [word-spacing:0.25rem]">
              Order{" "}
              <span
                className="px-3 py-1 rounded-full cursor-pointer bg-stone-200"
                onClick={() => navigator.clipboard.writeText(`${id}`)}
              >
                #{id}
              </span>{" "}
              Status:
            </h2>

            <div className="space-x-2">
              {priority && (
                <span className="px-3 py-1 font-semibold tracking-wide uppercase align-baseline bg-[#B40614] rounded-full text-red-50">
                  Priority
                </span>
              )}
              <span className="px-3 py-1 font-semibold tracking-wide uppercase align-baseline bg-[#34912A] rounded-full text-green-50">
                {status} order
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 px-6 py-5 bg-stone-200">
            <p className="font-medium">
              {deliveryIn >= 0
                ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left`
                : "Order should have arrived"}
            </p>
            <p className="text-sm text-stone-600">
              (Estimated delivery: {formatDate(estimatedDelivery)})
            </p>
          </div>

          <ul className="border-t border-b divide-y border-stone-200 divide-stone-200">
            {cart.map((item) => (
              <OrderItem
                item={item}
                ingredients={
                  fetcher.data?.find((el) => el.id === item.pizzaId).ingredients
                }
                isLoadingIngredients={fetcher.state === "loading"}
                key={item.pizzaId}
              />
            ))}
          </ul>

          <div className="px-6 py-5 space-y-2 bg-stone-200">
            <p className="text-sm font-medium text-stone-600">
              Order Subtotal: {formatCurrency(orderPrice)}
            </p>
            {priority && (
              <p className="text-sm font-medium text-stone-600">
                Priority Fee: {formatCurrency(priorityPrice)}
              </p>
            )}
            <p className="font-bold">
              Total (Pay on Delivery):{" "}
              {formatCurrency(orderPrice + priorityPrice)}
            </p>
          </div>

          {!priority && <UpdateOrder order={order} />}
        </div>
      </motion.div>
    </main>
  );
}

export default Order;
