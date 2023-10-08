/*!
=========================================================
* JohnDoe Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});

//form submission
// function submitForm() {
//   // Get form data
//   const recipient = JSON.stringify(document.getElementById("recipient").value);
//   const name = JSON.stringify(document.getElementById("name").value);
//   const subject = JSON.stringify(document.getElementById("subject").value);
//   const message = JSON.stringify(document.getElementById("message").value);

//   // Create an object with the form data
//   const formData = JSON.stringify({
//       website: "test",
//       recipient: recipient,
//       name: name,
//       subject: subject,
//       message: message,
//   });

//   // Send a POST request to your Django backend
//   fetch("https://email-backend-system.vercel.app/api/test/", {
//       method: "POST",
//       headers: {
//           "Content-Type": "application/json"
//       },
//       body: formData,
//   })
//   .then((response) => {
//       if (response.ok) {
//           alert("Email sent successfully!");
//       } else {
//           alert("Email failed to send.");
//       }
//   })
  
// }

// Attach the submitForm function to the button click event
// document.getElementById("submitButton").addEventListener("click", submitForm);
document.getElementById("submitButton").addEventListener("click", function (e) {
    e.preventDefault();

    // Get form data
    const recipient = document.getElementById("recipient").value;
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Create an object with the form data
    const formData = JSON.stringify({
        website: "qa-portfolio",
        recipient: recipient,
        name: name,
        subject: subject,
        message: message,
    });

    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://email-backend-system.vercel.app/api/qa-portfolio/", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(formData);

    // Handle the response
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) { // Status starts with 2
            alert("Email sent successfully!");
        } else if (xhr.status >= 400 && xhr.status < 600) { // Status starts with 4 or 5
            alert("Email failed to send. Error: " + xhr.status);
        } else {
            alert("An unexpected error occurred.");
        }
    };

    xhr.onerror = function () {
        console.error("An error occurred while sending the email.");
        alert("An error occurred while sending the email.");
    };

    // Send the POST request with JSON data
    // xhr.send(JSON.stringify(formData));
});