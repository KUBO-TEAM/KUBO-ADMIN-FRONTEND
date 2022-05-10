const {
    Schema,
    model 
} =  require("mongoose");

const notificationSchema = new Schema({
    title: String,
    message: String,
    recipe_id: Schema.Types.ObjectId,
},{
    timestamps: true,
});

module.exports =  model('Notification', notificationSchema);