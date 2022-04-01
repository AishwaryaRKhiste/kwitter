// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyALhoXAuMpYYmDBY6KBaeXy0k2_aF3m35U",
      authDomain: "kwitter-6f9ae.firebaseapp.com",
      databaseURL: "https://kwitter-6f9ae-default-rtdb.firebaseio.com",
      projectId: "kwitter-6f9ae",
      storageBucket: "kwitter-6f9ae.appspot.com",
      messagingSenderId: "356876624255",
      appId: "1:356876624255:web:ab9d6d7591e3c4253fba4a",
      measurementId: "G-9CZ7RWGCRV"
    };
    
    // Initialize Firebase
   
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name -" + Room_names);
      row = "<div class= 'room_name' id="+Room_names+" onclick='redrictToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML = row;
      //End code
      });
});
}
getData();

function addRoom()             
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redrictToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
