const express = require('express');
const { spawn } = require('child_process');
const dotenv = require('dotenv');
const { verifyAdmin, verifyUserToken } = require('../helpers/validators');
const multer = require('multer');

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
  
    limits: {
      fileSize: 5 * 1024 * 1024,
    },
  
});

router.post('/detect',

upload.single('image'),

/** Validators */
verifyUserToken,
verifyAdmin,

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
        `--weights=./ai_backend/tflite/yolov4-tiny-416.tflite`,
        `--image=./public/ai_backend/uploads/${req.file.filename}`,
        `--output=./public/ai_backend/results/${req.file.filename}`,
        `--framework=tflite`,
    ]);

    detect.stdout.on('data', (data)=>{
        res.send({
            message: 'Successfully detect ingredients',
            imageUrl: 'http://localhost:3000/ai_backend/results/' + req.file.filename,
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

module.exports = router;