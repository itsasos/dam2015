$(document).ready(function() {
    // Calcular posición

    navigator.geolocation.getCurrentPosition(function (position) {
        console.log("We found you!");
    //alert('We found you!');
    // now do something with the position data

        var coords = position.coords;
        showMap(coords.latitude, coords.longitude, coords.accuracy);
        console.log(coords.latitude);
        console.log(coords.longitude);
        document.getElementById("status").innerHTML='encontrado';
    });

    function showMap(lat,long) {
        var mapcanvas = document.createElement('div');
        mapcanvas.id = 'mapcanvas';
        mapcanvas.style.height = '400px';
        mapcanvas.style.width = '560px';

        document.querySelector('article').appendChild(mapcanvas);

        var latlng = new google.maps.LatLng(lat,long);
        var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeControl: false,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "¡Usted está aquí!"
        });
    }
});
