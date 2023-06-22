import mongoose, { Schema } from "mongoose";

const superAdminSchema = new Schema({
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
    }
})

const superAdmin = mongoose.model('SuperAdmin', superAdminSchema)

export default superAdmin;