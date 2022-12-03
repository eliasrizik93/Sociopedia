import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      min: 2,
      max: 50,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      min: 2,
    },
    picturePath: {
      type: String,
      default: "",
    },
    picturePath: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewProfile: Number,
    impression: Number,
  },
  { timestamps: true }
);

const user = mongoose.model("User", UserSchema);
export default user;
