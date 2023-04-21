import express from "express"
import authRoutes from "./authRoutes.js"
import productRoutes from "./productRoutes.js"
import userRoutes from "./userRoutes.js"

const router = express.Router()

router.use("/auth", authRoutes)
router.use("/product", productRoutes)
router.use("/users", userRoutes)

export default router;