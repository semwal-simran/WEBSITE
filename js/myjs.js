// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAg6AzLErGPrbJo0nLPtFqs_svjwS7aHNM",
    authDomain: "my-project-1-5b207.firebaseapp.com",
    databaseURL: "https://my-project-1-5b207.firebaseio.com",
    projectId: "my-project-1-5b207",
    storageBucket: "my-project-1-5b207.appspot.com",
    messagingSenderId: "609707785202",
    appId: "1:609707785202:web:9c888f49228b1d7eb1496b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var dbRef = firebase.database().ref('user_name');
var dbRef1 = firebase.database().ref('user_email');
var dbRef2 = firebase.database().ref('user_sub');
var dbRef3 = firebase.database().ref('user_msg');


function submission()
{
    console.log("Submitted");
	var p = document.querySelector('#user').value;
	var q = document.querySelector('#email').value;
    var sub = document.querySelector('#sub').value;
    var msg = document.querySelector('#msg').value;


	dbRef.set(p);
	dbRef1.set(q);
    dbRef2.set(sub);
    dbRef3.set(msg);


	// let p=document.querySelector('#names').value
	// console.log(p)

	// let q=document.querySelector('#email').value
	// console.log(q)
}