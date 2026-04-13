const mailer = require('../utils/mailer');

exports.sendWelcomeMail = async (email) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Welcome 🎉',
    html: `
      <h2>Welcome!</h2>
      <p>Thanks for registering with us.</p>
    `
  };

  await mailer.sendMail(mailOptions);
};