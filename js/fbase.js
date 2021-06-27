// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCqq1LqoiG3l7kk-FYZGyNAZbZSRJBPg8Y",
    authDomain: "photography-vcp.firebaseapp.com",
    projectId: "photography-vcp",
    storageBucket: "photography-vcp.appspot.com",
    messagingSenderId: "203464304903",
    appId: "1:203464304903:web:adf646e258a533c9717da2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  // Reference contactInfo collections -- this is like creating a database
  let contactInfo = firebase.database().ref("infos");
  
  // Listen for a submit
  document.querySelector("#form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("msg").value;
    console.log(name, email, message);
  
    saveContactInfo(name, email, message);
  
    document.querySelector(".container").reset();
  }
  
  // Save infos to Firebase
  function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      name: name,
      email: email,
      message: message,
    });
  }