import superAdmin from "../models/superAdmin.js";

const isEmailVerified = async(req,res,next) => {
    try {
        const {email,password} = req.body
        const user = await superAdmin.findOne({email})
        if(user){
            if(!user.isEmailVerified)
            return res.status(200).send({
                success: false,
                message: 'You need to verify your email first'
            })
            else next();
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