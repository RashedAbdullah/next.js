import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    return connection;
  } catch (err) {
    console.log(err.message);
  }
};
export { dbConnect };
