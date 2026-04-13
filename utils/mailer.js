const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});



exports.sendMail = async (options) => {
  try {
    const info = await transporter.sendMail(options);
    console.log( "user email" , process.env.EMAIL_USER , "email", process.env.EMAIL_PASS);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Email error:', error);
    throw error;
  }
};