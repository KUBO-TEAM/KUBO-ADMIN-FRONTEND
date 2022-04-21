const express = require('express');
const { spawn } = require('child_process');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();

router.get('/detect',

(req, res)=>{


    /**
     * @author Eco
     * Python Detection Script
     * 
     * python 
     * detect.py 
     * --weights ./tflite/yolov4-tiny-416.tflite 
     * --size 416 --model yolov4 
     * --image ./uploads/ampalaya.jpg 
     * --output ./results/result.png 
     * --framework tflite
     */

    const AI_BACKEND_PATH = process.env.AI_BACKEND_PATH

    const detect = spawn('python',[
        `./ai_backend/detect.py`,
        `--weights=./ai_backend/tflite/yolov4-tiny-416.tflite`,
        `--image=./ai_backend/uploads/ampalaya.jpg `,
        `--output=./ai_backend/results/result.png `,
        `--framework=tflite`,
    ]);

    detect.stdout.on('data', (data)=>{
        console.log(`stdout: ${data}`);
    });

    
    detect.stderr.on('data', (data)=>{
        console.log(`stderr: ${data}`);
    });
    
    detect.on('close', (code)=>{
        console.log(`child process exited with code ${code}`);
    });


    res.send({
        message: 'Successfully call detect!',
    });
},

);

module.exports = router;