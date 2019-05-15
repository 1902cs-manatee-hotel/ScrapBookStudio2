module.exports = io => {
  io.on('connection', socket => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)

    socket.on('mediaUpdate', newProps => {
      socket.broadcast.emit('mediaUpdate', newProps)
    })

    socket.on('textUpdate', newProps => {
      socket.broadcast.emit('textUpdate', newProps)
    })

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })
  })
}
