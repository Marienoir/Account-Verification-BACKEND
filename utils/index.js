const nodemailer = require('nodemailer')
const dotenv = require('dotenv')

dotenv.config()
const verifyEmail = async (req, res) => {
  const {
    name,
    email
  } = req
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${process.env.USER_NAME}`,
      pass: `${process.env.PASS_WORD}`
    }
  });
  let mailOptions = {
    from: 'okosunmaryeghonghon@gmail.com',
    to: email,
    subject: 'Verify your Email Address',
    html: `<h2>Hello, ${name}</h2>
    <p>Thanks for signing up with us. <br><br> You must follow this link to activate your account and have access to verifying your account number.<br><br> Click <a href="${res}">here</a> to verify your email address</p>
    <br><h3>Best Regards,</h3><p>Verification Team.</p>
    `
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('not sent', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}

module.exports = verifyEmail