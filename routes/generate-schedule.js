const express = require('express');
const Recipe = require('../models/recipe.model');
const moment = require('moment');

const router = express.Router();

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

router.post('/',

async function generateSchedule(req, res){
    const { categories, clientCurrentTime } = req.body;

    const categoriesArrayJson = categories;
    
    const categoriesNames = []; 

    for(let i = 0; i < categoriesArrayJson.length; i++){
        categoriesNames.push(categoriesArrayJson[i].name);
    }

    let recipes = await Recipe.find({ categories: { "$in" : categoriesNames} });

    const recipeSchedules = [];

    const daysToSchedule = 3;
    const time = [
        {
            'hours' :  7,
            'minutes' : 0,
        },
        {
            'hours' :  12,
            'minutes' : 0,
        },
        {
            'hours' :  18,
            'minutes' : 0,
        }
    ];

    const originalClientTime = moment.utc(clientCurrentTime);
    const incrementalTime = moment.utc(clientCurrentTime);
    const createdAt = moment.utc(clientCurrentTime);

    recipes = shuffle(recipes);
    
    let recipeCounter = 0;

    for(let i = 0; i < daysToSchedule; i++){

        for(let x = 0; x < time.length; x++){

            if(recipeCounter >= recipes.length){
                break;
            }

            incrementalTime.set(time[x]);

            if(incrementalTime.isAfter(originalClientTime)){

                const recipeSchedule = {
                    recipe : recipes[recipeCounter],
                    start : incrementalTime.format(),
                    end : incrementalTime.add(1, 'hours').format(),
                    createdAt : createdAt.format(),
                }; 
                recipeSchedules.push(recipeSchedule);
                recipeCounter++;
            }
        }



        incrementalTime.add(1, 'days');
    }



    res.send({
        message:'Successfully generate schedule!',
        data: recipeSchedules,
    });
}

);

module.exports = router;