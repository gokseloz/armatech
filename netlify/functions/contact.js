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

  const resend = new Resend("re_PcxNN4qT_8AhGDUG4jj1noW186msVjNbF");

  console.log("Sending email...");

  await resend.emails
    .send({
      from: email,
      to: "armatechemail@gmail.com",
      subject: `New message from ${name}`,
      html: `<p>${message}</p>`,
    })
    .then((response) => {
      console.log("Email sent!", response);
    })
    .catch((error) => {
      console.error("Error sending email", error);
    });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Email sent!" }),
  };
}
