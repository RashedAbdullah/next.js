import { doSignout } from "@/actions/users-action";

const Signout = () => {
  return (
    <form action={doSignout}>
      <button type="submit">Signout</button>
    </form>
  );
};

export default Signout;
