const mailgun = require("mailgun.js");
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY
});

mg.messages
  .create(process.env.MAILGUN_DOMAIN, {
    from: "Some Name <some.email@some.domain>",
    to: ["boban.acimovic@gmail.com"],
    subject: "Hello",
    text: "Testing some Mailgun awesomness!",
    html: "<h1>Testing some Mailgun awesomness!</h1>"
  })
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error