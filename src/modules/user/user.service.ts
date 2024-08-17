import { Tuser } from "./user.interface";
import { User } from "./user.model";

const helloWorldService = async () => {
  const result = await "hello world";
  return result;
};

const createUserInDb = async (user: Tuser) => {
  const result = await User.create(user);
  return result;
};
const getAllUserInDb = async () => {
  const result = await User.find();
  return result;
};

const updateUsersFromDb = async (userId: string, updatedData: Tuser) => {
  const result = await User.findOneAndUpdate({ userId }, updatedData, {
    new: true,
  });
  return result;
};
const deleteUserById = async (userId: string) => {
  const result = await User.findOneAndDelete({ userId: userId });
  return result;
};

export const userService = {
  helloWorldService,
  createUserInDb,
  getAllUserInDb,
  updateUsersFromDb,
  deleteUserById,
};
