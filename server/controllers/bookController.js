var mongoose = require('mongoose');
var Book = mongoose.model('Book');
module.exports = (function(){
    return {
        
        addBook: function(req,res){
            var newbook = new Book(req.body);
            newbook.save(function(err, book){
                if(err){
                    return res.json({success: false, error: err});
                } else if (!book) {
                    return res.json({success: false, message: 'not able to save book'});
                } else {
                    return res.json({success: true, message: 'book saved', book: book});
                }
            })
        },
        
        getBooks: function(req,res){
            Book.find({}, function(err, books){
                if(err){
                    return res.json({success: false, error: err});
                } else {
                    return res.json({success: true, books: books});
                }
            })
        },
        
        updateBook: function(req,res){
            console.log(req.body);
            Book.findOne({_id: req.body.book_id}, function(err, book){
                if(err){
                    return res.json({success: false, error: err});
                } else {
                    console.log(book.save);
                    book.author = req.body.author;
                    book.title = req.body.title;
                    book.save(function(err1){
                        if(err1){
                            return res.json({success: false, error: err1})
                        } else {
                            return res.json({success: true, book: book})
                        }
                    });
                }
            })
        },
        
        removeBook: function(req,res){
            console.log(req.body);
            Book.remove({_id:req.body._id}, function(err){
                if(err){
                    return res.json({success: false, error: err})
                } else {
                    return res.json({success: true, message: 'yay we deleted'})
                }
            })
        }
    }
})();