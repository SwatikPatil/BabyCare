var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('../config/config');

var transport = {
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: 'testing6491@gmail.com',  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }


transporter.sendMail(mail, (err, data) => {
  if (err) {
    res.json({
      status: 'fail'
    })
  } else {
    res.json({
       status: 'success'
    })

    transporter.sendMail({
      from: "testing6491@gmail.com",
      to: email,
      subject: "Submission was successful",
      text: `Thank you for contacting us!\n\nForm details\nName: ${name}\n Email: ${email}\n Message: ${message}`
    }, function(error, info){
      if(error) {
        console.log(error);
      } else{
        console.log('Message sent: ' + info.response);
      }
    });
  }
})
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)
