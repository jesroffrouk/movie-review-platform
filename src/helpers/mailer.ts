import User from '@/models/UserSchema';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer'

export async function SendMail({email,emailType,userId}:any){

const hashedToken = await bcrypt.hash(userId.toString(),10)

if(emailType == "VERIFY"){
  await User.findByIdAndUpdate(userId,{verifyToken: hashedToken , verifyTokenExpiry: Date.now() + 3600000})
}
else if(emailType == "RESET"){
  await User.findByIdAndUpdate(userId,{forgotPasswordToken: hashedToken , forgotPasswordTokenExpiry: Date.now() + 3600000})
}

try {
   const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "daff1d76712fc0",
      pass: "35580b890827d0"
    }
  });
    // need to do for RESET
    const mailOptions = {
        from: "jawsjaban@gmail.com",
        to: email,
        subject: emailType == "VERIFY" ? 'verify your email':'reset account',
        html: `<p>Click <a href="localhost:3000/verifyemail/?token=${hashedToken}"> here </a> to ${emailType == "VERIFIED" ? "verify your email": "reset your password"} or copy paste this localhost:3000/verifyemail/?token=${hashedToken}><p>`
    }
    const mailResponse = await transporter.sendMail(mailOptions)
    return mailResponse
} catch (error:any) {
    throw new Error(error.message)
}
}