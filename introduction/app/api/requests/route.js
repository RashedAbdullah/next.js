import { users } from "../data";

const GET = async (request) => {

  // Search user by name:
  const query = request.nextUrl.searchParams.get("query");
  if (query) {
    const foundUsers = users.filter((user) =>
      user.name.toLowerCase().includes(query)
    );
    return Response.json(foundUsers);
  }
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
