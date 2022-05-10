

const { spawn } = require('child_process');
const Ai = require('../models/ai.model');
const { notify } = require('./notification');
const moment = require('moment');

async function convertWeights({user, tiny}){
    convertToTensorflow({user,tiny});
}
 

function convertToTensorflow({user,tiny}){
    
    let command = [
        `./ai_backend/save_model.py`,
        `--weights=./public/ai_backend/weights/yolov4.weights`,
        `--output=./ai_backend/tensorflow/yolov4`,
        `--input_size=416`,
        `--model=yolov4`,
        `--framework=tflite`,
    ];

    if(tiny){
        command = [
            `./ai_backend/save_model.py`,
            `--weights=./public/ai_backend/weights/yolov4-tiny.weights`,
            `--output=./ai_backend/tensorflow/yolov4-tiny`,
            `--input_size=416`,
            `--model=yolov4`,
            `--tiny`,
            `--framework=tflite`,
        ];
    }

    const convertToTensorflow = spawn('python', command);

    convertToTensorflow.stdout.on('data', (data)=>{
        console.log(`stdout: ${data}`);
    });

    
    convertToTensorflow.stderr.on('data', (data)=>{
        console.log(`stderr: ${data}`);
    });
    
    convertToTensorflow.on('close', (code)=>{
        console.log(`child process exited with code ${code}`);

        convertToTflite({user, tiny});
    });

}

async function convertToTflite({user,tiny}){
    
    let command = [
        `./ai_backend/convert_tflite.py`,
        `--weights=./ai_backend/tensorflow/yolov4`,
        `--output=./ai_backend/tflite/yolov4.tflite`,
    ];

    if(tiny){
        command = [
            `./ai_backend/convert_tflite.py`,
        `--weights=./ai_backend/tensorflow/yolov4-tiny`,
        `--output=./ai_backend/tflite/yolov4-tiny.tflite`,
        ];
    }


    const convertToTflite = spawn('python', command);


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
            model_name : tiny ? 'yolov4-tiny' : 'yolov4',
        });

        const aiCreated = await ai.save();

        console.log(`child process exited with code ${code}`);

        console.log('Succesfully created the model!!');

        notify({
            title: 'Smart recipe selection has been improved!',
            message: `As of ${moment(aiCreated.createdAt).format('MMMM Do YYYY, h:mm:ss a')} we updated the ai model`
        });
    });

}

module.exports = {
    convertWeights,
}