import mongoose from "mongoose";
import { model, Schema } from "mongoose";

const multiForm = new Schema({
  firstname: String,
  lastname: String,
  username: String,
});

export const Form = model("Form", multiForm);
