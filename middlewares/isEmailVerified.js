import admin from "../models/admin.js";

const isEmailVerified = async(req,res,next) => {
    try {
        const {email,password} = req.body
        const user = await admin.findOne({email})
        if(user){
            if(!user.isEmailVerified)
            {return res.status(200).send({
                success: false,
                message: 'You need to verify your email first'
            })}
            next();
        }
        else{
            return res.status(200).send({
                success: false,
                message: 'User not found'
            })
        }
    } catch (error) {
        console.log(error.message);
        return res.status(200).send({
            success: false,
            message: 'Something went wrong'
        })
    }
}

export default isEmailVerified