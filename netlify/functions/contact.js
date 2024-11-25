import { Resend } from "resend";

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  const { name, email, message } = JSON.parse(event.body);

  const resend = new Resend("re_PcxNN4qT_8AhGDUG4jj1noW186msVjNbF");

  resend.emails.send({
    from: "goksel_ozkazanc_08@hotmail.com",
    to: "armatechemail@gmail.com",
    subject: "Hello World",
    html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
  });

}
