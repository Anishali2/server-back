// create a mailer function using nodemailer
import ejs from "ejs";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

const renderTemplate = (data: object, relativePath: string) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const mailTemplate = path.join(__dirname, "../views", `${relativePath}.ejs`);
  return ejs.renderFile(mailTemplate, data);
};

export const mailer = async (email: string, subject: string, template: any) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: "noreply@gmail.com",
      // from: process.env.GMAIL_USER,
      to: email,
      subject,
      html: template ? template : null,
    };

    await transporter.sendMail(mailOptions);
    return {
      status: true,
      message: "Mail sent successfully",
    };
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export const forgotPasswordMail = async (data: {
  email: string;
  token: string;
  name: string;
}) => {
  try {
    const { email, token, name } = data;
    const subject = "Password Reset";
    const link = `${process.env.CLIENT_RESET_PASSWORD_URL}?resetPasswordToken=${token}`;
    const template = await renderTemplate({ link, name }, "forgot-password");
    const resp = await mailer(email, subject, template);
    return resp;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
