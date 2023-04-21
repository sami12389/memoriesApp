import mongoose from "mongoose"
import bcryptjs from "bcryptjs"

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pwd: {
        type: String,
        required: true,
        max: 100,
    },
    role: [{
        type: String,
        default: "Employee",
        required: true
        }],
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

userSchema.pre("save", async function(next){
const salt = await bcryptjs.genSalt(10)
const hashedPwd = await bcryptjs.hash(this.pwd, salt)
this.pwd = hashedPwd

})


export const User =  mongoose.model("User", userSchema)
