"use server";

import { connectMongo } from "@/DB-Connector/connect-mongo";
import { signIn, signOut } from "@/auth";
import { UserModel } from "@/models/UserModel";
import { revalidatePath } from "next/cache";

const addUser = async (myName, formData) => {
  const name = formData.get("name");
  const address = formData.get("address");
  // getting hidden input:
  const mynephew = formData.get("myName");
  const userData = {
    name,
    address,
  };

  try {
    console.dir(mynephew);
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

const doSignout = async () => {
  try {
    await signOut();
  } catch (err) {
    console.log(err.message);
  }
};

const doSignin = async () => {
  try {
    await signIn("google", { callbackUrl: "http://localhost:3000" });
  } catch (err) {
    console.log(err.message);
  }
};

export { addUser, getUsers, doSignout, doSignin };
