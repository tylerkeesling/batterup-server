const queries = require('../db/queries')
const helpers = require('./helpers')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  queries.getGames()
    .then(allGames => {
      res.json(allGames)
    })
})

router.post('/', (req, res) => {
  queries.createGame()
    .then(gameId => {
      queries.createPlayerGame(gameId[0], req.body.players)
      res.json({message: 'success!'})
    })
})

router.get('/pg', (req, res) => {
  queries.seePlayerGame()
    .then(response => {
      res.json(response)
    })
})

router.post('/test', (req, res) => {
  queries.createPlayerGame(3, [1,2,3,4])
    .then(id => {
      res.json(id)
    })
})

module.exports = router
