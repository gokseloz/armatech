import { Resend } from "resend";

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  const { name, email, message } = JSON.parse(event.body);

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);

  console.log("Sending email...");

  try {
    const response = await resend.emails.send({
      from: "no-reply@resend.dev",
      to: ["armatech31@gmail.com", "goksel_ozkazanc_08@hotmail.com"],
      reply_to: email,
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Email sent successfully:", response);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send email.", error }),
    };
  }
}
