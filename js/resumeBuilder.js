/*
 * From the project description in README.md.
 *  work` contains an array of `jobs`. Each `job` object in `jobs` should contain:
 *  `employer`, `title`, `location`, `dates worked` and `description`.
*/

//
//  Define the resume work history information here.  Sorted from most recent to longest ago.
//
var work =  {
    "jobs": [
        {
            "employer": "Bally Technologies",
            "title": "Principal Software Engineer",
            "location": "Reno, Nevada",
            "dates": "October 2013 - Present",
            "description": "R&D Software Engineer, Innvovation Lab.  Rapid development of leading edge technologies for the gaming industry including iOS and mobile games, iBeacon and location aware content, gesture-based and Leap Motion virtual reality games.  Technologies:  Unity3D, C#, iOS, Objective-C, HTML5, JavaScript, CSS3, JSON",
            "url": "http://www.ballytech.com"
        },
        {
            "employer": "Kizzang, LLC",
            "title": "Software Architect",
            "location": "Las Vegas, Nevada",
            "dates": "April 2013 - September 2013",
            "description": "Software Architect responsible for the design and implementation of the company's n-tier scratch card lottery system.  Deployments included web and mobile.  Technologies:  ActionScript, Flash, Starling, Feathers, HTML, JSON, and PHP.",
            "url": "http://www.kizzang.com"
        },
        {
            "employer": "Spooky Cool Labs",
            "title": "Software Architect, Game Developer",
            "location": "Chicago, Illinois",
            "dates": "February 2013 - April 2013",
            "description": "Software Architect responsible for the design and implementation of the company's n-tier social slots system and games.  Technologies:  ActionScript, Flash, JSON.",
            "url": "http://techcrunch.com/2013/06/19/zynga-spooky-cool/"
        },
        {
            "employer": "International Game Technology",
            "title": "Software Architect, Staff Software Engineer",
            "location": "Reno, Nevada",
            "dates": "February 2007 - February 2012",
            "description": "Staff Software Engineer and Architect responsible for design and implementation of the company's fault-tolerant gaming platforms.  Technologies:  C, C++, C#, QNX, Windows 3.1, Unity3D.",
            "url": "http://www.igt.com"
        },
        {
            "employer": "Intuit",
            "title": "Senior Software Engineer",
            "location": "Reno, Nevada",
            "dates": "July 2006 - February 2007",
            "description": "Senior Software Engineer responsible for designing the next generation Quick Books Portal.  Technologies:  Java",
            "url": "http://www.intuit.com"
        },
        {
            "employer": "International Game Technology",
            "title": "Staff Software Engineer",
            "location": "Reno, Nevada",
            "dates": "July 1997 - July 2006",
            "description": "Staff Software Engineer and Architect responsible for design and implementation of the company's fault-tolerant gaming platforms.  Technologies:  C, C++, C#, QNX, Windows 3.1, Unity3D.",
            "url": "http://www.igt.com"
        },
        {
            "employer": "Realtime Associates, Inc",
            "title": "Lead Software Engineer",
            "location": "Redmond, Washington",
            "dates": "October 1996 - January 1997",
            "description": "Lead software engineer for the Windows95 release of Magic the Gathering: Battlemage.  Technologies:  Windows95, DirectX, C++.",
            "url": ""
        },
        {
            "employer": "International Game Technology",
            "title": "Firmware Engineer",
            "location": "Reno, Nevada",
            "dates": "May 1993 - September 1996",
            "description": "Game developer and firmware engineer. Technologies:  Intel 80960-based custom OS, Object Oriented C (yes, I said that).",
            "url": "http://www.igt.com"
        }
    ]
}

