import nodemailer from "nodemailer";
import * as dotenv from 'dotenv';

const sendEmail = (formValues) => {
  const { name, email, phoneNo, inquirySubject, query } = formValues;
  dotenv.config();
  const {SMTP_HOST,SMTP_PORT, SMTP_EMAIL, SMTP_PASSWORD, SMTP_TO_EMAILS}  = process.env;
  if (!(SMTP_HOST && SMTP_PORT && SMTP_EMAIL && SMTP_PASSWORD && SMTP_TO_EMAILS && name && email && phoneNo && inquirySubject && query )) {
    return Promise.reject({status: 'fail', message: 'Few required parameters are missing.'});
  }

  let transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === '465', // true for 465, false for other ports
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  // send mail with defined transport object
  const emailObj = {
    from: `${name} <${email}>`, // sender address
    to: SMTP_TO_EMAILS, // list of receivers
    subject: `[FREE DEMAT INQUIRY] ${inquirySubject}`, // Subject line
    text: `${query} \nFrom: ${name} (+91-${phoneNo})`, // plain text body
    html: `<b>${inquirySubject}</b><br />${query}<br /><br /><br /><br /><hr /><b>Sender's details:</b> <br /><u>Name</u>:\t${name}<br /><u>Email</u>:\t${email}<br /><u>Phone No</u>:\t${phoneNo}`, // html body
  };
  return transporter.sendMail(emailObj);
}

export default sendEmail;