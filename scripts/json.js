

var stationAPI = "http://api.sl.se/api2/typeahead.json?key=d7ac87ba94f9461fa25025eb161be654&searchstring=farsta strand&stationsonly=true&maxresults=1";

$.getJSON(stationAPI, function (json) {

 // Set the variables from the results array
    var station = json.ResponseData;
    console.log(station);
});


/* var slAPI = "http://api.sl.se/api2/realtimedepartures.json?key=3a6448ed31e64442a0cd0042191971e5&siteid=9180&timewindow=20";
var metro = 0;

$.getJSON(slAPI, function (json) {

 // Set the variables from the results array
    metro = json.ResponseData.Metros;
    
    for (i = 0; i < metro.length; i++){
    
    if (metro[i].Destination === "Alvik" || "Hässelby strand" || "Åkeshov"){
        console.log("Tåg mot Alvik på väg!");
        }
    else {
        console.log("Inget tåg mot Alvik!");
        }
        
    }
        
}); */


