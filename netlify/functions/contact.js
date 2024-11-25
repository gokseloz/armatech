import { createTransport } from "nodemailer";

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  const { name, email, message } = JSON.parse(event.body);

  // Configure the Nodemailer transporter for Outlook
  const transporter = createTransport({
    host: "smtp.office365.com", // Outlook SMTP server
    port: 587, // Port for TLS
    secure: false, // Use TLS (not SSL)
    auth: {
      user: process.env.REACT_APP_OUTLOOK, // Use your Outlook email
      pass: process.env.REACT_APP_OUTLOOK_PASS, // Use your Outlook password
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`, // Sender details
    to: process.env.REACT_APP_OUTLOOK, // Your Outlook email address
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send email." }),
    };
  }
}
