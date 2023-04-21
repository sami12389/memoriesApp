import {User} from "../models/userModel.js"
import bcryptjs from "bcryptjs"

export const registerUser = async(req, res)=>{
   const {name, pwd, role} = req.body
   try {
    if(!name || !pwd || !role){
    return res.status(400).json("All fields required")
   }
   const checkDuplicate = await User.findOne({name})
   if(checkDuplicate){
    res.status(403).json("Duplicate user")
   }else{
    const user = await User.create({
    name,
    pwd,
    role
   })
   if(user){
    res.status(200).json(user)
   }   
   }
   } catch (error) {
    res.status(403).json("Registration failed")
   }
}


export const loginUser = async(req, res)=>{
    const {name, pwd} = req.body
    if(!name || !pwd){
        return res.status(400).json("All fields required")
    }
    const foundUser = await User.findOne({name}).exec()
    if(!foundUser){
        return res.status(401).json("No user")
    }
    const match = await bcryptjs.compare(pwd, foundUser.pwd)
    if(!match){
        return res.status(401).json("Unauthorized")
    }else{
    return res.status(200).json("Login successful")
    }
}


export const logoutUser = async(req, res)=>{
    
}


