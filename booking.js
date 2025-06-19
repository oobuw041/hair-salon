// Get all necessary elements
const form = document.getElementById("form");
const dateInput = document.getElementById("dateInput");
const bookBtn = document.getElementById("bookbtn");

// --- Prevent Past Dates ---
const today = new Date().toISOString().split("T")[0];
dateInput.min = today;

// --- Load Booked Dates from localStorage ---
let bookedDates = JSON.parse(localStorage.getItem("bookedDates")) || [];

// --- Helper to Check if Date is Already Booked ---
function isDateBooked(date) {
  return bookedDates.includes(date);
}

// --- Booking Form Submission ---
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("nameInput").value.trim();
  const email = document.getElementById("emailInput").value.trim();
  const phone = document.getElementById("phoneInput").value.trim();
  const date = document.getElementById("dateInput").value;
  const service = document.getElementById("serviceInput").value.trim();
  const size = document.getElementById("sizeInput").value.trim();
  const extra = document.getElementById("exampleFormControlTextarea1").value.trim();
  const time = document.getElementById("timeInput").value;

  if (!name || !email || !phone || !date || !service || !size) {
    alert("Please fill out all required fields.");
    return;
  }
/*
  if (isDateBooked(date)) {
    alert("This date is already booked. Please choose another one.");
    return;
  }
 */
  // Save new booking
  bookedDates.push(date);
  localStorage.setItem("bookedDates", JSON.stringify(bookedDates));

  // Notify user (you can replace this with emailjs later)
  const serviceID = "service_p2nyi3i";
  const templateID = "template_zlkzwda";
  
  // Prepare message content
  const fullMessage = `
  New booking received:
  
  • Name: ${name}
  • Email: ${email}
  • Phone: ${phone}
  • Date: ${date}
  • Service: ${service}
  • Size: ${size}
  • Extra Info: ${extra}`;
  
  const emailParams = {
    title: "New Appointment Booking",
    message: fullMessage
  };
  
 const firebaseConfig = {
  apiKey: "AIzaSyDcBy29MbRRdCH1MRghck86O9fgiUChGQM",
  authDomain: "hairwebsite-85fa8.firebaseapp.com",
  projectId: "hairwebsite-85fa8",
  storageBucket: "hairwebsite-85fa8.firebasestorage.app",
  messagingSenderId: "46121165455",
  appId: "1:46121165455:web:645ec8fc1d7cb4278946fa",
  measurementId: "G-971LKJ8X88"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();


  db.collection("bookings")
  .where("date", "==", date)
  .where("time", "==", time)
  .get()
  .then((querySnapshot) => {
    if (!querySnapshot.empty) {
      alert("That date is already booked. Please choose another.");
      throw new Error("Date already booked");
    }
    
    // If not booked, proceed to save
   return db.collection("bookings").add({
      name,
      email,
      phone,
      date,
      time,
      service,
      size,
      extra,
      createdAt: new Date().toISOString()
    })
  })
  .then((docRef) => {
    console.log("Booking added with ID: ", docRef.id);

    return emailjs.send(serviceID, templateID, {
      name,
      email: "hairhubtornoto@gmail.com",
      title: "New Appointment Booking",
      message: fullMessage
    })
    .then(() => {
      // Then send confirmation to customer
      return emailjs.send(serviceID, templateID, {
        name,
        email, // customer's email
        title: "Booking Received ✔️",
        message: `Hi ${name},\n\nThank you for booking with HairHub! Your appointment for "${service}" on ${date} has been received.\n\nWe'll be in touch soon to confirm any additional details.\n\n💇🏽‍♀️ — The HairHub Team`
      });
    })
    .then(() => {
      alert("Booking complete! Confirmation sent to your email.");
      form.reset();
    })
    .catch((error) => {
      if (error.message === "Date already booked") {
      } else {
        console.error("Booking failed:", error);
        alert("Something went wrong with your booking.");
      }
    });
  })
});
