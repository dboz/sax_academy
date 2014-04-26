function make_homepage() {
    $.getJSON('js/data.json', function(content) {
        $('#content').empty();
        $('#content').append('<img src="img/sax_1.jpg" align="left" style="margin-right:10px;"/>');
        var homepage_content = $('<div style="text-align:justify"></div>');
        $.each(content['homepage'], function(index, value) {
            homepage_content.append("<p>" + value + "</p>");
        });
        $('#content').append(homepage_content);
    });
}

function make_chi_siamo(){
    $.getJSON('js/data.json', function(content) {
        $('#content').empty();
        //$('#content').append('<img src="img/sax_1.jpg" align="left" style="margin-right:10px;"/>');
        var chi_siamo_content = $('<div style="text-align:justify"></div>');
        $.each(content['chi_siamo'], function(index, value) {
            chi_siamo_content.append("<p>" + value + "</p>");
        });
        $('#content').append(chi_siamo_content);
    });
}

function make_finalita() {
    $.getJSON('js/data.json', function(content) {
        $('#content').empty();
        $.each(content['finalita'], function(index, value) {
            $('#content').append("<p>" + value + "</p>");

        });
        $('#content').append('<img src="img/1.jpg" align="middle" />');
    });
}

function make_contatti() {
    $('#content').empty();
    $('#content').append('<div id="map"></div>');
    var map = L.map('map').setView([41.916550, 12.471611], 16);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([41.916550, 12.471611]).addTo(map)
            .bindPopup('<span style="color:black;">Lungotevere delle Navi, 20<br/> 00196 - ROMA - Italia</span>')
            .openPopup();
}

function sax_stroy() {
    $.getJSON('js/data.json', function(content) {
        $('#content').empty();
        $('#content').append('<img src="img/adolphe_sax.jpg" align="left" style="margin-right:10px;" />');
        $.each(content['sax_story'], function(index, value) {
            $('#content').append("<p>" + value + "</p>");

        });

    });
}