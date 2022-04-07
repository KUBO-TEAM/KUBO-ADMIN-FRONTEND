const express = require('express');
const multer = require('multer');
const Recipe = require('../models/recipe.model');
const { verifyAdmin, verifyUserToken } = require('../helpers/validators');

const { check, validationResult } = require('express-validator');

const fs = require('fs');

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

/** Get single recipe */
router.get('/:id',

/** Validations */
verifyUserToken,
verifyAdmin,

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

/** Get all the recipes */
router.get('/',

/** Validations */
verifyUserToken,
verifyAdmin,

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

/** Add Recipe */
router.post('/', 

/** Upload to this backend */
upload.single('displayPhoto'),

/** Validations */
check('name').not().isEmpty(),
check('description').not().isEmpty(),
check('reference').not().isEmpty(),
check('ingredients').not().isEmpty(),

(req, res, next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    res.status(400).send({
      message: errors.array(),
    });
  }else{
    next();
  }
},

/** Validations */
verifyUserToken,
verifyAdmin,


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

/** Remove a recipe */
router.delete('/:id',

/** Validations */
verifyUserToken,
verifyAdmin,

async function deleteRecipe(req, res){
  const { id } = req.params;

  const recipe = await Recipe.findByIdAndDelete(id);
  if(recipe){
    const displayPhoto = `public/images/recipes/${recipe.displayPhoto.substring(recipe.displayPhoto.lastIndexOf('/' + 1))}`;


    fs.stat(displayPhoto, function(err, stat){
      if(err === null){
        fs.unlinkSync(displayPhoto);
      }
    });

    res.send({
      message: 'Delete successfully',
    })

  }else{
    res.status(401).send({
      message: 'Delete unsuccessful',
    })
  }
},

);

/** Update recipe */
router.put('/:id',

/** Upload to this backend */
upload.single('displayPhoto'),

/** Validations */
check('name').not().isEmpty(),
check('description').not().isEmpty(),
check('reference').not().isEmpty(),
check('ingredients').not().isEmpty(),

(req, res, next) => {
  const errors = validationResult(req);

  if(!errors.isEmpty()){
    res.status(400).send({
      message: errors.array(),
    })
  }else{
    next();
  }
},

verifyUserToken,
verifyAdmin,

async function updateRecipe(req, res, next){
  const { id } = req.params;

  const recipe = await Recipe.findOneAndUpdate({
    _id: id,
  },{
    ...req.body,

    ingredients: JSON.parse(req.body.ingredients),

  });

  if(recipe){
    req.recipe = recipe;
    next();
  }else{
    res.status(400).send({
      message: 'Unable to update the recipe',
    })
  }
},

async function deleteRecipeImage(req, res){
  const { recipe } = req;
  if(req.file){
    
    const displayPhoto = `public/images/recipes/${recipe.displayPhoto.substring(recipe.displayPhoto.lastIndexOf('/' + 1))}`;

    fs.stat(displayPhoto, async function(err, stat){
      if(err === null){
        fs.unlinkSync(displayPhoto);
        const newDisplayPhoto = `${req.protocol}://${req.get('host')}/images/recipes/${req.file.filename}`;
        req.recipe.displayPhoto = newDisplayPhoto;
        await req.recipe.save();
      }
    });
  }

  res.send({
    message: 'Successfully update user'
  })
}

);

module.exports = router;