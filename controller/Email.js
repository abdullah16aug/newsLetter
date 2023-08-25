import nodemailer from 'nodemailer'
import { getAllUserEmails } from './User.js';
 
export const sendEmail=async(req,res)=>{
  // const {body}=req.body
  const {subject}=req.body
  console.log(subject)
  try {
    const userEmails =await getAllUserEmails()
    console.log('All user emails:', userEmails);
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'willis12@ethereal.email',
            pass: 'xwjjzVjzaMYCzqPmy2'
        }
    });
    // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Abdullah Asad 👻" <abdullah16aug@gmail.com>', // sender address
    to: userEmails.join(','), // list of receivers
    subject: `${subject} 😘`, // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
res.status(200).json(info)
  } catch (error) {
    res.status(500).json({"message":error.message})
  }
}