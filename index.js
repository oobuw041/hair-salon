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
});