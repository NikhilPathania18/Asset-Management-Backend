import nodemailer from 'nodemailer'

const sendEmail = async(email, token) => {
    const link = `http://localhost:3000/verify-email/${token}`;

    //send email
    const transporter = await nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_ID, // sender address
      to: email, // list of receivers
      subject: "Verify your Email",
      text: `Hello User, Thank you for Registering. You need to verify your email by clicking on this link ${link}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return false;
      } else {
        return true;
      }
    });
}

export default sendEmail