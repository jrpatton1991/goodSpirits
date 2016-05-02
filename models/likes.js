var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    var Likes = new Schema({
      userId: {type: String},
      beerId: {type: String}
    });


    module.exports = mongoose.model('Likes', Likes);
