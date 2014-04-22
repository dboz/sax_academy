$(document).ready(function() {
    $('#left_content').empty();
        $('#right_content').empty();
        $('#left_content').append(content['homepage']['left']);
        $('#right_content').append(content['homepage']['right']);
});


var WorkspaceRouter = Backbone.Router.extend({
    routes: {
        "homepage": "homepage",
        "finalita": "finalita",
        "": "defaultRoute"
    },
    defaultRoute: function() {
    },
    homepage: function() {
    },
    finalita: function() {
    }

});

var App = {
    defaultRoute: function() {
        console.log('defaul torute');
        $('#left_content').empty();
        $('#right_content').empty();
        $('#left_content').append(content['homepage']['left']);
        $('#right_content').append(content['homepage']['right']);
    },
    homepage: function() {
        $('#left_content').empty();
        $('#right_content').empty();
        $('#left_content').append(content['homepage']['left']);
        $('#right_content').append(content['homepage']['right']);
    },
    finalita: function() {
        $('#left_content').empty();
        $('#right_content').empty();
    }

};

$(document).ready(function() {
    var router = new WorkspaceRouter();
    Backbone.history.start();
    router.on("route:homepage", App.homepage);
    router.on("route:defaultRoute", App.defaultRoute);
    router.on("route:finalita", App.finalita);

});


