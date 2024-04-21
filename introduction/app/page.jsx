import { getData } from "@/utils/getData";
// import { cookies } from "next/headers";
import Image from "next/image";
import heroImage from "@/public/hero.svg";
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
          <Image width={200} height={300} src="https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/322681218_580128903938051_6457448766777127040_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEONN_9XV1zPXiSPsVjVKDTk11FUx-mM_2TXUVTH6Yz_bCutc-eqPQVQ7VVJNUB37XbdekwlbOgRMXzKtvC0M03&_nc_ohc=7J4M02dIGeUAb5gI7TT&_nc_ht=scontent.fcgp3-2.fna&oh=00_AfCzNjS9E2GKcyHE15V7dNlYSvhKLYV4lGM3MYZl3JS9Zg&oe=662AE541" alt="" />
        </div>
      ))}
    </div>
  );
};

export default Home;
