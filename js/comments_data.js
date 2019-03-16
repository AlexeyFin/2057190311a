const comments_data_module = (function () {
    let instance,
        comments = [];


    const setComments = function(data) {
        comments = data;
        return comments
    };

    const getComments = function() {
        return comments
    };

    const addComment = function(comment) {
        comments.push(comment);
        return comments
    };



    let createInstance = function () {
        return {
            setComments,
            getComments,
            addComment
        }
    };

    return {
        getInstance: function () {
            return instance || (instance = createInstance());
        }
    }
})();