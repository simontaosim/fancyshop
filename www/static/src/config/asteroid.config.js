import DDP from "ddp.js";
const options = {
    endpoint: "ws://139.198.3.158:8085/websocket",
    SocketConstructor: WebSocket
};

export const MClient = new DDP(options);
