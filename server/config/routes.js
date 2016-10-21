var bookController = require('./../controllers/bookController.js');
module.exports = function(app){
    app.post('/addBook', function(req,res){
        bookController.addBook(req,res);
    });
    app.get('/getBooks', function(req,res){
        bookController.getBooks(req,res);
    });
    app.post('/updateBook', function(req,res){
        bookController.updateBook(req,res);
    });
    app.post('/removeBook', function(req,res){
        bookController.removeBook(req,res);
    });
};