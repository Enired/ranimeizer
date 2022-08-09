const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here 
  router.get('/random', (req, res) => {
    db.query(
      'select * from my_animes order by random() limit 1;'
    ).then(data=>{
      res.json(data.rows[0]);
    })
  });

  return router;
}