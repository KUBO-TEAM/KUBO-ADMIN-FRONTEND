const mongoose =  require("mongoose");

const recipeSchema = new mongoose.Schema(
	{
		name: String,
		description: String,

		course: String,
		cuisine: String,
		prep_time: Number,
		cook_time: Number,
		servings: Number,

		reference: String,

		displayPhoto: String,

		categories: [String],	
		ingredients: [{ quantity: Number, ingredient: String }],
		instructions: [String],
	},
	{
		timestamps: true
	}
)

module.exports =  mongoose.model('Recipe', recipeSchema);
