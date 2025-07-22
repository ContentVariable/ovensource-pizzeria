import { useRouteError } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
      className="flex flex-col items-center justify-center h-screen"
    >
      <h1 className="text-4xl text-[#B40614]">{error.status}</h1>
      <h2 className="text-2xl font-extrabold">Something Went Wrong</h2>
      <p className="mb-4 text-base">{error.data || error.message}</p>

      <LinkButton to="-1">&larr; Go Back</LinkButton>
    </motion.div>
  );
}

export default Error;
