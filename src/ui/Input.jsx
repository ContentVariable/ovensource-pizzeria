import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

function Input({
  styling = "primary",
  type,
  name,
  id = "",
  placeholder,
  required,
  onChange,
  defaultValue,
  disabled = false,
}) {
  const [isRequired] = useState({ required });

  const defaultStyle =
    "px-4 py-2 transition-all duration-300 bg-[#F9FBF7] rounded-full border-1 border-stone-200 focus:outline-none focus:ring focus:ring-[#B40614] md:px-6 md:py-3;";

  const styleOptions = {
    primary: defaultStyle,
    secondary:
      "px-4 py-2 text-sm transition-all duration-300 bg-red-100 rounded-full border-1 border-[#F9FBF7] placeholder:text-[#2F3234] w-32 sm:w-64 sm:focus:w-72 autofill:bg-[#F9FBF7] focus:bg-[#F9FBF7] focus:outline-none focus:ring focus:ring-[#B40614]",
    medium: defaultStyle + " mb-8 w-72",
    large: defaultStyle + " w-full",
  };

  return (
    <motion.input
      whileHover={{ scale: 1.1, transition: { delay: 0.1, duration: 0.5 } }}
      whileFocus={{ scale: 1.1 }}
      className={styleOptions[styling]}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      defaultValue={defaultValue}
      {...isRequired}
    />
  );
}

export default Input;
