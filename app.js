const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const sockets = require('./sockets')
const http = require('http')
const server = http.createServer(app)
const io = require('socket.io')(server)
sockets(io)

const auth = require('./routes/auth')
const players = require('./routes/players')
const playerStats = require('./routes/playerStats')
const createGame = require('./routes/createGame')
const image = require('./routes/image')


// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/v1/auth', auth)
app.use('/api/v1/players', players)
app.use('/api/v1/game', createGame)
app.use('/api/v1/playerstats', playerStats)
app.use('/api/v1/image', image)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
});

module.exports = { app, server }
