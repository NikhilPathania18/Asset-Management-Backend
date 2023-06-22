import superAdmin from "../../models/superAdmin.js"
import { hashPassword } from "../../helpers/encrypt.js"
import jwt from 'jsonwebtoken'
import sendEmail from "../../helpers/sendEmail.js"

export const registerUser = async(req,res) => {
    const {email, password} = req.body
    const hashedPassword = await hashPassword(password)
    try {
        await new superAdmin({
            email,
            password: hashedPassword
        }).save()

        jwt.sign({email},process.env.JWT_SECRET,(err,token)=>{
            if(err)
            return res.status(200).send({
                success: false,
                message: 'Error while generating token'
            })
            else
            {
                sendEmail(email,token)
                return res.status(200).send({
                    success: true,
                    message: 'Verify your email now'
                })
            }
            
        })

    } catch (error) {
        console.log(error.message)
        return res.status(200).send({
            success: false,
            message: 'Error in registration'
        })
    }

}