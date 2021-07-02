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
password = localStorage.getItem("password");
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";
    function add_room()
    {
          
          room_name = document.getElementById("room_name").value;
          firebase.database().ref(password).child(password).update({
                purpose : "add room name"
          });
          localStorage.setItem("Room_name" , room_name);
          window.location = "whatsnewpage.html";
    }
function getData() {firebase.database().ref(password).on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirecttoroom(this.id)'>#"+Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirecttoroom(name)
{
    console.log(name);
    localStorage.setItem("Room_name", name);
    window.location = "whatsnewpage.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
