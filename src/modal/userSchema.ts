import { Schema, model } from "mongoose";
import { userSchemaTypes } from "../types/user";

const userSchema = new Schema<userSchemaTypes>(
  {
    fullName: {
      type: String,
      required: [true, "fullName is required"],
    },
    username: {
      type: String,
      trim: true,
      unique: true,
      lowercase: true,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      select: false,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      select: false,
    },
    profilePic: {
      type: String,
      default: "https://i.imgur.com/phEO72D.png",
    },
    loggedInWithGoogle: {
      type: Boolean,
      default: false,
    },
    email_verified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = model<userSchemaTypes>("User", userSchema);
export default User;
