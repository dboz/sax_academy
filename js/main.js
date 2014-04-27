$(document).ready(function() {
    $('#header').corner("corner tl tr 30px");
    $('#footer').corner("corner bl br 30px");
    $('#left_menu').corner("corner tl bl 30px");
    $('#content').empty();
    make_homepage();

});


var WorkspaceRouter = Backbone.Router.extend({
    routes: {
        "homepage": "homepage",
        "chi_siamo": "chi_siamo",
        "finalita": "finalita",
        "adolphe_sax": "adolphe_sax",
        "il_saxofono":"il_saxofono",
        "news": "news",
        "corsi": "corsi",
        "contatti": "contatti",
        "didattica": "didattica",
        "conservatori": "conservatori",
        "gli_interpreti": "gli_interpreti",
        "sax_timeline": "sax_timeline",
        "aziende":"aziende",
        "link": "link",
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
    adolphe_sax: function() {
    },
    il_saxofono: function(){
    },
    news: function() {
    },
    corsi: function() {
    },
    contatti: function() {
    },
    didattica: function(){

    },
    conservatori: function(){

    },
    gli_interpreti: function(){

    },
    sax_timeline: function(){

    },
    aziende: function(){

    },
    link: function(){

    }

});

var get_data = function(key) {
    $.getJSON('data.json', function(content) {
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
        console.log('homepage');
        make_homepage();
    },
    chi_siamo: function(){
        make_chi_siamo();
    },
    finalita: function() {
        make_finalita();
    },
    adolphe_sax: function() {
        make_adolphe_sax();
    },
    il_saxofono: function(){
        make_il_saxofono();
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
        $item_1.append('<div class="carousel-caption"><h4>Corsi Estivi di Interpretazione - 7&deg; Edizione - Torino 24-31 agosto 2014</h4></div>');

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
    },
    didattica: function(){
        make_didattica();
    },
    conservatori: function(){
        make_conservatori();
    },
    gli_interpreti: function(){
        make_gli_interpreti();
    },
    sax_timeline: function(){
        make_sax_timeline();
    },
    aziende: function(){
        make_aziende();
    },
    link: function(){
        make_link();
    }

};

$(document).ready(function() {

    var router = new WorkspaceRouter();
    Backbone.history.start();
    router.on("route:homepage", App.homepage);
    router.on("route:chi_siamo", App.chi_siamo);
    router.on("route:defaultRoute", App.defaultRoute);
    router.on("route:finalita", App.finalita);
    router.on("route:adolphe_sax", App.adolphe_sax);
    router.on("route:il_saxofono", App.il_saxofono);
    router.on("route:news", App.news);
    router.on("route:corsi", App.corsi);
    router.on("route:contatti", App.contatti);
    router.on("route:didattica", App.didattica);
    router.on("route:conservatori", App.conservatori);
    router.on("route:gli_interpreti", App.gli_interpreti);
    router.on("route:sax_timeline", App.sax_timeline);
    router.on("route:aziende", App.aziende);
    router.on("route:link", App.link);
    
});


