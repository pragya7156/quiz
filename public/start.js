
var e = document.getElementById('st_btn');
e.addEventListener('click', ()=>{
  auth.signOut()
  .then((user) => {
    // Signed out
    // ...
    //console.log(user);
    //alert('you are signed out');
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
      var d = document.getElementById('questions');
      var a = document.getElementById('authseen');
      var f = document.getElementById('first');
      d.style.cssText = 'display: none';
      a.style.cssText = 'display: block';
      f.style.cssText = 'display: none';
  auth.onAuthStateChanged(user => {
    if(user) {
      if(user.emailVerified) {
      //console.log(user);
      var mail = document.getElementById('dismail');
      var d = document.getElementById('questions');
      var a = document.getElementById('authseen');
      var f = document.getElementById('first');
      mail.innerHTML = `Logged in as: <b> ${user.email} </b>` ;
      d.style.cssText = 'display: block';
      a.style.cssText = 'display: none';
      f.style.cssText = 'display: none';
      }
      else {
        alert('Please verify your email first');
      }
    }
    else {
      alert('you need to login first');
      var d = document.getElementById('questions');
      var a = document.getElementById('authseen');
      var f = document.getElementById('first');
      d.style.cssText = 'display: none';
      a.style.cssText = 'display: block';
      f.style.cssText = 'display: none';
    }
  })
});


var login = document.getElementById('login');
var signup = document.getElementById('signup');
login.addEventListener('click', function(){
    var email = document.getElementById('mail').value.trim();
    var pass = document.getElementById('password').value.trim();
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email, pass)
  .then((user) => {                           
    //console.log(user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
})
signup.addEventListener('click', function(){
    var email = document.getElementById('mail').value.trim();
    var pass = document.getElementById('password').value.trim();
    firebase.auth().createUserWithEmailAndPassword(email, pass)
  .then((userCredential) => {
    // Signed in 
user.sendEmailVerification().then(function() {
  // Email sent.
  alert('Verification link sent to your email address.')
}).catch(function(error) {
  // An error happened.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
});
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
    
})