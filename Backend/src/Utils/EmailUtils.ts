import nodemailer,{Transporter} from 'nodemailer';
import { SendEmailClass, WritetoErrorFile } from './ErrorLogUtils';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
require('dotenv').config();


// Define the transporter with SMTP configuration
const createTransporter = () => {
    const Transport :SMTPTransport.Options ={
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT),
        secure: false,  // Adjust based on your SMTP settings
        auth: {
            user: process.env.FROM_EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    } 
    return nodemailer.createTransport(Transport);
};
// Send email function
const sendEmailToAdmin = async ({ to, subject, text, html }:SendEmailClass) => {
    const transporter = createTransporter();

    const mailOptions = {
        from: process.env.FROM_EMAIL_USER,  // Replace with your email address
        to: to || process.env.TO_EMAIL_USER,
        subject: subject,
        text: text,
        html: html,  // HTML content of the email (optional)
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return info;
    } catch (error:any) {
        WritetoErrorFile(error,__filename,'sendEmailToAdmin');
        // throw error;
    }
};

export { sendEmailToAdmin };
