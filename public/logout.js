
var logout = document.getElementById('logout');
logout.addEventListener('click', function(e){
  e.preventDefault();
    auth.signOut()
  .then((user) => {
    // Signed out
    // ...
    //console.log(user);
    alert('you are signed out');
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
})