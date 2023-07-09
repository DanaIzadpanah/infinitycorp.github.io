/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });



const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');

admin.initializeApp();

sgMail.setApiKey('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');

exports.sendMail = functions.database.ref('/messages').onCreate((snapshot, context) => {
    const data = snapshot.val();
    const msg = {
        to: 'example@gmail.com',
        from: 'danaalgoexpert@gmail.com', // Use the email address or domain you verified with SendGrid
        subject: 'New message from customer',
        text: `Message: ${data.message}\nName: ${data.name}\nPhone: ${data.phone}`,
    };
    return sgMail.send(msg).then(() => {
        console.log('Email sent');
    }).catch((error) => {
        console.error(error);
    });
});

