const express = require('express');
const multer = require('multer');
const Recipe = require('../models/recipe.model');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/recipes');
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + ".png");
  },
});

const upload = multer({ storage : storage });

router.get('/single/:id',

  async function getRecipe(req, res){

    const _id = req.params.id;

    const recipe = await Recipe.findById(_id);

    if(recipe){

      res.send({
        message: 'Successfully fetch recipe!',
        data: recipe,
      });

    }else{

      res.status(401).send({
        message: 'Cannot fetch recipe'
      });
    }
    
  }

);


router.get('/',

  async function getAllRecipe(req, res){

    const recipes = await Recipe.find({});

    if(recipes){
  
      res.send({
        message: 'Successfully fetch recipes!',
        data: recipes,
      });
  
    }else{
  
      res.status(401).send({
        message: 'Cannot fetch recipes',
      });
  
    }

  }

);


router.post('/add', 

/** Upload to this backend */
upload.single('displayPhoto'),

async function createRecipe(req, res){

	const body = req.body;
  const fileUrl = `${req.protocol}://${req.get('host')}/images/recipes/${req.file.filename}`;

	const newRecipe = new Recipe({
		name: body.name,
		description: body.description,
		reference: body.reference,
		ingredients: JSON.parse(body.ingredients),
		displayPhoto: fileUrl,
	});

	const createdRecipe = await newRecipe.save();

	res.send({
		message: 'Successfully upload image!',
		data: createdRecipe,
	});

}

);

module.exports = router;