var firebaseConfig = {
  apiKey: "AIzaSyCh-69I6eM7pYSnrTsyY-SN4g4_ibxTBwM",
  authDomain: "kwitter-2-3f169.firebaseapp.com",
  databaseURL: "https://kwitter-2-3f169-default-rtdb.firebaseio.com",
  projectId: "kwitter-2-3f169",
  storageBucket: "kwitter-2-3f169.appspot.com",
  messagingSenderId: "183155765270",
  appId: "1:183155765270:web:9ee5554e01ed11a4a3c537",
  measurementId: "G-JMWBF44X8F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
});

  localStorage.setItem("room_name", room_name);
  
  window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
  });
});

}

getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
  window.location = "index.html";
}
