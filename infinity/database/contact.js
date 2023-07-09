// // Configuring the firebase database to our site

// const firebaseConfig = {
//   apiKey: "AIzaSyBnIv8I06zhLCJtfb-9qVuMpyjRd8PuAMo",
//   authDomain: "user-message-392123.firebaseapp.com",
//   projectId: "user-message-392123",
//   storageBucket: "user-message-392123.appspot.com",
//   messagingSenderId: "930679670139",
//   appId: "1:930679670139:web:82aa42ccc15154699b69de",
//   measurementId: "G-LYYJB7EYDZ"
// }

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // Reference messages collection
// var messagesRef = firebase.database().ref('messages')


// // Makes the phone icon shake when clicked
// document.getElementById("phone-icon").addEventListener("click", function() {
//     var icon = this;
//     icon.classList.add("fa-shake");
  
//     setTimeout(function() {
//       icon.classList.remove("fa-shake");
//     }, 1000); // Remove the class after the animation duration (0.5s in this case)
//   });

//   // Submit Form
//   function submitForm(e){
//     e.preventDefault()
    
//     var name = getInput('name')
//     var company = getInput('company')
//     var email = getInput('email')
//     var phone = getInput('phone')
//     var message = getInput('message')

//     saveMessage(name, company, email, phone, message)

    
//   }

// // function to getting form information(values)
// function getInput(id){
//   return document.getElementById(id).value
// }

// // Function to save the message to the firebase database

// function saveMessage(name, company, email, phone, message){
//   var newMessageRef = messagesRef.push()
//   newMessageRef.set({
//     name: name,
//     company: company,
//     email: email,
//     phone: phone,
//     message: message
//   })

// }


