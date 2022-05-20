const express = require('express');
const { spawn } = require('child_process');
const dotenv = require('dotenv');
const { verifyAdmin, verifyUserToken } = require('../helpers/validators');
const multer = require('multer');
const Ai = require('../models/ai.model');
const { convertWeights } = require('../helpers/ai-converters');
const { getDetectedCategories } = require('../helpers/categories');
const moment = require('moment');


dotenv.config();

const router = express.Router();

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/ai_backend/uploads');
    },
  
    filename: function (req, file, cb) {
      cb(null, Date.now() + ".png");
    },
});


const upload = multer({ 
    storage : storage,
  
});


let weightStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/ai_backend/weights');
    },
  
    filename: function (req, file, cb) {
      cb(null, "yolov4.weights");
    },
});


const weightUpload = multer({ 
    storage : weightStorage,
});


router.post('/detect',

upload.single('image'),

detect =(req, res)=>{

    const detect = spawn('python',[
        `./ai_backend/detect.py`,
        `--weights=./ai_backend/tflite/yolov4.tflite`,
        `--image=./public/ai_backend/uploads/${req.file.filename}`,
        `--output=./public/ai_backend/results/${req.file.filename}`,
        `--framework=tflite`,
    ]);
    
    
    const imageUrl = `${process.env.REQUEST_PROTOCOL || 'http' }://${process.env.REQUEST_BASE_URL || req.get('host')}/ai_backend/results/${req.file.filename}`;

    detect.stdout.on('data', (data)=>{
        const predictedAt = moment();
        const categories = getDetectedCategories({data, imageUrl, predictedAt});
       
        res.send({
            message: 'Successfully detect ingredients',
            data: {
                imageUrl,
                categories,
                predictedAt,
            },
        });
    });

    
    detect.stderr.on('data', (data)=>{
        console.log(`stderr: ${data}`);
    });
    
    detect.on('close', (code)=>{
        console.log(`child process exited with code ${code}`);
    });

},

);

router.post('/update-model',

weightUpload.single('weight'),

/** Validators */
verifyUserToken,
verifyAdmin,

function test(req, res){
    convertWeights({user: req.user, tiny: false});

    res.send({
        message: 'Processing the conversion, wait 1 minute and refresh the page Thank you.'
    })
},

);

router.get('/latest-model',

verifyUserToken,
verifyAdmin,

async function getLatestModel(req, res){

    const latestModel = await Ai.findOne({model_name :  'yolov4'}).sort({ createdAt: -1 });

    if(latestModel){
        res.send({
            message: 'Successfully find the latest model record',
            data: latestModel,
        })
    }else{
        res.status(400).send({
            message: 'Cannot find the latest model record',
        })
    }
}

);

module.exports = router;