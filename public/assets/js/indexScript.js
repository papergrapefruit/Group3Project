function onSuccess(googleUser) {
  console.log('Logged in as: ' +
    googleUser.getBasicProfile().getName()
  );
  console.log(googleUser.getBasicProfile().getId());
  var user = {id: parseInt(googleUser.getBasicProfile().getId())}
  sessionStorage.setItem("user", JSON.stringify(user));
}

function onFailure(error) {
  console.log(error);
}

function renderButton() {
  gapi.signin2.render('my-signin2', {
    'scope': 'profile email',
    'width': 240,
    'height': 50,
    'longtitle': true,
    'theme': 'dark',
    'onsuccess': onSuccess,
    'onfailure': onFailure
  });
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log(
      'User signed out.');
      sessionStorage.clear();
  });
  
}
function getRandomPage(){
  $.get("/random", {id: JSON.parse(sessionStorage.getItem("user")).id}, function(data){
    console.log(data);
  })
}
$(document).ready(function(){
  $("#random").on("click", getRandomPage);
})

