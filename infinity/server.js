const express = require('express')
const bodyParser = require('body-parser')
const fireStore = require('@google-cloud/firestore')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const firestore = new fireStore({
    projectId: 'user-message-392123',
    keyFilename : 'C:/Users/begzod/OneDrive/Desktop/bd_web/infinity/database'
})

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'begzod0320@gmail.com',
        pass: '321R@veni'
    }
})

app.post('/submit', (req, res) => {
    const {name, email, message} = req.body

    firestore.collection('messages').add({
        name,
        email,
        message
    }).then(docRef => {
        console.log('Document writting with ID: ', docRef.id)
        transporter.sendMail({
            from: 'begzod0320@gmail.com',
            to: 'begzodbitski@gmail.com',
            subject : 'New contact message',
            text: 'You recieved a new message from ${name} (${mail}): ${message}'
        }).then(info =>{
            console.log('Email sent: ' + info.response)
            res.sendStatus(200)
        }).catch(err => {
            console.error('Error sending email ', err)
            res.sendStatus(500)
        })
    }).catch(err => {
        console.log('Error adding document: ', err)
        res.sendStatus(500)
    })
})

app.listen(300, ()=> console.log('server starter on port 3000'))