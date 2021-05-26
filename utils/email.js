const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  //service: 'gmail',
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "carlos.desenvolve@gmail.com",
    pass: "xy9z32040506"
  }
});
//console.log(transporter)
transporter.sendMail({
  from: "carlos.desenvolve@gmail.com",
  to: "carlos.desenvolve@gmail.com",
  subject: "Olá, teste de envio de e-mail com NodeJs.",
  text: "Teste e-mail",
  html: "Acesse meu site <a href='https://cadev.com.br'>E-mail</a> Top!"
}).then(message => {
  console.log(message);
}).catch(err => {
  console.log("Falhou " + err.message);
})