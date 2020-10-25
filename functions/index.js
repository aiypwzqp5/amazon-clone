const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51HcB7qEgLCvfDbHyvhYTyQR5smnpompr4dWlqhkXOIrCZdaoJWRlCGGHz2jBcODlTDe9bjRhL8UNZksWawepFcd900FdSXXUo2'
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'pln',
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

//http://localhost:5001/poradnik-6eee8/us-central1/api
