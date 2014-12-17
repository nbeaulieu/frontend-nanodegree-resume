//
//  Define the general resume Biography information here.
//
var bio = {
    "name" : "Nicole Beaulieu",
    "role" : "Computer Scientist",
    "image" : "images/fry.jpg",
    "welcomeMessage" : "Geek Greetings",
    "skills": [ "software architecture", "technical research", "technical leadership", "game development guru"],
    "contacts": {
        "mobile": "775.303.6384",
        "email": "nbeaulieu@me.com",
        "github": "nbeaulieu",
        "location": "Reno, Nevada",
        "twitter": "",
        "blog": ""
    }
}

//
// Define the functions that extract and format the biography data.
//

// Parses and formats the biography header information (Name and role).
bio.displayHeader = function() {

    if (bio !== null) {

        // Replace the data element.
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        // Add the element to the document.
        $("#header").prepend(formattedRole);

        // Replace the data element.
        var formattedName = HTMLheaderName.replace("%data%", inName(bio.name));
        // Add the element to the document.
        $("#header").prepend(formattedName);

    }
    else {
      console.log("resumeBuilder.bio.display:  No bio defined.");
    }
}

// Parses and formats the biography skills.
bio.displaySkills = function() {

    if (bio !== null && bio.skills !== null && bio.skills.length > 0) {
        
        // Add the element to the document.
        $("#header").append(HTMLskillsStart)
      
        // Loop through the list and add each included skill to the skills section.
        for (var skill in bio.skills) {
            // Replace the data element.
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            // Uncomment for debug information.
            //console.log("resumeBuilder.displaySkills:  " +  bio.skills[skill]);

            // Append the skill to the skills section.
            $("#skills").append(formattedSkill)

        }
    }
    else {
      console.log("resumeBuilder.bio.displaySkills:  No skills defined.");
    }
}

// Parses and formats the biography image/portrait.
bio.displayImage = function() {

    if (bio !== null) {

        // Replace the data element.
        var formattedImage = HTMLbioPic.replace("%data%",bio.image);
        // Add the element to the document.
        $("#header").append(formattedImage);

    }
    else {
      console.log("resumeBuilder.bio.displayWelcome:  No bio defined.");
    }
}

// Parses and formats the biography welcome message.
bio.displayWelcome = function() {

    if (bio !== null) {

        // Replace the data element.
        var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
        // Add the element to the document.
        $("#header").append(formattedWelcome);
    }
    else {
      console.log("resumeBuilder.bio.displayWelcome:  No bio defined.");
    }
}

// Parses and formats the biography contact information.
bio.displayContact = function() {

    if (bio !== null && bio.contacts !== null) {

        // Replace the data element.
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        // Add the element to the document.
        $("#topContacts").append(formattedMobile);

        // Replace the data element.
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        // Add the element to the document.
        $("#topContacts").append(formattedEmail);

        // Replace the data element.
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        // Add the element to the document.
        $("#topContacts").append(formattedGithub);

        // Replace the data element.
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        // Add the element to the document.
        $("#topContacts").append(formattedLocation);

        // Replace the data element.
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        // Add the element to the document.
        $("#topContacts").append(formattedTwitter);

        // Replace the data element.
        var formattedBlog = HTMLblog.replace("%data%", bio.contacts.twitter);
        // Add the element to the document.
        $("#topContacts").append(formattedBlog);
    }
    else {
      console.log("resumeBuilder.bio.display:  No bio defined.");
    }
}

// Draw the bio info.
bio.display = function () {
    bio.displayHeader();
    bio.displayContact();
    bio.displayImage();
    bio.displayWelcome();
    bio.displaySkills();
}

