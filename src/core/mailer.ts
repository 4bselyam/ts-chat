import nodemailer from "nodemailer";

let transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e96686910d9e46",
    pass: "298a46c67b7daa"
  }
});

export default transport;
