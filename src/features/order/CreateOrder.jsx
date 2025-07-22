import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, useActionData, useNavigation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

import Button from "../../ui/Button";
import Input from "../../ui/Input";
import EmptyCart from "./../cart/EmptyCart";

import { formatCurrency } from "../../utilities/helpers";
import { fetchAddress, getUser } from "../user/userSlice";
import { clearCart, getCart, selectTotalsOfCart } from "../cart/cartSlice";

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector(getUser);
  const navigation = useNavigation();
  const formErrors = useActionData();
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const { totalCartPrice } = useSelector(selectTotalsOfCart);

  const isLoadingAddress = addressStatus === "loading";
  const isSubmitting = navigation.state === "submitting";
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  useEffect(() => {
    if (
      navigation?.state === "loading" &&
      navigation?.location?.pathname?.startsWith("/order/")
    ) {
      dispatch(clearCart());
    }
  }, [navigation, dispatch]);

  if (!cart.length) return <EmptyCart />;

  return (
    <main>
      <div className="bg-[url(../src/assets/ovensource_pizza_img2.jpg)] bg-cover bg-[50%_45%] bg-[#2F3234]/85 bg-blend-overlay flex flex-col items-center min-h-[20vh] justify-center px-4 py-[10rem] mb-1 text-center">
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
            className="mb-4 text-2xl text-[#F9FBF7] font-semibold md:text-[3rem]"
          >
            Order
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
            className="mb-4 text-[#F9FBF7] text-[1.2rem]"
          >
            Fast, Fresh, Oven-Baked Goodness
          </motion.h2>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 1 } }}
        className="max-w-5xl mx-auto"
      >
        <div className="px-4 py-6">
          <h2 className="mb-8 text-xl font-semibold ">
            Ready to order? Let's go!
          </h2>
          <Form method="POST">
            <div className="flex flex-col gap-2 mb-5 sm:flex-row sm:items-center">
              <label className="sm:basis-40">First Name</label>
              <div className="grow">
                <Input
                  styling="large"
                  type="text"
                  name="customer"
                  defaultValue={username}
                  required
                />
              </div>
            </div>
            <div className={formErrors ? "mb-20 sm:mb-12" : ""}>
              <div className="relative flex flex-col gap-2 mb-5 sm:flex-row sm:items-center">
                <label className="sm:basis-40">Phone Number</label>
                <div className="grow">
                  <Input styling="large" name="phone" required />
                  {formErrors?.phone && (
                    <p className="absolute mt-3 ml-2 text-sm text-left text-[#B40614] rounded-md">
                      {formErrors.phone}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className={errorAddress ? "mb-20 sm:mb-12" : ""}>
              <div className="relative flex flex-col gap-2 mb-5 sm:flex-row sm:items-center">
                <label className="sm:basis-40">Address</label>
                <div className="grow">
                  <Input
                    styling="large"
                    type="text"
                    name="address"
                    defaultValue={address}
                    disabled={isLoadingAddress}
                    required
                  />
                  {addressStatus === "error" && (
                    <p className="absolute mt-3 ml-2 text-sm text-left text-[#B40614] rounded-md">
                      {errorAddress}
                    </p>
                  )}
                </div>
                {!position.latitude && !position.longitude && (
                  <span className="absolute right-[5px] bottom-[5px] z-5 sm:top-[5px] md:right-0.75 md:top-0.75">
                    <Button
                      type="small"
                      onclick={(e) => {
                        e.preventDefault();
                        dispatch(fetchAddress());
                      }}
                      disabled={isSubmitting || isLoadingAddress}
                    >
                      Get Position
                    </Button>
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-5 mb-12">
              <input
                className="w-6 h-6 accent-[#B40614] focus:outline-none focus:ring focus:ring-[#B40614] focus:ring-offset-2"
                type="checkbox"
                name="priority"
                id="priority"
                value={withPriority}
                onChange={(e) => setWithPriority(e.target.checked)}
              />
              <label htmlFor="priority" className="font-medium">
                Is this a priority order?
              </label>
            </div>

            <div>
              <input
                className="bg-[#F9FBF7] border-1 border-[#2F3234]"
                type="hidden"
                name="cart"
                value={JSON.stringify(cart)}
              />
              <input
                className="bg-[#F9FBF7] border-1 border-[#2F3234]"
                type="hidden"
                name="position"
                value={
                  position.longitude && position.latitude
                    ? `${position.latitude},${position.longitude}`
                    : ""
                }
              />
              <Button disabled={isSubmitting}>
                {isSubmitting
                  ? "Placing Order..."
                  : `Order Now for ${formatCurrency(totalPrice)}`}
              </Button>
            </div>
          </Form>
        </div>
      </motion.div>
    </main>
  );
}

export default CreateOrder;
