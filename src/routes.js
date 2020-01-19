const { Router } = require('express');
const nodemailer = require('nodemailer');

const config = require('./config/config');

const routes = Router();

const transporter = nodemailer.createTransport(config);

routes.post('/email', (req, res) => {
  const mail = {
    from: 'jjalves96@gmail.com',
    to: 'igorteixeira94@gmail.com',
    subject: 'Testando o nodemailer',
    text: 'Aqui tem um texto de exemplo'
  }

  transporter.sendMail(mail, (error, info) => {
    if(error) {
      return res.status(500).send('Falhou o envio');
    }

    return res.status(200).send('Email foi enviado');
  })
  
});

module.exports = routes;