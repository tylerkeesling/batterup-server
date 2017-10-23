const queries = require('../db/queries')
const express = require('express')
const router = express.Router()

router.get('/:teamid', (req, res) => {
  queries.getRoster(req.params.teamid).then(roster => {
    res.json(roster)
  })
})

router.get('/:teamid/:playerid', (req, res) => {
  queries.getPlayer(req.params.teamid, req.params.playerid).then(player => {
    res.json(player)
  })
})


module.exports = router
