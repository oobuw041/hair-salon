document.addEventListener("DOMContentLoaded", function() {
  const contact = document.getElementById("contactbtn");
 
  
  
  if (contact) {
    contact.addEventListener("click", (event) => {
      event.preventDefault(); 
  
      if (!isFormValid()) {
        alert("Please fill out the form correctly before submitting!");
        return;
      } 

      if (event.target.classList.contains("submitted")) {
        alert("Don't worry we will get back to you asap.");
      } else {
        event.target.classList.toggle("submitted");
        event.target.textContent = "Submitted";
        alert("Thank you for contacting us! We will get back to you shortly.");
      }
    });
  
    contact.addEventListener("mouseover", (event) => {
      event.target.classList.add("hover");
    });
  
    contact.addEventListener("mouseout", (event) => {
      event.target.classList.remove("hover");
    });
  }
  
  function isFormValid() {
    const name = document.getElementById('exampleInputName').value.trim();
    const email = document.getElementById('exampleFormControlInput1').value.trim();
    const phone = document.getElementById('exampleInputPassword1').value.trim();
    
  
    return (
      name !== '' &&
      validateEmail(email) &&
      phone.length === 10 && !isNaN(phone)
    );
  }
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
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


