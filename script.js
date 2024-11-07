var detailForm = document.querySelector(".resume-container");
var finalForm = document.querySelector(".finalResume");
var profilePic = document.querySelector("#image");
var mainHead = document.querySelector(".main-head");
detailForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var userName = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var number = document.querySelector("#number").value;
    var education = document.querySelector("#education").value;
    var skills = document.querySelector("#skills").value;
    var experience = document.querySelector("#experience").value;
    var about = document.querySelector("#about").value;
    var profileImageUrl = "";
    if (profilePic.files && profilePic.files[0]) {
        profileImageUrl = URL.createObjectURL(profilePic.files[0]);
    }
    var finalResume = "\n        <h1>RESUME</h1>\n        ".concat(profileImageUrl ? "<img src=\"".concat(profileImageUrl, "\" alt=\"Profile Image\" style=\"max-width: 150px; height: auto; border-radius: 8px;\">") : "", "\n        <p class=\"final-resume-head\"><b>Name:</b> ").concat(userName, "</p>\n        <p class=\"final-resume-head\"><b>Email:</b> ").concat(email, "</p>\n        <p class=\"final-resume-head\"><b>Contact No:</b> ").concat(number, "</p>\n        <p class=\"final-resume-head\"><b>Education:</b> ").concat(education, "</p>\n        <p class=\"final-resume-head\"><b>Skills:</b> ").concat(skills, "</p>\n        <p class=\"final-resume-head\"><b>Experience:</b> ").concat(experience, "</p>\n        <p class=\"final-resume-head\"><b>About:</b> ").concat(about, "</p>\n    ");
    if (finalForm) {
        finalForm.innerHTML = finalResume;
        detailForm.style.display = "none";
        mainHead.style.display = "none";
    }
});