//
//  Define the resume work history information here.
//
var work =  {
    "jobs": [
        {
            "employer": "Bally Technolgoies",
            "title": "Principal Software Engineer",
            "location": "Reno, Nevada",
            "dates": "October 2013 - Present",
            "description": "R&D Software Engineer, Innvovation Lab.  Rapid development of leading edge technologies for the gaming industry including iOS and mobile games, iBeacon and location aware content, gesture-based and Leap Motion virtual reality games.  Technologies:  Unity3D, C#, iOS, Objective-C, HTML5, JavaScript, CSS3, JSON",
        },
        {
            "employer": "Kizzang, LLC",
            "title": "Software Architect",
            "location": "Reno, Nevada",
            "dates": "April 2013 - September 2013",
            "description": "Software Architect responsible for the design and implementation of the company's n-tier for fun scratch card lottery system.  Deployments included web and mobile.  Technologies:  ActionScript, Flash, Starling, Feathers, HTML, JSON, and PHP."
        },
        {
            "employer": "Spooky Cool Labs",
            "title": "Software Architect, Game Developer",
            "location": "Chicago, Illinois",
            "dates": "February 2013 - April 2013",
            "description": "Software Architect responsible for the design and implementation of the company's n-tier social slots system and games.  Technologies:  ActionScript, Flash, JSON."
        },
        {
            "employer": "International Game Technology",
            "title": "Software Architect, Staff Software Engineer",
            "location": "Reno, Nevada",
            "dates": "February 2007 - February 2012",
            "description": "Staff Software Engineer and Architect responsible for design and implementation of the company's fault-tolerant gaming platforms.  Technologies:  C, C++, C#, QNX, Windows 3.1, Unity3D."
        },
        {
            "employer": "Intuit",
            "title": "Senior Software Engineer",
            "location": "Reno, Nevada",
            "dates": "July 2006 - February 2007",
            "description": "Senior Software Engineer responsible for designing the next generation Quick Books Portal.  Technologies:  Java"
        },
        {
            "employer": "International Game Technology",
            "title": "Staff Software Engineer",
            "location": "Reno, Nevada",
            "dates": "July 1997 - July 2006",
            "description": "Staff Software Engineer and Architect responsible for design and implementation of the company's fault-tolerant gaming platforms.  Technologies:  C, C++, C#, QNX, Windows 3.1, Unity3D."
        },
        {
            "employer": "Realtime Associates, Inc",
            "title": "Lead Software Engineer",
            "location": "Redmond, Washington",
            "dates": "October 1996 - January 1997",
            "description": "Lead software engineer for the Windows95 release of Magic the Gathering: Battlemage.  Technologies:  Windows95, DirectX, C++."
        },
        {
            "employer": "International Game Technology",
            "title": "Firmware Engineer",
            "location": "Reno, Nevada",
            "dates": "May 1993 - September 1996",
            "description": "Game developer and firmware engineer. Technologies:  Intel 80960-based custom OS, Object Oriented C."
        }
    ]
}

work.display = function() {

    if (work.jobs !== null && work.jobs.length > 0) {
        
        // Add the work section to the document.
        $("#workExperience").append(HTMLworkStart)
      
        // Loop through the list and add each included skill to the work section.
        for (var job in work.jobs) {
            // Replace the data element.
            var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            // Uncomment for debug information.
            //console.log("resumeBuilder.displayWork:  " + work.jobs[job].employer);

            var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            // Uncomment for debug information.
            //console.log("resumeBuilder.displayWork:  " + work.jobs[job].title);

            var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            // Uncomment for debug information.
            //console.log("resumeBuilder.displayWork:  " + work.jobs[job].dates);

            var location = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            // Uncomment for debug information.
            //console.log("resumeBuilder.displayWork:  " + work.jobs[job].location);
            
            var description = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            // Uncomment for debug information.
            //console.log("resumeBuilder.displayWork:  " + work.jobs[job].description);
            
            // Construct the work entry from all pieces created above.
            var formattedJob = employer + title + dates + location + description;
            
            // Append the element.
            $(".work-entry:last").append(formattedJob)
        }
    }
    else {
      console.log("resumeBuilder.displayWork:  No work defined.");
    }   
}


//
// Define the various projects that will be displayed.
//
var projects = {
    "projects": [
        {
            "title": "Udacity Project Portfolio",
            "dates": "2014",
            "description": "Personal portfolio developed during the Udacity Front End Developer course.",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        },
        {
            "title": "Udacity Mug Mock-Up",
            "dates": "2014",
            "description": "Project 1 developed during the Udacity Front End Developer course.",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        },
        {
            "title": "Udacity Interactive Resume",
            "dates": "2014",
            "description": "Project 2 developed during the Udacity Front End Developer course.",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        }
    ]
}

