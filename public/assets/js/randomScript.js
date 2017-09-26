
$(document).ready(function(){
  try{
    var user = JSON.parse(sessionStorage.getItem("user")).id;
  }catch(err){
    console.log("No user logged in.  Saving disabled");
    $("#saveRandom").remove();
  }

  ABCJS.plugin.hide_abc = true;
  var music = new Sheet("treble", "4/4", "C", "1/4").random();
  $("#canvas").html(music);
  ABCJS.plugin.start(jQuery);

  $("#saveRandom").on("click", function(){
    var title = music.split("\n")[1].split(":")[1].trim();
    console.log(title);
    $.post("/api/save/random", {
      title: title, 
      music: music, 
      random: true,
      user: user }, 
      function(result){
        window.location.href = "/random/" + user;
      });
    });

  $(".score-item").on("click", function(){
    var data = $(this).attr("value");
    music = data;
    $("#canvas").html(music);
    ABCJS.plugin.start(jQuery);
  });
});
