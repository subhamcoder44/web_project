const nodemailer = require("nodemailer");
require("dotenv").config();
const sendEmail = async (email, body, title) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    let info = await transporter.sendMail({
      from: `Eommerce <${process.env.SMTP_USER}>`,
      to: email,
      subject: title,
      html: body,
    });
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    logger.error("Error in sending email", error);
  }
};
module.exports = sendEmail;
