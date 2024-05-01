const config = require("./config");
const nodemailer = require("nodemailer");
const confirmationMessage = require("./sendConfirmationEmail");

async function sendEmail(message) {
  try {
    const transporter = nodemailer.createTransport({
      host: config.EMAIL_HOST,
      port: config.EMAIL_PORT,
      secure: config.EMAIL_SECURE, // use SSL
      auth: {
        user: config.EMAIL_USER,
        pass: config.EMAIL_PASS,
      },
    });

    transporter.verify((error, success) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to send email");
      }
    });

    const composeMessage = {
      from: config.EMAIL_USER,
      to: message.email,
      subject: "Welcome to My Portfolio",
      html: confirmationMessage(message.name),
    };

    transporter.sendMail(composeMessage, (error, info) => {
      if (error) {
        console.log("Email Sent failed", error);
        return error;
      } else {
        console.log("Email sent sucessfully");
        return info;
      }
    });
  } catch (error) {
    console.log("Email not sent");
    console.log(error);
  }
}

module.exports = sendEmail;
