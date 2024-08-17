import { Schema, model } from "mongoose";
import { Taddress, Torder, Tuser, TuserName } from "./user.interface";

const userNameSchema = new Schema<TuserName>({
  firstName: String,
  lastName: String,
});

const addressSchema = new Schema<Taddress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const orderSchema = new Schema<Torder>({
  productName: { type: String },
  price: { type: Number },
  quantity: { type: Number },
});

const userSchema = new Schema<Tuser>({
  userId: { type: Number, unique: true, required: true },
  userName: { type: userNameSchema, required: true },
  password: { type: String, required: true },
  age: { type: Number },
  email: { type: String },
  isActive: { type: Boolean },
  hobbies: { type: [String] },
  address: addressSchema,
  order: { type: [orderSchema] },
});

export const User = model<Tuser>("user", userSchema);