// The following funtion adds the work elements to the resume display.
work.display = function() {

    if (work.jobs !== null && work.jobs.length > 0) {
        
        // Loop through the list and add each included skill to the work section.
        for (var job in work.jobs) {
    
            // Add a new work entry that will contain the work elements.
            $("#workExperience").append(HTMLworkStart)

            // Construct the elements.
            var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

            // If a URL has been included for the company replace the hashtag.
            if (work.jobs[job].url != null) {
                employer = employer.replace("#", work.jobs[job].url)
            }

            var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var location = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var description = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            
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

/*
 * From the project description in README.md.
 * `projects` contains an array of `projects`. Each `project` object in `projects` should contain:
 *  a `title`, `dates worked`, `description`, and an `images` array with URL strings for project images. 
*/

//
// Define the various projects that will be displayed.
//
var projects = {
    "projects": [
        {
            "title": "Udacity Project Portfolio",
            "dates": "2014",
            "description": "Personal portfolio developed during the Udacity Front End Developer course.",
            "images": ["images/CodeSnippet.02.png", "images/UnityButton.png"],
            "url": ""
        },
        {
            "title": "Udacity Mug Mock-Up",
            "dates": "2014",
            "description": "Project 1 developed during the Udacity Front End Developer course.",
            "images": ["images/udacity-mug.png", "images/HTML5Button.png"],
            "url": ""
        },
        {
            "title": "Udacity Interactive Resume",
            "dates": "2014",
            "description": "Project 2 developed during the Udacity Front End Developer course.",
            "images": ["images/ResumeCapture01.png", "images/ResumeCapture02.png"],
            "url": ""
        }
    ]
}

// Parses and formats the project information for display.
projects.display = function () {
    
    if (projects.projects !== null && projects.projects.length > 0) {
        
        // Loop through the list and add each included skill to the work section.
        for (var project in projects.projects) {

            // Add the work section to the document.
            $("#projects").append(HTMLprojectStart)

            // Replace the data element.
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            if (projects.projects[project].url != null) {
                formattedTitle = formattedTitle.replace("#", projects.projects[project].url)
            }
            
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

/*
 * From the project description in README.md.
 * `bio` contains a `name`, `role`, `welcomeMessage`, `contacts` object and `skills` array.
 *  The `contacts` object should contain (but doesn't have to) a `mobile number`, `email` address, `github` username,
 *  `twitter` handle and `location`.
*/

//
//  Define the general resume Biography information here.
//
var bio = {
    "name" : "Nicole Beaulieu",
    "role" : "Software Engineer and Architect",
    "biopic" : "images/LogoColor@High.png",
    "welcomeMessage" : "Rock star computer geek fascinated with the art of making awesome games with a compelling hook. " + 
        "Crazy about designing and implementing robust, maintainable, and beautiful code.  Passionate about tackling any possible learning curve. " +
        "Innovative and creative with an extensive patent portfolio.",
    "skills": ["software architecture", "technical research", "technical leadership", "learning curve master", "game development", "patents and inventions",
                "team player and heavy weight puller","C#", "C/C++", "JavaScript", "HTML5", "Objective-C", "AS3", "iOS", "QNX", "Windows Embedded", "www", "Mobile HTML5" ],
    "contacts": {
        "mobile": "775.303.6384",
        "email": "nbeaulieu@me.com",
        "github": "nbeaulieu",
        "twitter": "@nmbeaulieu",
        "location": "Reno, Nevada",
    }
}

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

// Parses and formats the biography image/portrait.
bio.displayImage = function() {

    if (bio !== null && bio.biopic != null) {

        // Replace the data element.
        var formattedImage = HTMLbioPic.replace("%data%",bio.biopic);
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
bio.displayContacts = function(selectorId) {

    if (bio !== null && bio.contacts !== null) {

        // Parse the bio contact information. Only show the elements that have valid entries.

        if (bio.contacts.mobile != null && bio.contacts.mobile.length > 0) {
            // Replace the data element.
            var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            // Add the element to the document.
            $(selectorId).append(formattedMobile);
        }

        if (bio.contacts.email != null && bio.contacts.email.length > 0) {
            // Replace the data element.
            var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
            // Add the element to the document.
            $(selectorId).append(formattedEmail);
        }
        
        if (bio.contacts.github != null && bio.contacts.github.length > 0) {
            // Replace the data element.
            var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
            // Add the element to the document.
            $(selectorId).append(formattedGithub);
        }

        if (bio.contacts.twitter != null && bio.contacts.twitter.length > 0) {
            // Replace the data element.
            var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
            // Add the element to the document.
            $(selectorId).append(formattedTwitter);
        }

        // Replace the data element.
        if (bio.contacts.blog != null && bio.contacts.blog.length > 0) {
            var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
            // Add the element to the document.
            $(selectorId).append(formattedBlog);
        }

        if (bio.contacts.location != null && bio.contacts.location.length > 0) {
            // Replace the data element.
            var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
            // Add the element to the document.
            $(selectorId).append(formattedLocation);
        }

    }
    else {
      console.log("resumeBuilder.bio.display:  No bio defined.");
    }
}

bio.displayContactsHeader = function() {
    bio.displayContacts("#topContacts");
}

bio.displayContactsFooter = function() {
    bio.displayContacts("#footerContacts");
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

            // Append the skill to the skills section.
            $("#skills:last").append(formattedSkill)
        }
    }
    else {
      console.log("resumeBuilder.bio.displaySkills:  No skills defined.");
    }
}

// Wraps up the display methods required by the bio object into a single display method that's consistent
// with the other objects.
bio.display = function() {
    bio.displayHeader();
    bio.displayContactsHeader();
    bio.displayImage();
    bio.displayWelcome();
    bio.displaySkills();
    bio.displayContactsFooter();
}

/*
 * From the project description in README.md.
 *  `education` contains an array of `schools`. Each `school` object in `schools` contains
 *  a `name`, `location`, `degree`, `majors` array, `dates attended` and a `url` for the school's website.
 *  `education` also contains an `onlineCourses` array. Each `onlineCourse` object in `onlineCourses` should contain a
 *  `title`, `school`, `dates attended` and a `url` for the course.
*/

//
//  Define the general resume Education information here.
//
var education = {
    "schools": [
        {
            "name": "University of San Diego",
            "location": "San Diego, California",
            "degree": "Bachelor of Arts",
            "majors": [ "Computer Science" ],
            "dates": "1989-1993",
            "url": "http://www.sandiego.edu"
        },
        {
            "name": "Iowa State University",
            "location": "Iowa City, Iowa",
            "degree": "Master of Science",
            "majors": [ "Human Computer Interaction" ],
            "dates": "December 2011 - Present",
            "url": "http://www.iastate.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front End Developer Nanodegree",
            "school": "Udacity",
            "dates": "2014-2015",
            "url": "http://www.udacity.com/course/nd001",
            "schoolURL": "http://www.udacity.com"
        }
    ]
}

// Parses and formats the education information for display.
education.displaySchools = function() {

    if (education.schools !== null && education.schools.length > 0) {

        // Loop through the list and add each included skill to the skills section.
        for (var school in education.schools) {

            // Add the element to the document.
            $("#education").append(HTMLschoolStart)

            // The school url, school anem and the degree are added together.
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
            // Insert the URL in the school link.
            if (education.schools[school].url) {
                formattedSchoolName = formattedSchoolName.replace("#", education.schools[school].url);
            }

            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

            // Append the element.
            $(".education-entry:last").append(formattedSchoolName + formattedDegree);

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

// Parses the JSON for the online courses taken and appends it to the education setion of the resume.
education.displayOnline = function() {
    
    if (education.onlineCourses !== null && education.onlineCourses.length > 0) {

        // Loop through the list and add each online school to the section.
        for (var onlineCourse in education.onlineCourses) {

            // Add the online education container.
            $("#education").append(HTMLonlineClasses)

            // Construct the course string and add it.
            var formattedCourse = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);

            // Insert the URL in the link.
            if (education.onlineCourses[onlineCourse].url) {
                formattedCourse = formattedCourse.replace("#", education.onlineCourses[onlineCourse].schoolURL);
            }

            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
            // The titles and their links are added at the same time.
            $(".online-education-entry:last").append(formattedCourse + formattedSchool);

            // Add the dates to the display.
            var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
            $(".online-education-entry:last").append(formattedDates);

            // Add the dates to the display.
            var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
            $(".online-education-entry:last").append(formattedURL);
        }

    }
    else {
         console.log("resumeBuilder.education.display:  No online courses defined.");
    }
}

// Wraps up the display methods required by the education object into a single display method that's consistent
// with the other objects.
education.display = function() {
    education.displaySchools();
    education.displayOnline();
}

//
// Define general utility functions for the project.
//

// Class function used to find all of the job locations.
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


// Calls the display funcitons on each of the objects.
bio.display();
work.display();
projects.display();
education.display();

//
// Get out the map.
//
$("#mapDiv").append(googleMap);

