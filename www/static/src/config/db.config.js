import DDP from 'ddp.js';
const options = {
    endpoint: "ws://localhost:4000/websocket",
    SocketConstructor: WebSocket
};
export const ddp = new DDP(options);

// ddp.on("connected", () => {
//     console.log("Connected");
// });

// const subId = ddp.sub("mySubscription");
// ddp.on("ready", message => {
//     if (message.subs.includes(subId)) {
//         console.log("mySubscription ready");
//     }
// });
// ddp.on("added", message => {
//     console.log(message.collection);
// });

// const myLoginParams = {
//     user: {
//         email: "user@example.com"
//     },
//     password: "hunter2"
// };
// const methodId = ddp.method("login", [myLoginParams]);
// ddp.on("result", message => {
//     if (message.id === methodId && !message.error) {
//         console.log("Logged in!");
//     }
// });