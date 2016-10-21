app.factory('indexFactory', function($http){
    var factory = {};
    factory.addBook = function(book, callback){
        $http.post('/addBook', book).then(function(data){
            callback(data);
        });
    };
    factory.getBooks = function(callback){
        $http.get('/getBooks').then(function(data){
            callback(data);
        });
    };
    factory.updateBook = function(bookUpdate, callback){
        $http.post('/updateBook', bookUpdate).then(function(data){
            callback(data);
        });
    };
    factory.removeBook = function(book, callback){
        $http.post('/removeBook', book).then(function(data){
            callback(data);
        })
    };
    return factory;
});