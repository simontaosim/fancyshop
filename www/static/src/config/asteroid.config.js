import DDP from "ddp.js";
const options = {
    endpoint: "ws://localhost:6001/websocket",
    SocketConstructor: WebSocket
};

export const MClient = new DDP(options);
