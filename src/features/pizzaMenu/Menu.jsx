import { useLoaderData } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

import MenuItem from "./MenuItem";

const variants = {
  hidden: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  visible: {
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

function Menu() {
  const menu = useLoaderData();

  return (
    <main>
      <div className="bg-[url(../src/assets/ovensource_pizza_img1.jpg)] bg-cover bg-[50%_25%] bg-[#2F3234]/85 bg-blend-overlay flex flex-col items-center min-h-[20vh] justify-center px-4 py-[10rem] mb-1 text-center">
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
            className="mb-4 text-2xl text-[#F9FBF7] font-semibold md:text-[3rem]"
          >
            Our Menu
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
            className="mb-4 text-[#F9FBF7] text-[1.2rem]"
          >
            Explore Our Handcrafted Pizzas
          </motion.h2>
        </div>
      </div>
      <div>
        <motion.ul
          variants={variants}
          initial="hidden"
          animate="visible"
          className="gap-2.5 p-2 divide-y h-full divide-stone-200 lg:columns-2 3xl:columns-3"
        >
          {menu.map((pizza) => (
            <MenuItem pizza={pizza} key={pizza.name} />
          ))}
        </motion.ul>
      </div>
    </main>
  );
}

export default Menu;
