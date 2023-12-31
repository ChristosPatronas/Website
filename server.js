const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3000, () => console.log("Server is Running"));
// console.log(process.env.EMAIL_USER);
// console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "#",
    pass: "#",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready");
  }
});

router.post("/Contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const password = req.body.password;
  const phone = req.body.phone;
  const message = req.body.message;
  const email = {
    from: name,
    to: "cris.4200914@gmail.com",
    subject: "Contact form From Portfolio",
    html: `<p>Name:${name}</p>
        <p>Email:${email}</p>
        <p>Phone:${phone}</p>
        <p>Message:${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message sent" });
    }
  });
});
