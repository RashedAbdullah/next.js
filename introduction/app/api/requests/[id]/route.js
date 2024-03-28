import { users } from "../../data";

const GET = async (_request, { params }) => {
  const id = params.id;
  const user = users.find((usr) => usr.id === parseInt(id));
  return Response.json(user);
};

const PATCH = async (request, { params }) => {
  const name = await request.json();
  const id = params.id;
  const userIndex = users.findIndex((u) => u.id === parseInt(id));
  users[userIndex].name = name.text;
  return Response.json(users[userIndex]);
};

const DELETE = async (_request, { params }) => {
  const id = params.id;
  const userInext = users.findIndex((user) => user.id === parseInt(id));
  const removedUser = users[userInext];
  users.splice(userInext, 1);
  return Response.json(removedUser);
};

export { GET, PATCH, DELETE };
