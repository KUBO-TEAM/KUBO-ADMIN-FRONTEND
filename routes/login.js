const express = require('express');
const bcrypt = require('bcryptjs');
const { generateUserToken } = require('../bin/validators');
const { check, validationResult } = require('express-validator');

const User = require('../models/user.model');
const router = express.Router();

router.post('/',

check('email','Empty email').not().isEmpty(),
check('password', 'Empty password').not().isEmpty(),

function (req, res, next){
    const errors = validationResult(req);

    if(errors.isEmpty()){
        next();
    }else{
        res.status(401).send({
            message: 'Missing input fields please double check...',
            errors: errors.array(),
        })
    }
},

async function loginUser(req, res, next){
    const {email, password} = req.body;


    const user = await User.findOne({email});

    if(user){
        if(bcrypt.compareSync(password, user.password)){
            
            res.send({
                message: 'Successfully login user...',
                token : generateUserToken(user),
            });
        }else{
            res.status(401).send({message: 'Password doesnt match please try again...'});
        }
    }else{
        res.status(401).send({ message: 'Email not found please try again...'});
    }
}

);

module.exports = router;