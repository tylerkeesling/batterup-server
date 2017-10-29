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
  console.log('req.body', req.body);
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

router.post('/test', (req, res) => {
  queries.createPlayerGame(3, [1,2,3,4])
    .then(() => {
      res.json({message: 'yay!'})
    })
})

module.exports = router
