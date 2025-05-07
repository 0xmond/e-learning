import * as nodemailer from 'nodemailer';

export async function sendEmail(sendEmailOptions: nodemailer.SendMailOptions) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    
      auth: {
        user: 'mohamed.salah199988@gmail.com',
        pass: 'lflcznqdeimlfcuv',
      },
   
    secure: false,
    tls: {
      rejectUnauthorized: false, // to skip SSL verfication
    },
  });

  return await transporter.sendMail(sendEmailOptions);
}
