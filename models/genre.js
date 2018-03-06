var mongoose = require('mongoose');

//Schema For Genres
var genreSchema = mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	create_date:{
		type:Date,
		default:Date.now
	}
});

var Genre = module.exports = mongoose.model('Genre',genreSchema);

module.exports.getGenres = function(callback,limit){

	Genre.find(callback).limit(limit);

};

// Add genre
module.exports.addGenre = function(genre,callback){

	Genre.create(genre,callback);

};