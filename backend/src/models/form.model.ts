import mongoose from "mongoose";
import { model, Schema } from "mongoose";

const multiForm = new Schema({
  firstName: String,
  lastName: String,
  userName: String,
  email: String,
  phone: Number,
  password: String,
  confirmPassword: String,
  date: String,
  image: String,
});

export const Form = model("Form", multiForm);
