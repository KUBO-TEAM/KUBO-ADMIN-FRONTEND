

const { spawn } = require('child_process');
const Ai = require('../models/ai.model');

async function convertWeights(user){
    convertToTensorflow(user);
}
 

function convertToTensorflow(user){

    const convertToTensorflow = spawn('python',[
        `./ai_backend/save_model.py`,
        `--weights=./public/ai_backend/weights/yolov4.weights`,
        `--output=./ai_backend/tensorflow/yolov4`,
        `--input_size=416`,
        `--model=yolov4`,
        `--framework=tflite`,
    ]);

    convertToTensorflow.stdout.on('data', (data)=>{
        console.log(`stdout: ${data}`);
    });

    
    convertToTensorflow.stderr.on('data', (data)=>{
        console.log(`stderr: ${data}`);
    });
    
    convertToTensorflow.on('close', (code)=>{
        console.log(`child process exited with code ${code}`);

        convertToTflite(user);
    });

}

async function convertToTflite(user){

    const convertToTflite = spawn('python',[
        `./ai_backend/convert_tflite.py`,
        `--weights=./ai_backend/tensorflow/yolov4`,
        `--output=./ai_backend/tflite/yolov4.tflite`,
    ]);


    convertToTflite.stdout.on('data', (data)=>{
        console.log(`stdout: ${data}`);
    });

    convertToTflite.stderr.on('data', (data)=>{
        console.log(`stderr: ${data}`);
    });
    
    convertToTflite.on('close', async(code)=>{

        const ai = new Ai({
            email : user.email,
            user_id : user._id,
            model_name : 'yolov4',
        });

        await ai.save();

        console.log(`child process exited with code ${code}`);

        console.log('Succesfully created the model!!');
    });

}

module.exports = {
    convertWeights,
}