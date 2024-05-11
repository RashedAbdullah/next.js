import CustomLik from "@/app/components/customLinks";
import { auth, signIn, signOut } from "@/auth";
import Signin from "./signin";
import Signout from "./signout";

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
              <>
                <p>{session?.user?.name}</p>
                <Signout />
              </>
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
