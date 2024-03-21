import React from "react";
import { users } from "../page";

const User = ({ params }) => {
  const anyUser = users.find((user) => user.id === params.id);
  return <div>{anyUser.name}</div>;
};

export default User;
