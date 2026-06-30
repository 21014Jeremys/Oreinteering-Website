const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "orienteering.online.server@gmail.com",
        pass: "rvkn vgnf yppt exar"
      }
    });

    await transporter.sendMail({
      from: "orienteering.online.server@gmail.com",
      to: "21014@jpc.school.nz",
      subject: `New message from ${name}`,
      text: `
        Name: ${name}
        Email Address: ${email}
        ${message}
      `
    });

    /*res.send("Email sent!");*/
  } catch (err) {
    console.error(err);
    res.status(500).send("Error sending email");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));