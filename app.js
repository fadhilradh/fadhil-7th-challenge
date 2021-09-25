const bodyParser = require("body-parser");
const connectDB = require("./server/database/connection");
const dotenv = require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const path = require("path");
const routes = require("./server/routes/router");
// const socketio = require("socket.io");
// const {userConnected, connectedUsers, makeMove, initializeChoices, moves, choices} = require("./socket/users")
// const {rooms, createRoom, joinRoom, exitRoom} = require("./socket/rooms")

const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(morgan("tiny"));
app.use(routes);

app.set("view engine", "ejs");

// const server = http.createServer(app)

// const io = socketio(server)

// io.on("connection", socket => {
//   socket.on("create-room", (roomId) =>{
//     if(rooms[roomId]) {
//       const error = "This room already exists"
//       socket.emit("display-error", error)
//       return
//     }
//       userConnected(socket.client.id)
//       createRoom(roomId, socket.client.id)
//       socket.emit("room-created", roomId)
//       socket.emit("player-1-connected");
//       socket.join(roomId)
//   })

//   socket.on("join-room", roomId => {
//     if(!rooms[roomId]) {
//       const error = "This room does not exists"
//       socket.emit("display-error", error)
//       return
//     }
//       userConnected(socket.client.id)
//       joinRoom(roomId, socket.client.id)
//       socket.emit("room-joined", roomId)
//       socket.emit("player-2-connected");
//       socket.join(roomId)
//   })

//   socket.on("join-random", () => {
//     let roomId = ""

//     for (let id in rooms) {
//       if(rooms[id][1] === "" ) {
//         roomId = id
//         break
//       }
//     }

//     if(roomId === "") {
//       const error = "All rooms are full or non existed"
//       socket.emit("display-error", error)
//     }
//   })
// })

connectDB();

module.exports = app;
