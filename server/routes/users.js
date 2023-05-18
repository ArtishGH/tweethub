import express from "express";
import { getUser, update, deleteUser, Follow, UnFollow } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";


const router = express.Router();

router.put('/:id', verifyToken, update);

router.get("/find/:id", getUser);

router.delete("/delete/:id", verifyToken, deleteUser);

router.put("/follow/:id", verifyToken, Follow);

router.put("/unfollow/:id", verifyToken, UnFollow);

export default router;
