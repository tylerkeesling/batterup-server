const queries = require('../db/queries')
const helpers = require('./helpers')
const express = require('express')
const knex = require('../db/knex')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = express.Router()
require('dotenv').config()

router.post('/login', function(req, res) {
	let email = req.body.email
	let password = req.body.password

	knex('player')
    .where('email', email)
    .then(player => {
		if (player.length === 0) {
			res.json({error: 'Email and/or user does not exist.'})
		} else {
			let hashedPassword = player[0].password
			let match = bcrypt.compareSync(password, hashedPassword)

			if (match) {
				let payload = player[0]
				delete payload.password
				let token = jwt.sign(new Object({}, payload), process.env.SECRET_TOKEN)
				res.json({token})
			} else {
				res.json({error: 'Email and/or password do no match.'})
			}
		}
	})
})

module.exports = router
