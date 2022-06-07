const express = require('express');
const Feedback = require('../models/feedback.model');
const router = express.Router();

router.post('/send-message', 

async function sendMessage(req, res){

    const feedBack = new Feedback({
        ...req.body,
    });

    await feedBack.save();

    res.send({
        message: 'Successfully sent!',
    });
}

);

module.exports = router;