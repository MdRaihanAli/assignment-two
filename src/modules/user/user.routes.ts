import express from "express";
import { userContoler } from "./user.contoler";
const router = express.Router();

// router.get("/", userContoler.helloWorld);
router.post("/", userContoler.createUser);
router.get("/", userContoler.getAllUsers);
router.put("/:userId", userContoler.updateUser);
router.delete("/:userId", userContoler.deleteUser);

export const userRouter = router;
