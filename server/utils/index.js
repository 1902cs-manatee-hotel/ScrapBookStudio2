const nodemailer = require("nodemailer")

 function sendScrapbookEmail(email, userFirstName, userLastName, scrapbookid, pageid) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    // port: 8080,
    auth: {
      user: 'scrapbookfs@gmail.com',
      pass: 'alwaysbecoding'
    }
  });
  const mailOptions = {
    from: 'scrapbookfs@gmail.com',
    to: email,
    subject: `${userFirstName} ${userLastName} wants to share their scrapbook with you!`,
    html: `<h1>${userFirstName} made a scrapbook using ScrapBook Studio<h1>
    <h3>And they want to share it with you!</h3>
    <h3>View Here: http://scrapbook-studio.herokuapp.com/staticcanvas/${scrapbookid}/${pageid}</h3>`
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = sendScrapbookEmail
