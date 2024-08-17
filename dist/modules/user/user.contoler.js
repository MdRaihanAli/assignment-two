"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userContoler = void 0;
const user_service_1 = require("./user.service");
const helloWorld = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.userService.helloWorldService();
        res.status(200).json({
            success: true,
            message: "hello world is ok",
            data: result,
        });
    }
    catch (error) {
        res.status(200).json({
            success: false,
            message: "hello world is not found",
            error,
        });
    }
});
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const result = yield user_service_1.userService.createUserInDb(user);
        res.status(200).json({
            success: true,
            message: "user create create successfully",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.userService.getAllUserInDb();
        res.status(200).json({
            success: true,
            message: "user geted successfully",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const updatedData = req.body;
        if ("password" in updatedData) {
            delete updatedData.password;
        }
        const result = yield user_service_1.userService.updateUsersFromDb(userId, updatedData);
        res.status(200).json({
            success: true,
            message: "user update successfully",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield user_service_1.userService.deleteUserById(userId);
        res.status(200).json({
            success: true,
            message: "user Delete successfully",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.userContoler = {
    helloWorld,
    createUser,
    getAllUsers,
    updateUser,
    deleteUser
};
