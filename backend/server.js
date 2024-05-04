const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ashahab158@gmail.com',
    pass: 'tvfo pgjz pnly zvnk'
  }
});

// API endpoint to send email
app.post('/api/sendEmail', (req, res) => {
    debugger;
  const { name, email, message } = req.body;

  // Email content
  const mailOptions = {
    from: email,
    to: 'ashahab158@gmail.com',
    subject: 'New Message from Your Website',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
