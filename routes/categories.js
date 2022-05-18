
const fs = require("fs");
const moment = require('moment');


function getDetectedCategories({data, imageUrl}){
    try{
        const {scores, classes} = JSON.parse(data);
        const trimmedScores = scores.filter(val => val != 0);
        const sliceClassesIndex = classes.slice(0, trimmedScores.length);

        const predictedAt = moment();

        const content = fs.readFileSync("ai_backend/data/classes/kubo.names");
        const kuboClasses = content.toString().split("\r\n");

        const categories = sliceClassesIndex.map((val, index) => ({
            "name" : kuboClasses[val],
            "accuracy": trimmedScores[index],
            "predictedAt": predictedAt,
            "imageUrl": imageUrl,
        }));

        return categories;
    }catch(e){
        console.log('Not parsable to json');
    }
}

module.exports = {
    getDetectedCategories,
};