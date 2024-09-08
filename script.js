// Sections
var workExp = document.querySelector(".workexp-data");
var education = document.querySelector(".education-data");
var skills = document.querySelector(".skills-data");
// Buttons
var workExpBtn = document.getElementById("workexp-btn");
var skillsBtn = document.getElementById("skills-btn");
var educationBtn = document.getElementById("education-btn");
// Event Listeners 
function workExpExpander() {
    var clutter = " ";
    workExpBtn.addEventListener("click", function () {
        clutter += "<label class=\"labels\" for=\"company\">Enter Your Company Name: </label>\n                  <br>\n                  <input class=\"inputs\" type=\"text\" placeholder=\"Company\" id=\"company\">\n                  <br>\n                  <label class=\"labels\" for=\"position\">Enter Your Position: </label>\n                  <br>\n                  <input class=\"inputs\" type=\"text\" placeholder=\"Position\" id=\"position\"> \n                  <br>\n\n                  <label class=\"labels date-labels\" for=\"work-sdate\">Input Start Date: </label>\n                  <br class=\"display-hidden\">\n                  <input class=\"workdates\" type=\"date\" name=\"work-startdate\" id=\"work-sdate\">\n                  <br>\n                  <label class=\"labels date-labels\" for=\"edate\">Input End Date: </label>\n                  <br class=\"display-hidden\">\n                  <input class=\"workdates\" type=\"date\" name=\"enddate\" id=\"work-edate\">\n                  <br>\n                  <label class=\"labels\" for=\"work-desc\">Description: </label>\n                  <br>\n                    <textarea class=\"inputs\" name=\"work-description\" id=\"work-desc\" placeholder=\"Description\"></textarea> \n                  <br>";
        workExp.innerHTML = clutter;
    });
}
;
function skillsExpander() {
    var clutter = " ";
    skillsBtn.addEventListener("click", function () {
        clutter += "<label class=\"labels\" for=\"skill\">Skill Name: </label>\n                  <br>\n                  <input class=\"inputs\" type=\"text\" placeholder=\"Skill\" id=\"skill\">\n                  <br>\n                  <label class=\"labels\" for=\"skill-lvl\">Skill Level: </label>\n                  <br>\n                  <input class=\"inputs\" type=\"text\" placeholder=\"Skill Level\" id=\"skill-lvl\"> \n                  <br>";
        skills.innerHTML = clutter;
    });
}
;
function educationExpander() {
    var clutter = " ";
    educationBtn.addEventListener("click", function () {
        clutter += "<label class=\"labels\" for=\"institution\">Enter Your Institution Name: </label>\n                  <br>\n                  <input class=\"inputs\" type=\"text\" placeholder=\"Intstitution\" id=\"institution\">\n                  <br>\n                  <label class=\"labels\" for=\"degree\">Enter Your Degree: </label>\n                  <br>\n                  <input class=\"inputs\" type=\"text\" placeholder=\"Degree\" id=\"degree\"> \n                  <br>\n\n                  <label class=\"labels date-labels\" for=\"sdate\">Input Start Date: </label>\n                  <br class=\"display-hidden\">\n                  <input class=\"edudates\" type=\"date\" name=\"startdate\" id=\"sdate\">\n                  <br>\n                  <label class=\"labels date-labels\" for=\"edate\">Input End Date: </label>\n                  <br class=\"display-hidden\">\n                  <input class=\"edudates edudate-last\" type=\"date\" name=\"enddate\" id=\"edate\">\n                  <br>";
        education.innerHTML = clutter;
    });
}
;
// Interactivity ends here // 
// Form Input starts here  //
function generateResume() {
    var _a;
    (_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
        var _a;
        event.preventDefault();
        var resumeContainer = document.querySelector(".resume-container");
        resumeContainer.style.borderColor = "rgba(125, 186, 92, 0.5)";
        // Get the input values
        // Personal Information
        var firstNameElement = document.getElementById("fname");
        var lastNameElement = document.getElementById("lname");
        var emailElement = document.getElementById("email");
        var addressElement = document.getElementById("address");
        var phoneNumberElement = document.getElementById("phnumber");
        var profilePicElement = document.getElementById("resume-image");
        // Education Input
        var educationInstitutionElement = document.getElementById("institution");
        var educationDegreeElement = document.getElementById("degree");
        var educationStartDateElement = document.getElementById("sdate");
        var educationEndDateElement = document.getElementById("edate");
        // Work Experience Input
        var experienceCompanyElement = document.getElementById("company");
        var experiencePositionElement = document.getElementById("position");
        var experienceWorkSdateElement = document.getElementById("work-sdate");
        var experienceWorkEdateElement = document.getElementById("work-edate");
        var experienceWorkDescElement = document.getElementById("work-desc");
        // Skills Input
        var skillsNameElement = document.getElementById("skill");
        var skillLvlElement = document.getElementById("skill-lvl");
        if (firstNameElement && lastNameElement && emailElement && addressElement && phoneNumberElement && profilePicElement && educationInstitutionElement && educationDegreeElement && educationStartDateElement && educationEndDateElement && experienceCompanyElement && experiencePositionElement && experienceWorkSdateElement && experienceWorkEdateElement && experienceWorkDescElement && skillLvlElement && skillsNameElement) {
            // Getting values of Elements:
            var name_1 = firstNameElement.value + " " + lastNameElement.value;
            var email = emailElement.value;
            var address = addressElement.value;
            var phnumber = phoneNumberElement.value;
            var profilePictureFile = (_a = profilePicElement.files) === null || _a === void 0 ? void 0 : _a[0];
            var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
            var educationInstitution = educationInstitutionElement.value;
            var educationDegree = educationDegreeElement.value;
            var educationStartDate = educationStartDateElement.value;
            var educationEndDate = educationEndDateElement.value;
            var experienceCompany = experienceCompanyElement.value;
            var experiencePosition = experiencePositionElement.value;
            var experienceWorkSdate = experienceWorkSdateElement.value;
            var experienceWorkEdate = experienceWorkEdateElement.value;
            var experienceWorkDesc = experienceWorkDescElement.value;
            var skillName = skillsNameElement.value;
            var skillLvl = skillLvlElement.value;
            // Update the resume preview
            var resumeContent = "\n            <div class=\"heading-display\">\n                <h1 class=\"heading-text-display\">Resume</h1>\n            </div>\n\n            <div class=\"main-content\">\n\n\n                <div class=\"img-cont\">\n                <!-- <img class=\"".concat(profilePictureURL, "\" src=\"\" alt=\"\"> -->\n                </div>\n\n\n                <div class=\"contactinfo-display\">\n                <h2 class=\"display-headings\">Contact Information:</h2>\n                <p class=\"display-paragraphs\">Name: ").concat(name_1, "</p>\n                <p class=\"display-paragraphs\">Phone Number: ").concat(phnumber, "</p>\n                <p class=\"display-paragraphs\">Email: ").concat(email, "</p>\n                <p class=\"display-paragraphs\">Address: ").concat(address, "</p>\n                </div>\n\n\n                <div class=\"education-display\">\n                <h2 class=\"display-headings\">Education: </h2>\n                <ul>\n                    <li class=\"display-lis\">Institution: ").concat(educationInstitution, "</li>\n                    <li class=\"display-lis\">Degree: ").concat(educationDegree, "</li>\n                    <li class=\"display-lis\">Start Date: ").concat(educationStartDate, "</li>\n                    <li class=\"display-lis\">End Date: ").concat(educationEndDate, "</li>\n                </ul>\n                </div>\n\n\n                <div class=\"workexp-display\">\n                <h2 class=\"display-headings\">Work Experience:</h2>\n                <ul>\n                    <li class=\"display-lis\">Company Name: ").concat(experienceCompany, "</li>\n                    <li class=\"display-lis\">Position: ").concat(experiencePosition, "</li>\n                    <li class=\"display-lis\">Start Date: ").concat(experienceWorkSdate, "</li>\n                    <li class=\"display-lis\">End Date: ").concat(experienceWorkEdate, "</li>\n                    <li class=\"display-lis\">Description: ").concat(experienceWorkDesc, "</li>\n                </ul>\n                </div>\n\n\n                <div class=\"skills-display\">\n                <h2 class=\"display-headings\">Skills:</h2>\n                <ul>\n                    <li class=\"display-lis\">Skill: ").concat(skillName, "</li>\n                    <li class=\"display-lis\">Skill Level: ").concat(skillLvl, "</li>\n                </ul>\n                </div>\n\n\n            </div>\n        ");
            var resumeContainer_1 = document.querySelector(".resume-container");
            resumeContainer_1.innerHTML = resumeContent;
        }
        else {
            console.error('One or More Output Elements are Missing');
        }
        ;
    });
}
;
// Form Input Ends here. // 
// Make Editable Starts here. //
educationExpander();
skillsExpander();
workExpExpander();
generateResume();
