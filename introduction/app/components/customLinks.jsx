"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLik = ({ path, children }) => {
  const pathName = usePathname();
  const active = pathName === path;
  return (
    <Link className={active ? "text-green-500" : ""} href={path}>
      {children}
    </Link>
  );
};

export default CustomLik;
