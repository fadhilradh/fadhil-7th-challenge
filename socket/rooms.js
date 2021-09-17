const rooms = {}

const createRoom = (roomId, playerId) => {
  rooms[roomId] = [playerId, ""]
}

const joinRoom = (roomId, player2Id) => {
  rooms[roomId][1] = player2Id
}

const exitRoom = (roomId, player) => {
  if(player === 1) {
    delete rooms[roomId]
    return
  }
  rooms[roomId][1] = ""
}

module.exports = {rooms, createRoom, joinRoom, exitRoom}