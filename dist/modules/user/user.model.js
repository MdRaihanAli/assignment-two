"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userNameSchema = new mongoose_1.Schema({
    firstName: String,
    lastName: String,
});
const addressSchema = new mongoose_1.Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
});
const orderSchema = new mongoose_1.Schema({
    productName: { type: String },
    price: { type: Number },
    quantity: { type: Number },
});
const userSchema = new mongoose_1.Schema({
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
exports.User = (0, mongoose_1.model)("user", userSchema);
