import admin from "../models/admin.js"
import jwt from 'jsonwebtoken'
import { comparePassword } from "../helpers/encrypt.js"
export const loginController =async(req,res) => {

    const { email,password } = req.body
    console.log(email,password);
    const user = await admin.findOne({email})
    if(!user){
        res.status(200).send({
            success: false,
            message: 'User Not registered'
        })
    }
    else{
        const doesMatch = await comparePassword(password,user.password)
        if(doesMatch)
        {
            let User = {
                _id: user._id,
                email: user.email,
              };
              jwt.sign({ User }, process.env.JWT_SECRET, (err, token) => {
                return res.status(200).send({
                  success: true,
                  message: "Login successfull!",
                  user: User,
                  token,
                });
              });
        }

        else
        {
            return res.status(200).send({
                    success: false,
                    message: 'Invalid credentials'
            })
        }
    }
}
