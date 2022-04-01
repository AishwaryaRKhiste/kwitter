//YOUR FIREBASE LINKS
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
        function send()
        {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
           });
        
          document.getElementById("msg").value = "";
        }        
        user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
//name_with_tag = "<h4 " + name +"<img class="user_name" src='tick.png'></h4>";
//message_with_tag = "<h4 class='message_h4'>" + message +"</h4>";
//like_button ="<button class = 'btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='uppdatelike(this.id)'>" 
//span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

//row = name_with_tag + message_with_tag + span_with_tag;
row = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4><h4 class='message_h4'>"+ message +"</h4><button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+"' onclick='updateLike(this.id)'><span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";  
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
function updateLike(message_id)
{
	button_id = message_id;
	likes = document.getElementById(button_id).value;
	likes_in_number = Number(likes) + 1;
	console.log(likes_in_number);

	firebase.database().ref(room_name).child(message_id).update({
		like : likes_in_number
	 });

}