// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
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
        <div className="flex flex-col items-center justify-center px-4 py-3">
          <p className="text-xl font-semibold mt-7">
            Your cart is currently empty.
          </p>
          <p className="font-light mb-7">
            You can add items from the menu by using the provided button.
          </p>

          <LinkButton to="/menu">&larr; Back to Menu</LinkButton>
        </div>
      </motion.div>
    </main>
  );
}

export default EmptyCart;
