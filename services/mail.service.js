const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.sendWelcomeMail = async (email) => {
  try {
    const response = await resend.emails.send({
      from: 'karthicksolaroffical@gmail.com',
      to: email,
      subject: 'Welcome 🎉',
      html: `
        <h2>Welcome!</h2>
        <p>Thanks for registering with us.</p>
      `
    });

    console.log('Email sent:', response);

  } catch (error) {
    console.error('Email error:', error);
    throw error;
  }
};