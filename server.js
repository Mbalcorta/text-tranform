const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const quote = require('./quote.js');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(quote());
});

app.post('/sms', (req, res) => {
  console.log('response from text ', req.body);
  const twiml = new MessagingResponse();

  twiml.message(req.body);

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

const port = process.env.PORT || 8008;

http.createServer(app).listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});