const bodyParser = require("body-parser");
const connectDB = require("./server/database/connection");
const dotenv = require("dotenv");
const express = require("express");
const http = require("http");
const morgan = require("morgan");
const mysql = require("mysql");
const methodOverride = require("method-override");
const path = require("path");
const routes = require("./server/routes/router");
// const socketio = require("socket.io");
// const {userConnected, connectedUsers, makeMove, initializeChoices, moves, choices} = require("./socket/users")
// const {rooms, createRoom, joinRoom, exitRoom} = require("./socket/rooms")


const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config({ path: "config.env" });

app.use(methodOverride("_method"));
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(routes);



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

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});

connectDB();
