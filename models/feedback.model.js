const { Schema , model } =  require("mongoose");

const feedBackSchema = new Schema(
	{
        name: String,
        email: String,
        phone: String,
        comments: String,
	},
	{
		timestamps: true,
	}
)

module.exports =  model('Feedback', feedBackSchema);
