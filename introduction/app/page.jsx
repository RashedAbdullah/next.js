import Image from "next/image";
import React from "react";
import CodeShowcase from "./components/codes";
const Home = () => {
  console.log("This is server component");
  return (
    <div className="relative">
      {" "}
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[112px] -z-10"
      />
      <div className="flex p-10 gap-10">
        <CodeShowcase />
        <CodeShowcase />
      </div>
    </div>
  );
};

export default Home;
