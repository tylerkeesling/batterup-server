const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

router.get('/', (req, res) => {
  queries.getAllPlayers().then(players => {
    res.json(players)
  })
});

router.get('/:id', (req, res) => {
  queries.getRoster(req.params.id).then(roster => {
    res.json(roster)
  })
})

module.exports = router;
