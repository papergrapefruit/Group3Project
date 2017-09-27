var db = require("../models");

module.exports = function(app){
  app.put("/api/update/creation", function(req, res){
    db.Score.update({
      title: req.body.title,
      music: req.body.music, 
    }, {where: 
      {id: req.body.id}
    }).then(function(dbPut){
      res.sendStatus(200);
    })
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
      random: req.body.random,
      user: req.body.user
    }).then(function(dbPost){
      res.json(dbPost);
    });
  });

  app.delete("/api/delete/score", function(req, res){
    db.Score.destroy({
      where: {
        id: req.body.id
      }
    }).then(function(){
      res.sendStatus(200);
    })
  })
}