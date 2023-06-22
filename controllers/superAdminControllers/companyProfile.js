import companyProfile from "../../models/companyProfile.js"

export const companyProfile = async(req,res) => {
    const details = req.body
    try {
        await new companyProfile(details).save();
        return res.status(200).send({
            success: true,
            message: 'Company details entered successfully'
        })
    } catch (error) {
        console.log(error.message);
        return res.status(200).send({
            success: false,
            message: 'Error in Company Registration'
        })
    }
}