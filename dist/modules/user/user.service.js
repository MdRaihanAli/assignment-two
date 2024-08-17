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
exports.userService = void 0;
const user_model_1 = require("./user.model");
const helloWorldService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield "hello world";
    return result;
});
const createUserInDb = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.create(user);
    return result;
});
const getAllUserInDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.find();
    return result;
});
const updateUsersFromDb = (userId, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findOneAndUpdate({ userId }, updatedData, {
        new: true,
    });
    return result;
});
const deleteUserById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findOneAndDelete({ userId: userId });
    return result;
});
exports.userService = {
    helloWorldService,
    createUserInDb,
    getAllUserInDb,
    updateUsersFromDb,
    deleteUserById,
};
