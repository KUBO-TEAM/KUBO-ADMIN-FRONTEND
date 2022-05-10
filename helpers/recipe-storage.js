const multer = require('multer');
const { Storage } = require('@google-cloud/storage');
const dotenv = require('dotenv');

/** Google Cloud storage setup */
dotenv.config();

let recipeBucket = null;

if(process.env.GCLOUD_STORAGE_BUCKET){

  const cloudStorage = new Storage({
    projectId: process.env.GCLOUD_STORAGE_PROJECT_ID,
    credentials:{
      client_email: process.env.GCLOUD_STORAGE_CLIENT_EMAIL,
      private_key: process.env.GCLOUD_STORAGE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
    }
  });


  recipeBucket = cloudStorage.bucket(process.env.GCLOUD_STORAGE_BUCKET);
}

// Local Storage
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/recipes');
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + ".png");
  },
});


// Cloud Storage
if(recipeBucket){
  storage = multer.memoryStorage();
}

// Upload per storage aboive
const recipeUpload = multer({ 
  storage : storage,

  limits: {
    fileSize: 5 * 1024 * 1024,
  },

});

module.exports = {
  recipeUpload,
  recipeBucket,
}