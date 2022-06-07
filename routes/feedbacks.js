const express = require('express');
const Feedback = require('../models/feedback.model');
const router = express.Router();
const { verifyAdmin, verifyUserToken } = require('../helpers/validators');

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


/** Get all the feedbacks */
router.get('/',

verifyUserToken,
verifyAdmin,


async function getAllFeedbacks(req, res){

  const feedbacks = await Feedback.find({}).sort({createdAt: -1});

  if(feedbacks){

    res.status(200).send({
      message: 'Successfully fetch feedbacks!',
      data: feedbacks,
    });

  }else{

    res.status(400).send({
      message: 'Cannot fetch feedbacks',
    });

  }

}

);


module.exports = router;