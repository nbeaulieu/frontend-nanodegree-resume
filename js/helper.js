/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 class="orange-text" id="name">%data%</h1>';
var HTMLheaderRole = '<span class="light-gray-text">%data%</span><hr class="fancy-fade-orange"/>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="tilt biopic">';
var HTMLWelcomeMsg = '<span class="welcome-message white-text">%data%</span>';

var HTMLskillsStart = '<h3 class="orange-text" id="skillsH3">Skills at a Glance:</h3><ul class="flex-box" id="skills"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text lowercase-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text light-gray-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text light-gray-text">%data%</div>';
var HTMLworkDescription = '<p class="white-text"><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry project-div"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text light-gray-text">%data%</div>';
var HTMLprojectDescription = '<p class="white-text"><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text light-gray-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text light-gray-text">%data%</div>';
var HTMLschoolMajor = '<em class="white-text"><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3 class="light-gray-text">Online Classes</h3><div class="online-education-entry"></div>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text light-gray-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

var HTMLMapStart = '<div class="dark-gray-text map-info-style">%data%</div>';
var HTMLMapEntry = '<div class="location-text light-gray-text map-info-style map-entry-style">%data%</div>';
var HTMLMapEnd = '</div>';

/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName(name) || function(){};
    $('#name').html(iName);  
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    zoom: 10,
    zoomControler: false,
    disableDefaultUI: true
  };

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  var expandedLocations = [];
  var siteSeparator = "::";
  
  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];
    
    // Adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    expandedLocations[bio.contacts.location] = { "sites" : ["Home Base"] };
    //expandedLocations.push[bio.contacts.location] = { "sites" : ["Home Base"] };
    
    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {

      locations.push(education.schools[school].location);
      
      // If the expanded locations does not include the current location name, add it now.
      // If it is already included in the list, add the name of the school to the school string
      // but only if it has not been added already.
      if (expandedLocations.hasOwnProperty(education.schools[school].location)) {

        // Make sure that we only add the school name to the list one time.
        if (expandedLocations[education.schools[school].location].sites.indexOf(education.schools[school].name) < 0) {
          expandedLocations[education.schools[school].location].sites.push(education.schools[school].name);
        }

      }
      else {
        expandedLocations[education.schools[school].location] = { "sites" : [education.schools[school].name] };
      }
      
    }
    
    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      
      locations.push(work.jobs[job].location);

      // If the expanded locations does not include the current location name, add it now.
      // If it is already included in the list, add the name of the school to the school string
      // but only if it has not been added already.
      if (expandedLocations.hasOwnProperty(work.jobs[job].location)) {

        // Make sure that we only add the employer to the list one time.
        if (expandedLocations[work.jobs[job].location].sites.indexOf(work.jobs[job].employer) < 0) {
          expandedLocations[work.jobs[job].location].sites.push(work.jobs[job].employer);
        }
      }
      else {
        expandedLocations[work.jobs[job].location] = { "sites" : [work.jobs[job].employer] };
      }
    }

    // After grading, I'll return the expanded locations array.  Until then,
    // I don't want to break any auto grading tests that may occur.  So, the expanded
    // location array is a global variable for now....
    return locations;
  }

  // infoWindows are the little helper windows that open when you click
  // or hover over a pin on a map. They usually contain more information
  // about a location.
  // Create a single info window that will be reused with each click on a marker.
  var infoWindow  = new google.maps.InfoWindow({});
  
  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });
    
    // Append the original location name (city only) to the marker so that the list of sites can be identified from
    // the marker on selection.
    var locationArray = marker.title.split(",");
    if (locationArray.length > 0) {
      marker.location = locationArray[0];
    }
    else {
      marker.location = "";
    }
    
    // When the users clicks on a marker, update the window content with the new marker information and
    // show it on the map at the new location.
    google.maps.event.addListener(marker, 'click', function() {
      // Update the marker content.
      infoWindow.setContent(formatMapContent(marker));
      // Center the map on the new marker.
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
    
    return marker;
  }

  function formatMapContent(marker){

    // Create the title for the popup.
    var formattedName = HTMLMapStart.replace("%data%", marker.title);
    
    // If the marker has appended location information, find the closest match and update
    // the pop up info window with the site list created for the location.
    var formattedList = "";

    // Find the first loaction that contains the city name.
    //for (var i = 0; i < expandedLocations.keys.length; i++) {
    for (var locationName in expandedLocations) {

      if (locationName.indexOf(marker.location) >= 0) {

        for (var site in expandedLocations[locationName].sites) {
          console.log(expandedLocations[locationName].sites[site]);
          formattedList = formattedList + HTMLMapEntry.replace("%data%", expandedLocations[locationName].sites[site]);
        }

        // The list has one entry per location.  Stop processing the loop.
        break;
      }
    }

    return formattedName + formattedList + HTMLMapEnd;
  }
  
  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
