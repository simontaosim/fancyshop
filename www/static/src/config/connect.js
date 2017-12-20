// var DDPClient = require("ddp-client");
import DDPClient from 'ddp-client';
 
export const ddpclient = new DDPClient({
  // All properties optional, defaults shown 
  host : "localhost",
  port : 4000,
  ssl  : false,
  autoReconnect : true,
  autoReconnectTimer : 500,
  maintainCollections : true,
  ddpVersion : '1',  // ['1', 'pre2', 'pre1'] available 
  // Use a full url instead of a set of `host`, `port` and `ssl` 
  // url: 'wss://example.com/websocket'
  socketConstructor: WebSocket // Another constructor to create new WebSockets 
});