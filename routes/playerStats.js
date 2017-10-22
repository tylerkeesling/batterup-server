const queries = require('../db/queries')
const helpers = require('./helpers')
const express = require('express')
const router = express.Router()

router.get('/team/:id', (req, res) => {
  queries.getAllStatsByTeamId(req.params.id)
    .then(allStats => {
      let reformatStats = helpers.formatTeamStats(allStats)
      res.json(reformatStats)
    })
})

router.get('/player/:id', (req, res) => {
  queries.getStatsByPlayerId(req.params.id)
    .then(statsByPlayer => {
      let reformattedObject = helpers.formatPlayerStats(statsByPlayer)
      res.json(reformattedObject)
    })
    .catch(err => {
      console.log(err)
      res.json({"error": 'That player does not exist.'})
    })
})

module.exports = router
