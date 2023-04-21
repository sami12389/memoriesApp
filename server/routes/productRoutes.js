import express from "express"
import {
    createProduct,
    deleteProduct,
    updateProduct,
    hideProduct,
    getProducts,
    getProduct, 
    likeProduct} from "../controllers/productControllers.js"

const router = express.Router()

router.post("/createProduct", createProduct)
router.get("/getProducts", getProducts)
router.get("/getProduct", getProduct)
router.patch("/updateProduct", updateProduct)
router.patch("/likeProduct", likeProduct)
router.post("/hideProduct", hideProduct)
router.delete("/deleteProduct", deleteProduct)




export default router;