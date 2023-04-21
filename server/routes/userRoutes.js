import express from "express"
import {updateUser, deleteUser, getUsers, getUser} from "../controllers/userRoutes.js"

const router = express.Router();


router.patch("/update", updateUser)
router.get("/getUser", getUser)
router.get("/getUsers", getUsers)
router.delete("/delete", deleteUser)



export default router;