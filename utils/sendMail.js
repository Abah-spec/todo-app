const nodeMailer = require("nodemailer")

require ("dotenv").config()

const sendEmail = async (options)=>{

const transporter = nodeMailer.createTransport(
    {   
      host: 'smtp.gmail.com',
      port: 587,
      secure:false,
      service :process.env.SERVICE,
      rejectUnauthorized:false,
    
auth: {
         user:process.env.MAIL_ID,
          pass:process.env.MAIL_PASSWORD,
        },
      }
   
)

let mailOptions = {
    from: process.env.MAIL_ID,
    to: options.email,
    subject: options.subject,
    // text: options.message
  html:options.html
//  
}
  await transporter.sendMail(mailOptions)

}

module.exports = sendEmail

