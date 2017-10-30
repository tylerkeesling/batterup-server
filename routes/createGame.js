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
  let player_ids = req.body.players
  queries.createGame()
    .then(game_id => {
      return Promise.all(player_ids.map(player_id => {
        return Promise.resolve(queries.createPlayerGame(game_id[0], player_id))
      }))
      .then((elem) => {
        let rosterObject = elem.map(playerArray => {
          return playerArray[0]
        })
        res.json(rosterObject)
      })
    })
    .catch(err => {
       res.json({msgErr: err})
    })
})

router.get('/pg', (req, res) => {
  queries.seePlayerGame()
    .then(response => {
      res.json(response)
    })
})

router.put('/:id', (req, res) => {
  queries.updatePlayerGame(req.params.id, req.body)
    .then(object => {
      res.json(object)
    })
    .catch(error => {
      res.json({"error": error})
    })
})

module.exports = router
