const express = require('express');
const { spawn } = require('child_process');
const dotenv = require('dotenv');
const { verifyAdmin, verifyUserToken } = require('../helpers/validators');
const multer = require('multer');
const Ai = require('../models/ai.model');
const { convertWeights } = require('../helpers/ai-converters');

const fs = require("fs");
const content = fs.readFileSync("ai_backend/data/classes/kubo.names");
const kuboClasses = content.toString().split("\r\n");


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
      cb(null, "yolov4-tiny.weights");
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
        `--weights=./ai_backend/tflite/yolov4-tiny.tflite`,
        `--image=./public/ai_backend/uploads/${req.file.filename}`,
        `--output=./public/ai_backend/results/${req.file.filename}`,
        `--framework=tflite`,
    ]);
    
    
    const imageUrl = `${process.env.REQUEST_PROTOCOL || 'http' }://${process.env.REQUEST_BASE_URL || req.get('host')}/ai_backend/results/${req.file.filename}`;

    detect.stdout.on('data', (data)=>{
        try{
            const {scores, classes} = JSON.parse(data);
            const trimmedScores = scores.filter(val => val != 0);
            const sliceClassesIndex = classes.slice(0, trimmedScores.length);
            const categories = sliceClassesIndex.map((val, index) => ({
                "name" : kuboClasses[val],
                "accurracy": trimmedScores[index],
            }));
            

            res.send({
                message: 'Successfully detect ingredients',
                data: {
                    imageUrl,
                    categories,
                },
            });

        }catch(e){
            console.log('Not parsable to json');
        }
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
    convertWeights({user: req.user, tiny: true});

    res.send({
        message: 'Processing the conversion, wait 1 minute and refresh the page Thank you.'
    })
},

);

router.get('/latest-model',

verifyUserToken,
verifyAdmin,

async function getLatestModel(req, res){

    const latestModel = await Ai.findOne({model_name :  'yolov4-tiny'}).sort({ createdAt: -1 });

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