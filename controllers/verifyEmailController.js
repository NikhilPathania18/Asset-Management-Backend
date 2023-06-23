import superAdmin from "../models/admin.js";
import jwt from "jsonwebtoken";

const verifyEmailController = async (req, res) => {
  const tok = req.params.id;
  try {
    const decode = jwt.verify(tok, process.env.JWT_SECRET);
    const user = await superAdmin.findOne({ email: decode.email });
    if (!user)
      return res
        .status(200)
        .send({ success: false, message: "User Not Found" });

    user.isEmailVerified = true;
    await user.save();

    let User = {
      _id: user._id,
      email: user.email,
    };
    console.log(User);
    jwt.sign({ User }, process.env.JWT_SECRET, (err, token) => {
      return res.status(200).send({
        success: true,
        message: "Email verified succesfully!!",
        user: User,
        token,
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(200).send({
      success: false,
      message: "Error in verifying Email",
    });
  }
};

export default verifyEmailController;
