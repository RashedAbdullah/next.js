import React from "react";
const Home = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(url, { cache: "force-cache" });
  if (!response.ok) throw new Error("There was an error occured");
  const data = await response.json();
  console.log(data);
  return (
    <div className=" p-5 grid grid-cols-3">
      {data.map((user) => (
        <div key={user.id} className="m-2 bg-gray-200 p-3 rounded">
          <p className="font-thin text-sm">User name: {user.username}</p>
          <h2>Name: {user.name}</h2>
          <p className="text-sm">E-mail: {user.email}</p>
          <p>
            Address: {user.address.street}, {user.address.city}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Home;
