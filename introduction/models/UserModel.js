import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    default: "Anonymous",
    min: 4,
  },
  address: {
    type: String,
    default: "Anonymous",
    min: 4,
  },
});

const authUserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const authUserModel =
  mongoose.models.User || mongoose.model("User", authUserSchema);

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);

export { UserModel, authUserModel };
