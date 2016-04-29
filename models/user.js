var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

    var User = new Schema({
      username: {type: String, required: true},
      password: {type: String, required: true}
    });

    User.plugin(passportLocalMongoose);

    module.exports = mongoose.model('User', User);
