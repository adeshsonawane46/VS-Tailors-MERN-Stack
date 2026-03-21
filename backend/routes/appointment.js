const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");
const nodemailer = require("nodemailer");

let transporter = null;

// Create transporter only if SMTP exists
if (
  process.env.SMTP_HOST &&
  process.env.SMTP_PORT &&
  process.env.SMTP_USER &&
  process.env.SMTP_PASS
) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Verify SMTP connection
  transporter.verify((error) => {
    if (error) {
      console.log("SMTP Connection Error:", error);
    } else {
      console.log("SMTP Server Ready to Send Emails");
    }
  });
}

// SAFE sanitizer
const sanitize = (text) => {
  if (text === undefined || text === null) return "";
  return String(text)
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
};

// BOOK APPOINTMENT
router.post("/", async (req, res) => {
  try {
    let { name, email, contact, service, customService, quantity, notes } =
      req.body;

    // Sanitize inputs
    name = sanitize(name);
    email = sanitize(email);
    contact = sanitize(contact);
    service = sanitize(service);
    customService = sanitize(customService);
    quantity = sanitize(quantity);
    notes = sanitize(notes);

    // Validate required fields
    if (!name || !email || !contact || !service) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing",
      });
    }

    // Save appointment
    const appointment = new Appointment({
      name,
      email,
      contact,
      service,
      customService,
      quantity,
      notes,
    });

    await appointment.save();

    // Send response immediately
    res.status(200).json({
      success: true,
      message: "Appointment booked successfully!",
    });

    // Send emails in background
    if (transporter) {
      const serviceText = `${service}${
        customService ? " - " + customService : ""
      }`;

      // ADMIN EMAIL
      transporter
        .sendMail({
          from: `VS Tailors <${process.env.SENDER_EMAIL}>`,
          to: process.env.SENDER_EMAIL,
          subject: "New Appointment Booked",
          html: `
            <h3>New Appointment Details</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Contact:</b> ${contact}</p>
            <p><b>Service:</b> ${serviceText}</p>
            <p><b>Quantity:</b> ${quantity || "Not specified"}</p>
            <p><b>Notes:</b> ${notes || "None"}</p>
          `,
        })
        .catch((err) =>
          console.error("Admin email failed:", err.message)
        );

      // USER EMAIL
      transporter
        .sendMail({
          from: `VS Tailors <${process.env.SENDER_EMAIL}>`,
          to: email,
          subject: "🎉 Appointment Confirmed - VS Tailors",
          html: `
<div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">

  <h2 style="color:#d35400;">Hello ${name},</h2>

  <p>Thank you for booking an appointment with <strong>VS Tailors</strong>.</p>

  <p>Your appointment details:</p>

  <table style="border-collapse: collapse; width:100%; max-width:600px;">
    <tr>
      <td style="border:1px solid #ddd;padding:8px;">Service</td>
      <td style="border:1px solid #ddd;padding:8px;">${serviceText}</td>
    </tr>
    <tr>
      <td style="border:1px solid #ddd;padding:8px;">Quantity</td>
      <td style="border:1px solid #ddd;padding:8px;">${quantity || "Not specified"}</td>
    </tr>
    <tr>
      <td style="border:1px solid #ddd;padding:8px;">Contact</td>
      <td style="border:1px solid #ddd;padding:8px;">${contact}</td>
    </tr>
    <tr>
      <td style="border:1px solid #ddd;padding:8px;">Notes</td>
      <td style="border:1px solid #ddd;padding:8px;">${notes || "None"}</td>
    </tr>
  </table>

  <p style="margin-top:20px;">
    Our team will contact you shortly to confirm the details.
  </p>

  <p>
    Contact us anytime:
    <a href="mailto:vsuniformmanufacturer@gmail.com">
      vsuniformmanufacturer@gmail.com
    </a>
  </p>

  <p style="margin-top:20px;">
    Thank you for choosing <strong>VS Tailors</strong>.<br>
    <span style="color:#d35400;">Perfect Fit for Every Occasion!</span>
  </p>

  <hr>

  <p style="font-size:0.9rem;color:#888;">
    VS Tailors | Nashik, Maharashtra, India | +91 9822771573
  </p>

</div>
`,
        })
        .catch((err) =>
          console.error("User email failed:", err.message)
        );
    }
  } catch (err) {
    console.error("Appointment error:", err);

    res.status(500).json({
      success: false,
      message: "Server error while booking appointment",
    });
  }
});

module.exports = router;