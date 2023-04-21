import mongoose from "mongoose"


const productModel = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: String,
        required: true,
        max: 100,
    },
    productImage: [{
        type: String
    }],
    productRating: {
        type: Number,
        max: 5,
        min: 1,
        default: 1
    },
    productsInStock: {
        type: Number,
        min: 0,
        default: 0
    },
    productDesc:{
        type: String,
        required: true,
    },
    productDiscount:{
        type: Number,
        default: 0
    },
    productComments:[{
        type: String,
    }],
    deliveryOption: {
        type: String,
    },
    bestSeller: {
        type: Boolean,
        default: false
    },
    featuredProduct: {
        type: Boolean,
        default: false
    },
    productVisibility: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})



export const Product =  mongoose.model("Product", productModel)
