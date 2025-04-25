document.addEventListener("DOMContentLoaded", function() {
const contact = document.getElementById("contactbtn");
if (contact) {
contact.addEventListener("click", event =>{
    event.preventDefault();  
    if(event.target.classList.contains("submitted")){
        alert("Don't worry we will get back to you asap."); 
    }
    else{
        event.target.classList.toggle("submitted");
        event.target.textContent ="Submitted";
        alert("Thank you for contacting us! We will get back to you shortly."); 
    }
  

});
contact.addEventListener("mouseover", event =>{
    event.target.classList.add("hover");

});
contact.addEventListener("mouseout", event =>{
    event.target.classList.remove("hover");

});
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
});

/*validation
const form = document.getElementById('contactbtn');

 
  form.addEventListener("click", function(event) {
  event.preventDefault();

  let errorMessages = [];
  const name = document.getElementById('exampleInputName').value;
  const email = document.getElementById('exampleInputEmail').value;
  const phone = document.getElementById('exampleInputPhone').value;
  const message = document.getElementById('exampleFormControlTextarea1').value;

  // Validate Name
  if (name.trim() === '') {
      errorMessages.push("Name is required.");
  }

  // Validate Email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email.trim() === '') {
      errorMessages.push("Email address is required.");
  } else if (!emailPattern.test(email)) {
      errorMessages.push("Please enter a valid email address.");
  }


  const phonePattern = /^\d{10}$/; 
  if (phone.trim() === '') {
      errorMessages.push("Phone number is required.");
  } else if (!phonePattern.test(phone)) {
      errorMessages.push("Please enter a valid phone number.");
  }

 
  if (message.trim() === '') {
      errorMessages.push("Message is required.");
  }


  const errorDiv = document.getElementById('errorMessages');
  if (errorMessages.length > 0) {
      errorDiv.innerHTML = errorMessages.join('<br>');
  } else {
      errorDiv.innerHTML = ''; 
      alert("Form submitted successfully!"); 
  }
});

*/
