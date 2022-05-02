const express = require('express');
const { spawn } = require('child_process');
const dotenv = require('dotenv');
const { verifyAdmin, verifyUserToken } = require('../helpers/validators');
const multer = require('multer');
const Ai = require('../models/ai.model');
const { convertWeights } = require('../helpers/ai-converters');

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

router.post('/detect',

upload.single('image'),

/** Validators */
// verifyUserToken,
// verifyAdmin,

detect =(req, res)=>{

    /**
     * @author Eco
     * Python Detection
     * 
     * python 
     * detect.py 
     * --weights ./tflite/yolov4-tiny-416.tflite 
     * --size 416 --model yolov4 
     * --image ./uploads/ampalaya.jpg 
     * --output ./results/result.png 
     * --framework tflite
     */

    const detect = spawn('python',[
        `./ai_backend/detect.py`,
        `--weights=./ai_backend/tflite/yolov4.tflite`,
        `--image=./public/ai_backend/uploads/${req.file.filename}`,
        `--output=./public/ai_backend/results/${req.file.filename}`,
        `--framework=tflite`,
    ]);
    
    
    const imageUrl = `${process.env.REQUEST_PROTOCOL || 'http' }://${process.env.REQUEST_BASE_URL || req.get('host')}/ai_backend/results/${req.file.filename}`;

    detect.stdout.on('data', (data)=>{
        console.log(`stdout: ${data}`);
    });

    
    detect.stderr.on('data', (data)=>{
        console.log(`stderr: ${data}`);
    });
    
    detect.on('close', (code)=>{
        console.log(`child process exited with code ${code}`);

        res.send({
            message: 'Successfully detect ingredients',
            data: {
                imageUrl,
                ingredients : ['test'],
            },
        });
    });

},

);

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

router.post('/update-model',

weightUpload.single('weight'),

/** Validators */
verifyUserToken,
verifyAdmin,

function test(req, res){
    convertWeights(req.user);

    res.send({
        message: 'Processing the conversion, wait 1 minute and refresh the page Thank you.'
    })
},

// function convertToTensorflow(req, res, next){

//     // python save_model.py --weights ./weights/yolov4-tiny.weights --output ./tensorflow/yolov4-tiny-416 --input_size 416 --model yolov4 --tiny --framework tflite


//     const convertToTensorflow = spawn('python',[
//         `./ai_backend/save_model.py`,
//         `--weights=./public/ai_backend/weights/yolov4-tiny.weights`,
//         `--output=./ai_backend/tensorflow/yolov4-tiny-416`,
//         `--input_size=416`,
//         `--model=yolov4`,
//         `--tiny`,
//         `--framework=tflite`,
//     ]);

//     convertToTensorflow.stdout.on('data', (data)=>{
//         console.log(`stdout: ${data}`);
//     });

    
//     convertToTensorflow.stderr.on('data', (data)=>{
//         console.log(`stderr: ${data}`);
//     });
    
//     convertToTensorflow.on('close', (code)=>{
//         console.log(`child process exited with code ${code}`);
//         next();
//     });

// },

// function convertToTflite(req, res){

//     const convertToTflite = spawn('python',[
//         `./ai_backend/convert_tflite.py`,
//         `--weights=./ai_backend/tensorflow/yolov4-tiny-416`,
//         `--output=./ai_backend/tflite/yolov4-tiny-416.tflite`,
//     ]);


//     convertToTflite.stdout.on('data', (data)=>{
//         console.log(`stdout: ${data}`);
//     });

//     convertToTflite.stderr.on('data', (data)=>{
//         console.log(`stderr: ${data}`);
//     });
    
//     convertToTflite.on('close', async(code)=>{

//         const ai = new Ai({
//             email : req.user.email,
//             user_id : req.user._id,
//             model_name : 'yolov4-tiny-416',
//         });

//         await ai.save();

//         console.log(`child process exited with code ${code}`);

//         res.send({
//             message :'Successfully convert weights',
//         });
//     });

// },

);


router.get('/latest-model',

verifyUserToken,
verifyAdmin,

async function getLatestModel(req, res){

    const latestModel = await Ai.findOne({}).sort({ createdAt: -1 });

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