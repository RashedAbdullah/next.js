"use client";

import { signinAction } from "@/actions/users-action";
import { useRouter } from "next/navigation";

const SigninPage = () => {
  const router = useRouter();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);

      const response = await signinAction(formData);

      // if (!!response.err) {
      //   console.log(response.err);
      // } else {
      router.push("/settings");
      // }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form
      onSubmit={handleForm}
      action=""
      className="flex gap-4 text-center items-center justify-center"
    >
      <div className="bg-gray-200 p-2">
        <label htmlFor="">email: </label>
        <input type="text" name="email" />
      </div>
      <div className="bg-gray-200 p-2">
        <label htmlFor="">password: </label>
        <input type="text" name="password" />
      </div>
      <button
        type="submit"
        className="bg-green-500 py-2 px-5 rounded text-white"
      >
        Signin
      </button>
    </form>
  );
};

export default SigninPage;
