function initEditor() {
  new ABCJS.Editor("abc", { 
    paper_id: "canvas",
    generate_midi: false,
    generate_warnings: true,
    warnings_id:"warnings"
  });
}

window.addEventListener("load", initEditor, false);
function makeMidi(){
    abc_editor = new ABCJS.Editor(
      "abc", {
        generate_midi: true,
        paper_id: "canvas",
        midi_id: "midi",
        midi_download_id: "midi-download", 
        generate_warnings: false,
        midi_options: {
          generateDownload: true
        }
      });
    abc_editor = null; //after it makes the midi, nullify the editor
                       //or user will get an error the first change they make
    
  }
$(document).ready(function () {
  $("#signOut").empty().html("<a href='/'>Home</a>");
  $("#saveCreation").on("click",
    function () {
      if ($("#warnings").is(":empty") 
      && $("#abc").val().trim() !== "") { //only allow user to save if score is error free, and not blank
        $.post(
          "/api/save/creation", {
            title: "test",
            music: $("#abc").val().trim(),
            random: false,
            user: sessionStorage.getItem("user").id
          },
          function (result) {
            console.log(
              result);
          });
      } else {
        alert(
          "Please resolve warnings before saving.  ABC cannot be blank"
        );
      }
    });

  $("#makeMidi").on("click", makeMidi);
});