"use client";

import { useFormStatus } from "react-dom";

const Button = ({ btnType, classes, children }) => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type={btnType}
      className={pending ? "w-full bg-gray-500" : classes}
    >
      {pending ? "Submiting" : children}
    </button>
  );
};

export default Button;
