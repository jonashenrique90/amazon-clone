const functions = require('firebase-functions');
require('dotenv/config');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// API

// -App config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// -API routes
app.get('/', (request, response) => {
    response.status(200).send('hello world')
})
app.post('/payments/create', async (request, response) => {

    const { total } = request.query;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: 'usd',
        });
        response.status(201).send({
            clientSecret: paymentIntent.client_secret,
        })

    } catch (err) {
        console.log(err.message);
    }
})
// -Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/challenge-e9ec1/us-central1/api











// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
