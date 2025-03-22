//const contactForm = document.getElementById("contactform")

function showMessage() { //place holder
    alert("Thank you for contacting us! We will get back to you shortly.");
}


function showMessage(event) {
    event.preventDefault(); // Prevent form submission (which would reload the page)
    alert("Thank you for booking with us! We will get back to you shortly.");
    window.location.href = "confirmation.html"; // Redirect after alert
}
