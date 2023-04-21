import {User} from "../models/userModel.js"
export const updateUser = async(req, res)=>{

}

export const getUsers = async(req, res)=>{
    const users = await User.find();
    if(users?.length === 0){
        res.status(404).json("No products found.")
    }else{
        res.status(200).json(users)
        console.log(users)
    }
}

export const getUser = async(req, res)=>{
    
}

export const deleteUser = async(req, res)=>{
    
}