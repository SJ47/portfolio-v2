const sendGridMail = require("@sendgrid/mail");

const handler = async (event) => {
  try {
    const { name, email, message } = JSON.parse(event.body).payload.data;

    // console.log(`name: ${name}, email: ${email}, message: ${message}`);

    sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);
    const html = `
      <div> 
         Hi ${name}! <br><br>
         Thanks for getting in touch.
         I have received your message
         and look forward to reading it.
         I'll be in touch in soon.
         <br><br>
         Cheers <br>
         Scott Johnston
      </div>
    `;
    const mail = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "I have received your message",
      html,
    };
    await sendGridMail.send(mail);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent" }),
    };
  } catch (error) {
    return { statusCode: 422, body: String(error) };
  }
};

module.exports = { handler };