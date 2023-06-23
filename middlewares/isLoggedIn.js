import jwt from 'jsonwebtoken'
export const isLoggedIn = async(req,res,next) => {
    const token = req.headers.authorization
    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        if(decode){
            req.user = decode
            console.log(req.user)
            next();
        }
        else    return res.status(200).send({
            success: false,
            message: 'You need to login'
        })
    } catch (error) {
        console.log(error);
        return res.status(200).send({
            success: false,
            message: 'You need to login'
        })
    }
}