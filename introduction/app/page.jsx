import { getData } from "@/utils/getData";
// import { cookies } from "next/headers";
import Image from "next/image";
const Home = async () => {
  // const theme = cookies().get("theme");
  const url = "https://jsonplaceholder.typicode.com/users";
  const data = await getData(url);
// This is comment line for anythings.
  return (
    <div className=" p-5 grid grid-cols-3">
      {data.map((user) => (
        <div
          key={user.id}
          className="m-2 bg-green-400 text-blue-950 p-3 rounded relative shadow-xl"
        >
          <p className="font-thin text-sm">User name: {user.username}</p>
          <h2>Name: {user.name}</h2>
          <p className="text-sm">E-mail: {user.email}</p>
          <p>
            Address: {user.address.street}, {user.address.city}
          </p>
          <Image
            src="/hero.svg"
            alt=""
            width={5000}
            height={5000}
            className="absolute top-0"
          />
        </div>
      ))}
    </div>
  );
};

export default Home;
