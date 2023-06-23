import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isEmailVerified: {
        type: String,
        default: false
    },
    role: {
        type: Number,
        default: 0
    }
})

const admin = mongoose.model('SuperAdmin', adminSchema)

export default admin;