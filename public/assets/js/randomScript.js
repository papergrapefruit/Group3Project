
function generateRandomScore(){
  ABCJS.plugin.hide_abc = true;
  music = new Sheet("treble", "4/4", "C", "1/4").random();
  $("#canvas").html(music);
  ABCJS.plugin.start(jQuery);
}
var user;
var music;
$(document).ready(function(){
  $("#signOut").empty().html("<a href='/'>Home</a>");
  try{
    user = JSON.parse(sessionStorage.getItem("user")).id;
  }catch(err){
    console.log("No user logged.  Saving disabled");
    $("#title-row").remove();
    $("#body-row").remove();
    $("#saveRandom").remove();
  }
  generateRandomScore();


  $("#saveRandom").on("click", function(){
    console.log(user);
    if (user === undefined)
      return;
    var title = music.split("\n")[1].split(":")[1].trim();
    console.log(title);
    $.post("/api/save/random", {
      title: title, 
      music: music, 
      random: true,
      user: user }, 
      function(result){
        modalAlert("Success!");
      });
    });

  $("#newRandom").on("click", function(){
    generateRandomScore();
  })

  $(".score-item").on("click", function(){
    music = $(this).attr("music");
    $("#canvas").html(music);
    ABCJS.plugin.start(jQuery);
  });

  $(".delete").on("click", function(){
    var package = {
      id: $(this).attr("score-id")
    }   
    $.ajax({
      url: "/api/delete/score",
      method: "DELETE",
      data: package,
      success: function(){
        $("#score" + package.id).remove();
      }
    });
  });
});
