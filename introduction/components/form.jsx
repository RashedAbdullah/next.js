import { addUser } from "@/actions/users-action";
// mongodb+srv://rashedabdullahdemo:<password>@rsd.w20hdvv.mongodb.net/
const ServerForm = () => {
  // Sending additional data with action:
  const moreDataWithAction = addUser.bind(null, "Rashed Abdullah");
  return (
    <form
      action={moreDataWithAction}
      className="bg-gray-400 p-4 max-w-2xl px-20 w-full rounded-lg mb-10"
    >
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
        <button
          type="submit"
          className="w-full py-1 px-2 rounded bg-green-500 mt-5 text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ServerForm;
