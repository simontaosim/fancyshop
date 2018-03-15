const Application = require('thinkjs');
const babel = require('think-babel');
const watcher = require('think-watcher');
const notifier = require('node-notifier');

const instance = new Application({
  ROOT_PATH: __dirname,
  watcher: watcher,
  transpiler: [babel, {
    presets: ['think-node']
  }],
  notifier: notifier.notify.bind(notifier),
  env: 'development'
});

instance.run();
//启动ipfs节点
const IPFSFactory = require('ipfsd-ctl')
const f = IPFSFactory.create({type: 'js'})
const HOST_IP ="139.198.12.188";

f.spawn(
      {
        repoPath:  __dirname+'/www/ipfs/db',
        disposable: false,
        init: true,
        start: false,
        config: {
          "API": {
            "HTTPHeaders": {
              "Access-Control-Allow-Origin": [
                "*"
              ],
              "Access-Control-Allow-Methods": [
                "PUT",
                "POST",
                "GET"
              ]
            }
          },
          "Addresses": {
            "Swarm": [
              "/ip4/"+HOST_IP+"/tcp/4403"
            ],
            "API": "/ip4/"+HOST_IP+"/tcp/5002",
            "Gateway": "/ip4/"+HOST_IP+"/tcp/8787"
          },
          "Discovery": {
            "MDNS": {
              "Enabled": true,
              "Interval": 10
            },
            "webRTCStar": {
              "Enabled": true
            }
          }
        }
        
      }, function (err, ipfsd) {
        if (err) { throw err };
        series([
           
            (cb) => ipfsd.cleanup((err)=>{
              console.log("清除数据库",err);
              console.log('清除',ipfsd.repoPath);
              
              cb();
            }),
           
            (cb) => ipfsd.init( (err, db) => {
                console.log(err);
                console.log("初始化",ipfsd.repoPath);
                console.log("初始化的返回",db);
                cb();
              }),
            
          
            (cb) => ipfsd.getConfig('', (err, config) => {
              console.log(JSON.stringify(config));
              console.log(ipfsd.started)
              if(ipfsd.started === false){
                ipfsd.start(["ok"], (err, ipfsd) => {
                  console.log('config then start',ipfsd);
                  if(ipfsd === undefined){
                    return cb();
                  }
                  ipfsd.id((err, id)=>{
                    console.log(err);
                    console.log(id);
                    cb();
                  })
                 
                })
              }else{
                cb();
              }

             
            }),
           
            (cb) => console.log("the end config ipfsd")
            
            
            
            
        ])
})