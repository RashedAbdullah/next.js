import { getData } from "@/utils/getData";

const Home = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const data = await getData(url);

  return (
    <div className=" p-5 grid grid-cols-3">
      {data.map((user) => (
        <div
          key={user.id}
          className="m-2 bg-green-400 text-blue-950 p-3 rounded relative shadow-xl grid grid-cols-3 gap-2"
        >
          <div className="col-span-2">
            {" "}
            <p className="font-thin text-sm">User name: {user.username}</p>
            <h2>Name: {user.name}</h2>
            <p className="text-sm">E-mail: {user.email}</p>
            <p>
              Address: {user.address.street}, {user.address.city}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
