const Notification = require('../models/notification.model');

async function notify({
    title, 
    message,
    recipe_id,
}){
    await Notification.create({
        title,
        message,
        recipe_id,
    });
}

module.exports = {
    notify,
}