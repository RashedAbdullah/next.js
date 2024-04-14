"use server";

import { connectMongo } from "@/DB-Connector/connect-mongo";
import { UserModel } from "@/models/UserModel";
import { revalidatePath } from "next/cache";

const addUser = async (formData) => {
  "use server";
  const name = formData.get("name");
  const address = formData.get("address");
  const userData = {
    name,
    address,
  };

  try {
    await connectMongo();
    await UserModel(userData).save();
    revalidatePath("/server");
  } catch (err) {
    console.log(err.message);
  }
};

const getUsers = async () => {
  try {
    await connectMongo();
    const users = await UserModel.find();
    return users;

  } catch (err) {
    console.log(err.message);
  }
};

export { addUser, getUsers };
