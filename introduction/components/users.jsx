import { getUsers } from "@/actions/users-action";
import React from "react";

const Users = async () => {
  const users = await getUsers();

  return (
    <div className="w-full p-10 flex gap-5 flex-wrap">
      {users.length ? (
        users.map((user, inx) => (
          <div key={user._id} className="bg-gray-200 py-5 px-10 rounded-lg">
            <div className="text-center">{inx + 1}</div>
            <h2>Name: {user.name}</h2>
            <p>Address: {user.address}</p>
          </div>
        ))
      ) : (
        <div>Not found any user</div>
      )}
    </div>
  );
};

export default Users;
