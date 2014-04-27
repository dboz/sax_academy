function make_homepage() {
    
    $('#content').empty();
    $('#content').append('<img src="img/sax_1.jpg" align="left" style="margin-right:10px;"/>');
    var homepage_content = $('<div style="text-align:justify"></div>');
    $.each(content['homepage'], function(index, value) {
        homepage_content.append("<p>" + value + "</p>");
    });
    $('#content').append(homepage_content);

}

function make_chi_siamo() {
        $('#content').empty();
        //$('#content').append('<img src="img/sax_1.jpg" align="left" style="margin-right:10px;"/>');
        var chi_siamo_content = $('<div style="text-align:justify"></div>');
        $.each(content['chi_siamo'], function(index, value) {
            chi_siamo_content.append("<p>" + value + "</p>");
        });
        $('#content').append(chi_siamo_content);
    
}

function make_finalita() {
        $('#content').empty();
        $.each(content['finalita'], function(index, value) {
            $('#content').append("<p>" + value + "</p>");

        });
        $('#content').append('<img src="img/1.jpg" align="middle" />');
}

function make_contatti() {
    var content = "tel +39.066893321<br/>" +
            "fax +39.0668130036<br/>" +
            "mail: info@saxacademy.org <br/>" +
            "M&deg; Giuseppina Levato, direttore artistico, gy@GiuseppinaLevato.it <br/>" +
            "Dr. Massimo Criscuoli Tortora, segretario generale, mobile +39.392191610";
    $('#content').empty();
    $('#content').append('<div id="map"></div>');
    var map = L.map('map').setView([39, 12.471611], 16);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([41.916550, 12.471611]).addTo(map)
            .bindPopup('<span style="color:black;">' + content + '</span>')
            .openPopup();
}

function make_adolphe_sax() {
    
        $('#content').empty();
        $('#content').append('<img src="img/adolphe_sax.jpg" align="left" style="margin-right:10px;" />');
        $.each(content['adolphe_sax'], function(index, value) {
            $('#content').append("<p>" + value + "</p>");

        });
}

function make_il_saxofono() {
        $('#content').empty();
        $('#content').append('<img src="img/sax_2.png" align="left" style="margin-right:10px;" />');
        $.each(content['il_saxofono'], function(index, value) {
            $('#content').append("<p>" + value + "</p>");

        });
}

function make_didattica() {
    $('#content').empty();
}

function make_conservatori() {
        $('#content').empty();
        $.each(content['conservatori'], function(index, value) {
            $('#content').append("<p>" + value + "</p>");

        });
}

function make_gli_interpreti() {
        $('#content').empty();
        $.each(content['gli_interpreti'], function(index, value) {
            $('#content').append("<p>" + value + "</p>");

        });
}

function make_sax_timeline() {
        $('#content').empty();
        $.each(content['sax_timeline'], function(index, value) {
            $('#content').append("<p>" + value + "</p>");

        });
}

function make_aziende() {
        $('#content').empty();
        $.each(content['aziende'], function(index, value) {
            $('#content').append("<p>" + value + "</p>");

        });
}

function make_link() {
        $('#content').empty();
        $.each(content['link'], function(index, value) {
            $('#content').append("<p>" + value + "</p>");

        });
}