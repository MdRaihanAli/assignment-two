"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_contoler_1 = require("./user.contoler");
const router = express_1.default.Router();
// router.get("/", userContoler.helloWorld);
router.post("/", user_contoler_1.userContoler.createUser);
router.get("/", user_contoler_1.userContoler.getAllUsers);
router.put("/:userId", user_contoler_1.userContoler.updateUser);
router.delete("/:userId", user_contoler_1.userContoler.deleteUser);
exports.userRouter = router;
