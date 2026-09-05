import { BrevoClient } from "@getbrevo/brevo";
import dotenv from "dotenv";

dotenv.config();

const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY,
});

export const sendContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields",
      });
    }

    await brevo.transactionalEmails.sendTransacEmail({
      subject: `New Portfolio Contact Message from ${name}`,

      sender: {
        name: "Portfolio Contact Form",
        email: process.env.BREVO_SENDER_EMAIL,
      },

      to: [
        {
          email: process.env.BREVO_RECEIVER_EMAIL,
        },
      ],

      replyTo: {
        email: email,
        name: name,
      },

      textContent: `
You received a new message from your portfolio contact form.

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Brevo email error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send message. Please try again later.",
    });
  }
};