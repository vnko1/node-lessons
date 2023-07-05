// const ws = require("ws");

// const wsServer = new ws.Server({ port: 3001 });

// const socketList = [];
// wsServer.on("connection", (socket) => {
//   console.log("new connection");
//   socketList.push(socket);
//   setTimeout(() => {
//     socket.send("Hello! This is web-socket server.");
//   }, 3000);

//   socketList.forEach((item) => {
//     if (item !== socket) item.send("new member connected");
//   });
// });

// module.exports = app;

const { Server } = require("socket.io");
const { createServer } = require("http");

const httpServer = createServer();

const io = new Server(httpServer, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("New frontend connection");
  socket.on("chat-message", (message) => {
    socket.broadcast.emit("chat-message", message);
  });
});

httpServer.listen(3001);
