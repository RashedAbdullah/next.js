import { doSignin } from "@/actions/users-action";

const Signin = () => {
  return (
    <form action={doSignin}>
      <button type="submit" className=" text-lg bg-green-500 text-white p-2 rounded">
        Sign in with google
      </button>
    </form>
  );
};

export default Signin;
