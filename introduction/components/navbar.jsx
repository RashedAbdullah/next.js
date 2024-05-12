import CustomLik from "@/app/components/customLinks";
import { auth } from "@/auth";
import Signin from "./signin";
import Signout from "./signout";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth();

  console.log(session);

  return (
    <nav>
      <ul className="flex gap-5 border-b p-5 m-5 justify-center text-2xl">
        <li>
          <CustomLik path="/">হোম</CustomLik>
        </li>
        <li>
          <CustomLik path="/about">About</CustomLik>
        </li>
        <li>
          <CustomLik path="/settings">Settings</CustomLik>
        </li>
        <li>
          <CustomLik path="/dynamic">Users</CustomLik>
        </li>
        <li>
          <CustomLik path="/server">Form</CustomLik>
        </li>
        {
          <li>
            {session?.user ? (
              <div className="flex gap-2">
                <p>{session?.user?.name}</p>
                <Image
                className="h-10 w-10 rounded-full"
                  src={session?.user?.image}
                  height={300}
                  width={300}
                  alt=""
                />
                <Signout />
              </div>
            ) : (
              <Signin />
            )}
          </li>
        }
      </ul>
    </nav>
  );
};

export default Navbar;
