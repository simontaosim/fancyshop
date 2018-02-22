import DDP from "ddp.js";
const options = {
    endpoint: "ws://139.198.3.158/websocket",
    SocketConstructor: WebSocket
};
const ddp = new DDP(options);
ddp.on("connected", () => {
    console.log("ddp的链接","Connected");
});

export const MClient = new DDP(options);
