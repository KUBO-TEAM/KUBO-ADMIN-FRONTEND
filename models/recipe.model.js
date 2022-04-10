const mongoose =  require("mongoose");

const recipeSchema = new mongoose.Schema(
	{
		name: {type: String, required: true},
		description: { type: String, required: true},
		reference: { type: String, required: true},

		categories: [String],	

		ingredients: [{ quantity: Number, name: String }],
		
		instructions: [String],

		displayPhoto: { type: String, required: true},
	},
	{
		timestamps: true
	}
)

module.exports =  mongoose.model('Recipe', recipeSchema);
