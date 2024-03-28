import { users } from "../data";

const GET = async () => {
  return Response.json(users);
};

const POST = async (request) => {
  const user = await request.json();
  const newUser = {
    id: users.length + 1,
    name: user.text,
  };
  users.push(newUser);

  return new Response(JSON.stringify(newUser), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
};

export { GET, POST };
