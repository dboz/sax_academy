$(document).ready(function() {
    $('#header').corner("corner tl tr 30px");
    $('#footer').corner("corner bl br 30px");
    $('#content').empty();
    make_homepage();

});


var WorkspaceRouter = Backbone.Router.extend({
    routes: {
        "homepage": "homepage",
        "chi_siamo": "chi_siamo",
        "finalita": "finalita",
        "sax_story": "sax_story",
        "news": "news",
        "corsi": "corsi",
        "contatti": "contatti",
        "": "defaultRoute"
    },
    defaultRoute: function() {
    },
    homepage: function() {
    },
    chi_siamo: function(){
    },
    finalita: function() {
    },
    sax_story: function() {
    },
    news: function() {
    },
    corsi: function() {
    },
    contatti: function() {
    }

});

var get_data = function(key) {
    $.getJSON('js/data.json', function(content) {
        $('#content').empty();
        $.each(content[key], function(index, value) {
            $('#content').append(value);
            $('#content').append('<br/>');
        });
    });
};

var App = {
    defaultRoute: function() {
    },
    homepage: function() {
        make_homepage();
    },
    chi_siamo: function(){
        make_chi_siamo();
    },
    finalita: function() {
        make_finalita();
    },
    sax_story: function() {
        sax_stroy();
    },
    news: function() {
        $('#content').empty();
        var $content = $('<div style="text-align:center;"></div>');
        var $p = $('<p style="text-align:center;"></p>').append('Prima Edizione del "Premio Adolphe Sax" - Roma novembre 2014');
        var $image = $('<img src="img/busto_sax.jpg" />');

        $content.append($p);
        $content.append($image);
        $('#content').append($content);
    },
    corsi: function() {
        var $carousel = $('<div id="myCarousel" class="carousel slide" style="width:700px;position:relative;margin:auto;"></div>');

        var $carousel_list = $('<ol class="carousel-indicators"></ol>');
        $carousel_list.append('<li data-target="#myCarousel" data-slide-to="0" class="active"></li>');
        $carousel_list.append('<li data-target="#myCarousel" data-slide-to="1" ></li>');

        var $carousel_items = $('<div class="carousel-inner"></div>');

        var $item_1 = $('<div class="active item" style="text-align:center"></div>');
        $item_1.append('<img src="img/corso_1.jpg" />');
        $item_1.append('<div class="carousel-caption"><h4>Corsi Estivi di Interpretazione - 7° Edizione - Torino 24-31 agosto 2014</h4></div>');

        var $item_2 = $('<div class="item" style="text-align:center"></div>');
        $item_2.append('<img src="img/corso_2.jpg" />');
        $item_2.append('<div class="carousel-caption"><h4>Corso Motivazionale per Musicisti - "Le ali della Libert&agrave;" in collaborazione con MB Formazione - Roma</h4></div>');

        $carousel_items.append($item_1);
        $carousel_items.append($item_2);


        $carousel.append($carousel_list);
        $carousel.append($carousel_items);
        $carousel.append('<a class="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>');
        $carousel.append('<a class="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>');

        $('#content').empty();
        $('#content').append($carousel);
        $('.carousel').carousel();
    },
    contatti: function() {
        make_contatti();
    }

};

$(document).ready(function() {

    var router = new WorkspaceRouter();
    Backbone.history.start();
    router.on("route:homepage", App.homepage);
    router.on("route:chi_siamo", App.chi_siamo);
    router.on("route:defaultRoute", App.defaultRoute);
    router.on("route:finalita", App.finalita);
    router.on("route:sax_story", App.sax_story);
    router.on("route:news", App.news);
    router.on("route:corsi", App.corsi);
    router.on("route:contatti", App.contatti);
});


