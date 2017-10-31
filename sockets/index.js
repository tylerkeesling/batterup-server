module.exports = function(io) {
  io.on('connection',function(socket) {
    socket.on('submitPlayerData',function(data) {
      console.log('socket received');
      io.sockets.emit('submitPlayerData',data)
    })
  })
}
