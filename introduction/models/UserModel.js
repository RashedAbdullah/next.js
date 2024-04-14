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

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);

export { UserModel };
