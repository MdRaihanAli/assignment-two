import { Request, Response } from "express";
import { userService } from "./user.service";

const helloWorld = async (req: Request, res: Response) => {
  try {
    const result = await userService.helloWorldService();

    res.status(200).json({
      success: true,
      message: "hello world is ok",
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "hello world is not found",
      error,
    });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await userService.createUserInDb(user);

    res.status(200).json({
      success: true,
      message: "user create create successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUserInDb();

    res.status(200).json({
      success: true,
      message: "user geted successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const updatedData = req.body;

    if ("password" in updatedData) {
      delete updatedData.password;
    }

    const result = await userService.updateUsersFromDb(userId, updatedData);
    res.status(200).json({
      success: true,
      message: "user update successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await userService.deleteUserById(userId);
    res.status(200).json({
      success: true,
      message: "user Delete successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const userContoler = {
  helloWorld,
  createUser,
  getAllUsers,
  updateUser,
  deleteUser
};
