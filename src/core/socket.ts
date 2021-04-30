import {Server} from "socket.io";
import http from "http";

export default (http: http.Server) => {
  const io = new Server(http, {
    cors: {
      origin: "*"
    }
  });

  io.on("connection", (socket: any) => {
    console.log("CONNECTED");
    socket.emit("SERVER:NEW_MESSAGE", "QWEQWEQWE");
  });

  return io;
};