// Parses and formats the resume projects.
projects.display = function () {
    
    if (projects.projects !== null && projects.projects.length > 0) {
        
        // Add the work section to the document.
        $("#projects").append(HTMLprojectStart)
      
        // Loop through the list and add each included skill to the work section.
        for (var project in projects.projects) {

            // Replace the data element.
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            // Append the element.
            $(".project-entry:last").append(formattedTitle);

            // Replace the data element.
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            // Append the element.
            $(".project-entry:last").append(formattedDates);

            // Replace the data element.
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            // Append the element.
            $(".project-entry:last").append(formattedDescription);

            // Replace the data element.
            if (projects.projects[project].images.length > 0) {

                // Add each image to the list.
                for (image in projects.projects[project].images) {

                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                    // Append the element.
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
    else {
      console.log("projects.display:  No projects defined.");
    }   
}

//
//  Define the general resume Education information here.
//
var education = {
    "schools": [
        {
            "name": "University of San Diego",
            "location": "San Diego, California",
            "degree": "Bachelor of Arts",
            "majors": [
                "Computer Science"
            ],
            "dates": "1989-1993",
            "url": "https://www.sandiego.edu"
        },
        {
            "name": "Iowa State University",
            "location": "Iowa City, Iowa",
            "degree": "Master of Science",
            "majors": [
                "Human Computer Interaction"
            ],
            "dates": "December 2011 - Present",
            "url": "https://www.iastate.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front End Developer Nanodegree",
            "school": "Udacity",
            "dates": "2014-2015",
            "url": "https://www.udacity.com/course/nd001"
        },
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": "2014",
            "url": "https://www.udacity.com/course/ud304"
        },
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "2014",
            "url": "https://www.udacity.com/course/ud804"
        },
        {
            "title": "Intro to jQuery",
            "school": "Udacity",
            "dates": "2014",
            "url": "https://www.udacity.com/course/ud245"
        },
        {
            "title": "How to Use Git and Github",
            "school": "Udacity",
            "dates": "2014",
            "url": "https://www.udacity.com/course/ud775"
        },
        {
            "title": "HTML5 Canvas",
            "school": "Udacity",
            "dates": "2014",
            "url": "https://www.udacity.com/course/ud292"
        }
    ]
}

// Parses and formats the school information.
education.display = function() {

    if (education.schools !== null && education.schools.length > 0) {

        // Add the element to the document.
        $("#education").append(HTMLschoolStart)

        // Loop through the list and add each included skill to the skills section.
        for (var school in education.schools) {

            // Replace the data element.
            // The school and the degree are added together.
            var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            // Append the element.
            $(".education-entry:last").append(formattedSchool + formattedDegree);

            // Add the location.
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $(".education-entry:last").append(formattedLocation);

            // Add the dates of attendance.
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            $(".education-entry:last").append(formattedDates);

            // Include all majors.
            for (major in education.schools[school].majors) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
                $(".education-entry:last").append(formattedMajor);
            }
        }
    }
    else {
      console.log("resumeBuilder.education.display:  No schools defined.");
    }
}

onlineEd.display = function() {
    
    // Display the online coursework now.
    $("#onlineed").append(HTMLonlineEdStart)
    
    if (education.onlineCourses != null && education.onlineCourses.length > 0) {

        // Loop through the list and add each included skill to the skills section.
        for (var onlineCourse in education.onlineCourses) {

            // Replace the data element.
            // The course title and the school are added together.
            var formattedCourse = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
            // Append the element.
            $(".online-ed-entry:last").append(formattedCourse + formattedSchool);

            var formattedDates = HTMLschoolDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
            $(".online-ed-entry:last").append(formattedDates);

            var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
            $(".online-ed-entry:last").append(formattedURL);
        }

    }
    else {
         console.log("resumeBuilder.education.display:  No online courses defined.");
    }
}

// Draw the page.
bio.display();
work.display();
projects.display();
education.display();
onlineEd.display();

//
// Get out the map.
//
$("#mapDiv").append(googleMap);

//
// Define general utility functions for the project.
//

// 
function locationizer(work_object) {

    var locations = [];
    
    if (work_object !== null && work_object.jobs !== null && work_object.jobs.length > 0) {
      
        // Loop through the list and add each included skill to the work section.
        for (var job in work_object.jobs) {
            locations.push(work_object.jobs[job].location);
        }
    }
    else {
      console.log("resumeBuilder.locationizer:  No work defined.");
    }
    return locations;
}

// Internationalizes the capitalization of the name.
function inName (nameIn) {

    var firstName = "";
    var lastName = "";

    if (nameIn !== null && nameIn.length > 0) {

        // Remove leading and trailing whitespace and split on the remaining space.
        var names = nameIn.trim().split(" ");
        
        // Do some error checking on the string before continuing.
        if (names.length > 0 && names[0] !== null && names[0].length > 0) {

            // Capitalize the first letter and make the rest of the letters lowercase.
            firstName = names[0];
            var firstLetter = "";
            if (firstName.length > 0) {
                firstLetter = firstName.slice(0,1).toUpperCase();
            }

            if (firstName.length > 1) {
                firstName = firstLetter + firstName.slice(1).toLowerCase();
            }
        }

        // Do some error checking on the string before continuing.
        if (names.length > 1 && names[1] !== null && names[1].length > 0) {
            // Capitalize the last name.
            lastName = names[1].toUpperCase();
        }
    }
    // Construct the name and return it.
    return firstName + " " + lastName;
}

