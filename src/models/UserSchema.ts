
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema<Models.lUser>({
    username:{
        type: String,
        required: [true,"Provide username"],
        unique: true,
    },
    email:{
        type: String,
        required: [true,"Provide a valid username"],
        unique: true,
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }],
    password:{
        type: String,
        required: [true,"Provide a password"],
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
},{
    timestamps: true
})

const User = mongoose.models.users ||  mongoose.model<Models.lUser>('users', UserSchema)

export default User;