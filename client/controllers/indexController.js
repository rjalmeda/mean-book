app.controller('indexController', function($scope, $location, indexFactory){
    var getBooks = function(){
        indexFactory.getBooks(function(data){
            $scope.books = data.data.books;
        });
    };
    getBooks();
    
    $scope.addBook = function(){
        if(!$scope.book){
            console.log('there is no book');
        } else if (!$scope.book.title){
            return alert('need to add a title');
        } else if ($scope.book.title.length < 3){
            return alert('make sure title is at least 3 chars long');
        } else if (!$scope.book.author){
            return alert('where is the author dude.')
        } else {
            indexFactory.addBook($scope.book, function(data){
                console.log(data.data);
                if(data.data.success){
                    getBooks();
                    return alert('yay it worked');
                } else {
                    return alert('what happened');
                }
            });
        } 
    };
    
    $scope.updateBook = function(book_id, bookUpdate){
        bookUpdate.book_id = book_id;
        indexFactory.updateBook(bookUpdate, function(data){
            console.log(data);
            getBooks();
        })
    };
    
    $scope.removeBook = function(book){
        indexFactory.removeBook(book, function(data){
            console.log(data);
            getBooks();
        })
    };
    
});