"use client";

import { useRouter } from "next/navigation";

const CustomButton = ({ children }) => {
  const router = useRouter();
  console.log(router);
  return (
    <button
      onClick={() => router.push("/")}
      className="bg-blue-600 py-2 px-3 rounded text-gray-200 text-xl m-5"
    >
      {children}
    </button>
  );
};

export default CustomButton;
