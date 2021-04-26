exports.auth = function(req, res){

}

exports.sendReg = function(req, res){

  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const admin = req.body.admin;
  const warning = req.body.warning;
  const blacklist = req.body.blacklist;
  const scoreGame1 = req.body.scoreGame1;
  const scoreGame2 = req.body.scoreGame2;
  const scoreGame3 = req.body.scoreGame3;
  const scoreGame4 = req.body.scoreGame4;


  res.json({ username, password, email, admin, warning, blacklist , scoreGame1, scoreGame2, scoreGame3, scoreGame4 });

}
