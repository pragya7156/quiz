
var e = document.getElementById('st_btn');
e.addEventListener('click', ()=>{
  auth.onAuthStateChanged(user => {
    if(user) {
      //console.log(user);
      var d = document.getElementById('questions');
      var a = document.getElementById('authseen');
      var f = document.getElementById('first');
      var mail = document.getElementById('dismail');
      mail.innerHTML = `Logged in as: <b> ${user.email} </b>` ;
      d.style.cssText = 'display: block';
      a.style.cssText = 'display: none';
      f.style.cssText = 'display: none';
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
    // Signed in 
    // ...
    //console.log(user);
    alert('signed in');
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
})
signup.addEventListener('click', function(e){
  e.preventDefault();
    var email = document.getElementById('mail').value.trim();
    var pass = document.getElementById('password').value.trim();
    firebase.auth().createUserWithEmailAndPassword(email, pass)
  .then((user) => {
    // Signed in 
    // ...
    alert('new user created');
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
})