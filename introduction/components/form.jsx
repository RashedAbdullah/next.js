import { addUser } from "@/actions/users-action";

const ServerForm = () => {
  return (
    <form action={addUser} className="bg-gray-400 p-4 max-w-2xl">
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
