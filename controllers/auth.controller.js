const mailService = require('../services/mail.service');

exports.register = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    await mailService.sendWelcomeMail(email);

    res.status(200).json({
      message: 'Registration successful. Email sent!'
    });

  } catch (error) {
    next(error);
  }
};