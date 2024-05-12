import { doSignout } from "@/actions/users-action";

const Signout = () => {
  return (
    <form action={doSignout}>
      <button className="bg-red-500 p-2 rounded text-white text-sm" type="submit">
        Signout
      </button>
    </form>
  );
}; 

export default Signout;
