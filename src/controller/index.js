const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {

    const DDPClient = require("ddp");
    const ddpclient = new DDPClient({
      // All properties optional, defaults shown
      host : "127.0.0.1",
      port : 4000,
      ssl  : false,
      autoReconnect : true,
      autoReconnectTimer : 500,
      maintainCollections : true,
      ddpVersion : '1',  // ['1', 'pre2', 'pre1'] available
      // uses the SockJs protocol to create the connection
      // this still uses websockets, but allows to get the benefits
      // from projects like meteorhacks:cluster
      // (for load balancing and service discovery)
      // do not use `path` option when you are using useSockJs
      useSockJs: true,
      // Use a full url instead of a set of `host`, `port` and `ssl`
      // do not set `useSockJs` option if `url` is used
    });
    ddpclient.connect(function(error, wasReconnect) {
  // If autoReconnect is true, this callback will be invoked each time
  // a server connection is re-established
  if (error) {
    console.log('DDP connection error!');
    return;
  }


  if (wasReconnect) {
    console.log('Reestablishment of a connection.');
  }

  console.log('connected!');
})

    return this.display();
  }
};
