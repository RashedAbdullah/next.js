import React from "react";
import SingleUser from "./singleUser";
import Link from "next/link";

export const users = [
  {
    id: 1,
    name: "Labib irfan",
  },
  {
    id: 2,
    name: "Rashed Abdullah",
  },
  {
    id: 3,
    name: "Ismat juyaria",
  },
  {
    id: 4,
    name: "Mahmudul Hasan",
  },
  {
    id: 5,
    name: "Zakaria Masud",
  },
];

const DynamicRoutes = () => {
  return (
    <div>
      {users.map((user) => (
        <Link href={`dynamic/${user.id}`} key={user.id}>
          <SingleUser user={user} />
        </Link>
      ))}
    </div>
  );
};

export default DynamicRoutes;
