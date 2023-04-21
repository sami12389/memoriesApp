import {Product} from "../models/productModel.js"

export const createProduct = async(req, res)=>{
    // request body
    const {productName, productPrice, productRating,
    productInStock, productDesc, productDiscount, 
    productComments, deliveryOption, bestSeller, 
    featuredProduct, productVisibility} = req.body
    try {
     // validate data
    if(!productName || !productPrice || !productDesc){
       return res.status(400).json("All items required")
    }else{
     // create new product
    const newProduct = await Product.create({
    productName, productPrice, productRating,
    productInStock, productDesc, productDiscount, 
    productComments, deliveryOption, bestSeller, 
    featuredProduct, productVisibility
    })
    newProduct.save()
    return res.status(200).json("Product created successfully.")
    } 
    }catch (error) {
    res.status(400).json(error)
    }
}

export const updateProduct = async(req, res)=>{
    
}

export const hideProduct = async(req, res)=>{
    
}

export const getProduct = async(req, res)=>{
    
}

export const getProducts = async(req, res)=>{
    const products = await Product.find()
    if(products?.length === 0){
        res.status(400).json("No products found")
    }else{
        res.status(200).json(products)
    }
}


export const likeProduct = async(req, res)=>{

}


export const deleteProduct = async(req, res)=>{
    const {_id} = req.body
    try {
    //find product
    const findProduct = await Product.findOne({_id})
    if(!findProduct){
        res.status(404).json("No product found.")
    }else{
    //delete product
    const deleteProduct = await Product.findByIdAndDelete({_id})
    res.status(200).json("Product deleted")
    }
    } catch (error) {
    console.log(error)
    }
}