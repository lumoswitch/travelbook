'use strict';

/*Author: Anna Sofrona*/

/***********************************Global variables**********************************************/

var country = document.getElementById("country");
var city = document.getElementById("city");
// var address = document.getElementById("address");
var get_loc = document.getElementById("get_loc1");
// var render_map = document.getElementById("show_map");
var lon,lat,lon1,lat1;
var tmp; 

/********************************* Element handling ***********************************************/
//render_map.style.visibility = 'hidden';


/*********************************** Functions ******************************************************/


/*Function: show_map
* Parameters: coordinates
* Details: show_map render the location given by the coordinates in a map 
           and marks the location with a marker
*/
function show_map(lon,lat){
    var map = document.getElementById("map"); 
    var Zoom=16;
    map = new ol.Map({
        target: "map",
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM({
                url: "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                })
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([lon, lat]),
            zoom: Zoom
        })
    });
    /* setting a pointer on map */
    var vectorLayer = new ol.layer.Vector({
        source:new ol.source.Vector({
            features: [new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.transform([lon,lat],
                    'EPSG:4326', 'EPSG:900913')),})]
                }),
                style: new ol.style.Style({
                    image: new ol.style.Icon({
                    anchor: [0.5, 0.5],
                    anchorXUnits: "fraction",
                    anchorYUnits: "fraction",
                    src: "css/Ol_icon_red_example.png"
                })
            })
    
    });
    map.addLayer(vectorLayer);
    
}


/*Function: checkAddress
* Parameters: xhttp
* Details:  checkAddress makes proper actions according to the response's status.
            Status 200 (OK): the response parsed as json file and show_map 
                       function is called with the proper coordinates taken from the json file
                       as arguments
            Status 404 (Page not found): error message shown in user
            Status 403 (Forbidden): error message shown in user
*/
function checkAddress(xhttp) {
    var jfile;
    if (xhttp.status == 403){
        address.setCustomValidity("Forbidden");
        document.getElementById("error").innerHTML = "Something went wrong";
    }else if (xhttp.status == 404){
        address.setCustomValidity("Page not found");
        document.getElementById("error").innerHTML = "Something went wrong";
    }else if (xhttp.status == 200) { //if request finished and response is ready nad every is OK get me the JSON
        jfile = JSON.parse(xhttp.responseText);
        if (jfile.length == 0) {
            address.setCustomValidity("Invalid address");
            document.getElementById("error").innerHTML = "Invalid address"; //printing message using DOM element innerHTML
        }else {
            address.setCustomValidity("");
            document.getElementById("error").innerHTML = "Valid address";
            tmp = jfile["0"];
            lon = parseFloat(tmp.lon); //saving longtitude taken from json file
            lat = parseFloat(tmp.lat); //saving latitude taken from json file
            // render_map.style.visibility = 'visible';
            document.getElementById('show_map').onclick = function(){ show_map(lon, lat); };
        }
    }
}

/*Function: checkCurrentPosition
* Parameters: xhttp
* Details:  checkAddress makes proper actions according to the response's status.
            Status 200 (OK): the response parsed as json file and show_map 
                       function is called with the current coordinates of the 
                       user's position
            Status 404 (Page not found): error message shown in user
            Status 403 (Forbidden): error message shown in user
*/
function checkCurrentPosition(xhttp) {
    var json_1,str;
    if (xhttp.status == 403){
        address.setCustomValidity("Forbidden");
        document.getElementById("error").innerHTML = "Something went wrong";
    }else if (xhttp.status == 404){
        address.setCustomValidity("Page not found");
        document.getElementById("error").innerHTML = "Something went wrong";
    }else if (xhttp.status == 200) { //if request finished and response is ready nad every is OK get me the JSON
        json_1 = JSON.parse(xhttp.responseText);
        if (json_1.length == 0) {
            document.getElementById("address").setCustomValidity("Invalid address");
            document.getElementById("error").innerHTML = "Invalid address"; //printing message using DOM element innerHTML
        }else {
            document.getElementById("address").setCustomValidity("");
            document.getElementById("error").innerHTML = "Valid address";
            /*autocomplete the fields based on the current location of user. Info is taken from the json file returned from server*/
            tmp = json_1.address;
            document.getElementById("city").value = tmp.city;
            str = tmp.country_code.toUpperCase();
            document.getElementById("country").value = str;
            document.getElementById("address").value = tmp.road;
            lat1 = json_1.lat.toString();
            lon1 = json_1.lon.toString();
            document.getElementById('show_map').onclick = function() { show_map(parseFloat(lon1), parseFloat(lat1)); };
        }
    }
}

/*Function: anonymous
* Event: trigger function when address is typed
* Parameters: none
* Details: functions checks if address given exists by making the 
           proper ajax request
           
*/
function address_exists(address){

    var x; /*x--->holds the address where spaces have been replaces with +*/
    var server_location; /*holds the final url that we request from server*/
    x = address.replace(/ /g,'+'); //g means global search ---> search whole string for spaces and replace them with +
    server_location = "https://nominatim.openstreetmap.org/search.php?q=" + document.getElementById('country').value + "+" + document.getElementById('city').value + "+" + x + "&format=json&viewbox=";
    console.log(server_location);
    ajaxRequest("GET",server_location,checkAddress,null);    
};

/*Function: anonymous
* Event: trigger function when Show location button is pressed
* Parameters: none
* Details: functions shows current location of user in map by making the 
           proper ajax request
           
*/
function my_location(){

    var current_pos;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        document.getElementById("get_loc_msg").innerHTML = "Geolocation is not supported by this browser.";
    }
    
    function showPosition(position) {
        
        current_pos = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat="+position.coords.latitude+"&lon="+position.coords.longitude;  
        ajaxRequest("GET",current_pos,checkCurrentPosition,null); 
    }
};




