

const User = ({ params }) => {
  //   const anyUser = users.find((u) => u.id === params.id);
  return <div className="text-center text-3xl bg-red-500">{params.id}</div>;
};

export default User;
