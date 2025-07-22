import { useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

import Button from "./Button";

import { getName } from "../features/user/userSlice";
import CreateUser from "../features/user/CreateUser";

function Home() {
  const username = useSelector(getName);

  return (
    <main>
      <div className="bg-[url(../src/assets/ovensource_pizza_banner.jpg)] bg-cover bg-[50%_25%] bg-[#2F3234]/85 bg-blend-overlay flex flex-col items-center min-h-[20vh] justify-center px-4 py-[10rem] mb-10 text-center sm:mb-16">
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
            className="mb-4 text-xl text-[#F9FBF7] font-semibold md:text-3xl"
          >
            Fresh Out the Oven, Straight to Your Home!
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
            className="mb-4 text-[#F9FBF7] text-[1.2rem]"
          >
            Now serving hot, handmade pizzas with bold flavors and local
            love—your new favorite pizza spot is finally here
          </motion.h3>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 1 } }}
        className="flex flex-col items-center justify-center px-4 my-10 text-center"
      >
        {username === "" ? (
          <CreateUser />
        ) : (
          <div>
            <p className="mb-4 text-base text-[#2F3234] md:text-2xl">
              Welcome Back!
            </p>
            <Button to="/menu" type="primary">
              Ready to order {username}?
            </Button>
          </div>
        )}
      </motion.div>
    </main>
  );
}

export default Home;
