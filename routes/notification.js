const express = require('express');
const { verifyUserToken, verifyAdmin } = require('../helpers/validators');
const { check, validationResult } = require('express-validator');
const { notify } = require('../helpers/notification');
const Notification = require('../models/notification.model');

const router = express.Router();


/** Get all notifications */
router.get('/',

async function getAllNotifications(req, res){
    const notifications = await Notification.find({}).sort({createdAt: -1});

    res.send({
        message: 'Succesfully fetch notifications',
        data: notifications,
    });
}

);


/** Create notification */
router.post('/',

verifyUserToken,
verifyAdmin,

check('title').not().isEmpty(),
check('message').not().isEmpty(),

(req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      res.status(400).send({
        message: errors.array(),
      });
    }else{
      next();
    }
},

async function createNotification(req, res){
    const { title, message } = req.body;

    await notify({
        title,
        message,
    });

    res.send({
        message: 'Successfully notify users!'
    });
}

);

module.exports = router;