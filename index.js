document.addEventListener("DOMContentLoaded", function() {
  const contact = document.getElementById("contactbtn");
  const contactForm = document.getElementById("contactForm");

  if (contact && contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!isFormValid()) {
        alert("Please fill out the form correctly before submitting!");
        return;
      }

      // Get form data
      const formData = {
        name: document.getElementById("exampleInputName").value,
        subject: document.getElementById("exampleFormControlTextarea1").value,
        email: document.getElementById("exampleFormControlInput1").value,
        phone: document.getElementById("exampleInputPassword1").value,
        message: document.getElementById("exampleFormControlTextarea1").value
      };

      // Send email to company using the customer's data directly
      const companyEmail = {
        name: formData.name,
        subject: formData.subject,
        message: formData.message
      };

      // Send email using EmailJS
      try {
        // Send notification to company
        emailjs.send("service_p2nyi3i", "template_zlkzwda", companyEmail)
          .then(() => {
            // Send confirmation to customer
            return emailjs.send("service_p2nyi3i", "template_us0y45o", {
              name: formData.name,
              title: formData.subject,
              email: formData.email
            });
          })
          .then(function(response) {
            console.log('Both emails sent successfully:', response);
            alert("Thank you for contacting us! We will get back to you shortly.");
            contact.classList.add("submitted");
            contact.textContent = "Submitted";
            contactForm.reset();
          }, function(error) {
            console.error('EmailJS Error:', error);
            alert("Error sending email: " + error.text);
          });
      } catch (error) {
        console.error('General Error:', error);
        alert("Error: " + error.message);
      }
    });

    contact.addEventListener("mouseover", (event) => {
      event.target.classList.add("hover");
    });

    contact.addEventListener("mouseout", (event) => {
      event.target.classList.remove("hover");
    });
  }
});

// Form validation function
function isFormValid() {
  const name = document.getElementById("exampleInputName").value.trim();
  const email = document.getElementById("exampleFormControlInput1").value.trim();
  const phone = document.getElementById("exampleInputPassword1").value.trim();
  const message = document.getElementById("exampleFormControlTextarea1").value.trim();

  if (!name || !email || !message) {
    return false;
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  }

  return true;
}
// Booking Button
const booking = document.getElementById("bookbtn");

if (booking) {
booking.addEventListener("click", event =>{
    event.preventDefault();
    alert("Thank you for booking with us! We will get back to you shortly.");
    window.location.href = "confirmation.html";  
} );
}

const booKNow = document.getElementById("booKNow");

if(booKNow){
    booKNow.classList.add("slideUp");
    booKNow.addEventListener("animationend", event =>{
        event.target.classList.remove("slideUp");
    });

  booKNow.addEventListener("mouseover", event =>{
    event.target.classList.add("hover");
  });

  booKNow.addEventListener("mouseout", event =>{
    event.target.classList.remove("hover");
  });

}


const elements = document.querySelectorAll('.popUp');

      
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.5 
});

elements.forEach(element => {
  observer.observe(element);
});
