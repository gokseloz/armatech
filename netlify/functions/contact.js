import { Resend } from "resend";

export async function handler(event) {
  console.log("event", event);

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  const { name, email, message } = JSON.parse(event.body);

  console.log("Name:", name);

  const resend = new Resend("re_PcxNN4qT_8AhGDUG4jj1noW186msVjNbF");

  console.log("Sending email...");

  await resend.emails
    .send({
      from: "onboarding@resend.dev",
      to: "armatechemail@gmail.com",
      subject: "Hello World",
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    })
    .then((response) => {
      console.log("Email sent!", response);
    })
    .catch((error) => {
      console.error("Error sending email", error);
    });
}
