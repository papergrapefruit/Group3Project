var db = require("../models");

module.exports = function(app){
  app.get("api/scores/:userId", function(req, res){
    var user = req.params.userId;
    console.log(user);
  })
}