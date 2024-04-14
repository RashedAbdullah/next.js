import ServerForm from "@/components/form";
import Users from "@/components/users";

const ServerAction = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <ServerForm />
      <Users />
    </div>
  );
};

export default ServerAction;
