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

  const resend = new Resend("re_dDSax43w_5uP28WXZ1ZH8z1ZL2sz5EhH3");

  console.log("Sending email...");

  await resend.emails
    .send({
      from: "updates.armatech.com",
      to: "armatechemail@gmail.com",
      reply_to: email,
      subject: `New message from ${name}`,
      html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
    })
    .then((response) => {
      console.log("Email sent!", response);
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Email sent!" }),
      };
    })
    .catch((error) => {
      console.error("Error sending email", error);
    });
}
