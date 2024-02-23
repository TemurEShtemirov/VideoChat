import express from "express";
import http from "http";
import { Server } from "socket.io";



const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:9000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  socket.on("disconnect", () => {
    socket.broadcast.emit("callEnded");
  });

  socket.on("callUser", (data) => {
    io.to(data.userToCall).emit("callUser", {
      signal: data.signalData,
      from: data.from,
      name: data.name,
    });

    socket.on(
      "answerCall",
      (data) => io.to(data.to).emit("callAccepted"),
      data.signal
    );
  });
});

server.listen(4863, () => console.log("SERVER IS RUUNNIG IN PORT : 4863"));
