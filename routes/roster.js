const queries = require('../db/queries')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  queries.getAllPlayers().then(players => {
    res.json(players)
  })
})

router.get('/:id', (req, res) => {
  queries.getRoster(req.params.id).then(roster => {
    res.json(roster)
  })
})

router.post('/:teamId', (req, res) => {
  console.log(req.body);
  res.json({message: 'success!'})
})

module.exports = router
