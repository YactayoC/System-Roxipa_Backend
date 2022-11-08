import { createTransport } from 'nodemailer';

export const sendEmail = async (email: string, fullname: string, key: string | null) => {
  const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  await transporter.sendMail({
    from: 'ROXIPA S.A.C',
    to: email,
    subject: 'Check your ROXIPA account',
    text: 'Check your ROXIPA account',
    html: `<p>Hello: ${fullname}, check your ROXIPA account.</p>
            <p>Your account is ready, you only have to check it in the following link: <a href="${process.env.FRONTEND_URL}/api/auth/confirm/${key}">Check account</a> </p>
            <p>If you didn't create this account, you can ignore this message</p>
        `,
  });
};
