// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBWtaQ_BG77QQH77w5R58374hbGZm6SIW4",
    authDomain: "whatsnew-e9321.firebaseapp.com",
    databaseURL: "https://whatsnew-e9321-default-rtdb.firebaseio.com",
    projectId: "whatsnew-e9321",
    storageBucket: "whatsnew-e9321.appspot.com",
    messagingSenderId: "305279880879",
    appId: "1:305279880879:web:abc61cdb8de9509486ce5a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // We define the function 'set_password()'
  function set_password()
  {
    password = document.getElementById("password").value;


    firebase.database().ref(password).push({
        password : password
    });
    localStorage.setItem("password", password);
    window.location = "add_room.html";
  }