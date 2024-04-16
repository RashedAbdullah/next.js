import { addUser } from "@/actions/users-action";
import Button from "./button";
// mongodb+srv://rashedabdullahdemo:<password>@rsd.w20hdvv.mongodb.net/
const ServerForm = () => {
  // Sending additional data with action:
  const moreDataWithAction = addUser.bind(null, "Rashed Abdullah");
  return (
    <form
      action={moreDataWithAction}
      className="bg-gray-400 p-4 max-w-2xl px-20 w-full rounded-lg mb-10"
    >
      {/* another way to send additional data */}
      <input type="hidden" name="myName" value="Labib Irfan" />

      <div className="grid grid-cols-6 mt-2">
        <p className="col-span-1">Name: </p>
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="col-span-5 p-1 rounded"
        />
      </div>
      <div className="grid grid-cols-6 mt-2">
        <p className="col-span-1">Address: </p>
        
        <input
          name="address"
          type="text"
          placeholder="Address"
          className="col-span-5 p-1 rounded"
        />
      </div>
      <div>
        <Button
          btnType="submit"
          classes="w-full py-1 px-2 rounded bg-green-500 mt-5 text-white"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ServerForm;
