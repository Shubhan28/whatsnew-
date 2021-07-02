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
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("Room_name");
function send()
{
   msg = document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
         name : user_name,
         message : msg,
         seen : 0
   });
   document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      seen = message_data['seen'];
      message = message_data['message'];
      name_with_tag = "<h4>" + name + "<img class='user_tick' src = 'tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
      like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value = "+seen+" onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Seen : "+seen+ "</span></button><hr>";
      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function updateLike(message_id)
{
      console.log("Clicked on seen button! "+message_id);
      button_id = message_id;
      seen = document.getElementById(button_id).value;
      updated_seen = Number(seen) + 1;
      console.log(updated_seen);
      firebase.database().ref(room_name).child(message_id).update({
            seen : updated_seen
      });

}
function logout()
{
      console.log("You have logged out,"+user_name+"!");
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
