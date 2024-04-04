import mongoose from "mongoose";
import { models } from "mongoose";
const userSchema = new mongoose.Schema(
  {
    auth0Id: {
      type: String,
      required: true,

      unique: true,
    },
    picture: {
      type: String,
    },
    firstname: {
      type: String,
    },
    secondname: { type: String },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    email2: {
      type: String,
      require: true,
      unique: true,
    },
    city: { type: String },
    instrument: { type: String },
    experience: {
      type: String,
    },
    age: { type: String },
    phone: {
      type: String,
    },

    username: {
      type: String,
    },
    other: {
      type: String,
    },
    password: { type: String },
  },
  { timestamps: true }
);
const User = models.User || mongoose.model("User", userSchema);

export default User;
