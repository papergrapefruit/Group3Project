var db = require("../models");

module.exports = function(app){
  app.get("api/scores/:userId", function(req, res){
    var user = req.params.userId;
    console.log(user);
  });

  app.post("/api/save/random", function(req, res){
    db.Score.create({
      title: req.body.title,
      music: req.body.music,
      random: req.body.random,
      user: req.body.user
    }).then(function(dbPost){
      res.redirect("/random/" + req.body.user);
    });
  });

  app.post("/api/save/creation", function(req, res){
    db.Score.create({
      title: req.body.title,
      music: req.body.music,
      random: req.body.random
    }).then(function(dbPost){
      res.json(dbPost);
    });
  });
}