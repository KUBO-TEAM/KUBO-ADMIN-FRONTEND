const { Schema , model } =  require("mongoose");

const aiSchema = new Schema(
	{
		user_id: Schema.Types.ObjectId,
    	email: String,
		model_name : String,
	},
	{
		timestamps: true,
	}
)

module.exports =  model('Ai', aiSchema);
