var mongoose = require('mongoose');
var BookSchema = mongoose.Schema({
    title: String,
    author: String
}, {timestamps: true})
mongoose.model('Book', BookSchema);