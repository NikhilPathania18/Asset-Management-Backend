import mongoose, { Schema } from 'mongoose'

const companyProfileSchema = new Schema({
    company_name:{
        type: String,
        required: true
    },
    registration_number:{
        type: String,
        required: true
    },
    PAN:{
        type: String,
        required: true
    },
    GST:{
        type: String ,
        required: true
    },
    Address1:{
        type: String,
        required: true
    },
    Address2:{
        type: String
    },
    city:{
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    PIN: {
        type: Number,
        required: true
    },
    country:{
        type: String,
        requred: true
    },
    phone:{
        type: Number,
        required: true
    },
    companyType: {
        type: String,
        required: true
    }
})

const companyProfile = mongoose.model('companyProfile',companyProfileSchema)

export default companyProfile