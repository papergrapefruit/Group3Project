var db = require("../models");

module.exports = function(app){
  app.get("api/scores/:userId", function(req, res){
    var user = req.params.userId;
    console.log(user);
  });

  app.post("/api/save/random", function(req, res){
    db.Score.create({
      title: req.body.title,
      music: req.body.music
    }).then(function(dbPost){
      res.json(dbPost);
    });
  });

  app.post("/api/save/creation", function(req, res){
    db.Score.create({
      title: req.body.title,
      music: req.body.music
    }).then(function(dbPost){
      res.json(dbPost);
    });
  });
}