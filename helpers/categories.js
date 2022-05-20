
const fs = require("fs");
const moment = require('moment');


function getDetectedCategories({data, imageUrl, predictedAt}){
    try{
        const {scores, classes} = JSON.parse(data);
        const trimmedScores = scores.filter(val => val != 0);
        const sliceClassesIndex = classes.slice(0, trimmedScores.length);

        const content = fs.readFileSync("ai_backend/data/classes/kubo.names", 'utf-8');
        const kuboClasses = content.toString().split("\n");

        const categories = sliceClassesIndex.map((val, index) => {

            return {
                "name" : kuboClasses[val],
                "accuracy": trimmedScores[index],
                "predictedAt": predictedAt,
                "imageUrl": imageUrl,
            }
        });

        return categories;
    }catch(e){
        console.log('Not parsable to json');
    }
}

module.exports = {
    getDetectedCategories,
};