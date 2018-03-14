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
const HOST_IP ="192.168.1.107";

f.spawn(
      {
        repoPath:  __dirname+'/db/taosim',
        disposable: false,
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
              "/ip4/192.168.1.107/tcp/0"
            ],
            "API": "/ip4/192.168.1.107/tcp/33167",
            "Gateway": "/ip4/192.168.1.107/tcp/9090"
          },
          "Discovery": {
            "MDNS": {
              "Enabled": true,
              "Interval": 10
            },
            "webRTCStar": {
              "Enabled": true
            }
          },
          "Identity": {
            "PeerID": "QmbM5mzwiHRe8i9YtEsKKRa6f5BgSaK8aYgrtRevNnwynC",
            "PrivKey": "CAASpwkwggSjAgEAAoIBAQCvdlAPt27ZFMhgGEK/dTHfCZW1T1gyCri8xK7vg9O0/CcAGa9VSImwR0dr9qP7HiSmGTzpfoE/Oufn0sse1ieYSCzmwVZyhwZqtf5k5SUtuwND2rKAux+yFBAsZzRA+fAV11okqxcnUMMu44jj7zeXnloGp/7R9YWsQd4tX4Fwc+PFMjPIIbcWushKpQA41tSCsV2vw34ZElFuFLkkhbRqZTVVB779e1P8749Ruu+xyyG4gTG9QXgPN2T2ubfBVVerz7ow/ZKfWiZXSfk3Fl/e8eOOdtAqlKhKk2mTaDvLczEYQkyE5eThPffklhpgDuCkKwyTkjSIlWHwRWVji8npAgMBAAECggEBAJtTgUxodhh17WwkDfKvLJblRUJcGxcxpph1BOfDK4bsMRpFopE8xabncrKAhGmpJYhkjyekdYYj/2eZk3aY3jRQsG8WeBCqt2N/+NQYhfEVvK40zBBploVufWLRedCLcZ3kJkiPrM+BD0hS5Lvi6LOv2sJJtaroTo1PQf+orE1+zyhFJ+minVCoKu6TbQDPg3BSweLzfPbsaLhqTb8nzxVEkODboi/ggh7HbJcgfdVw6JOckChbH7YPmjpT0aF+GTELu/DtrhwQyv5r1WD+ix9+EXArossT/vND516xM/25h2VEe/HwoXdWRZ3l5CAQaI/G8lMY8yajc7nFi6Z50AECgYEA83pXlE/N2OGkAnYbm6bQ6KPRmaa/vNFXKS0nvK9XCVI0sbBF0C9J6yWLGqLxPAAvf6MB/H1crdl4vR/aeQ1jGfMM4j9I9mOdL/D57xBK7z6z/udGfQXcWTh6adph9OAh9/hK4IqG7WIQeNe9nwl9ywABqXJZJCC0Q23OzRTFbnECgYEAuHx3tbb5m+X9zKYWnWK8Vg44XEv90yq+Q+hy9ceMpXWULRAEJLGogUXFRT7Bs7z69BpGbZFRVsWP/Kh+5GFqJToUrwKbewH9vkZw/mAI82NXzLofcCGDUE85yBPZt0AeypGU/5OpS3ohge0qXsn6zp2ZEa6ocfp9LDfwJXUEPvkCgYBxgR9C7NExwj8LRrQoI+RQD86uqqXICG9xqrNTqwoQNlqKW3qwSttS2/W1PTDon82E2yEZ6/dAtJks0aSvuiXw+vWOo6IH+vhUWSqq4BWO4tRWiMq7jffjQAkRP9VaqwIq7304oFu2Xnj/XNPxSCN0d1RPAhe8V+KxbIdz47MGgQKBgHZZEop12OaTwh7YpUVNo7go4ysCbNBcaTYzFhxpaOZz6RyHW8EWXxye35AuVCCzqOGTQX7kbCOYFWhlxxFHFMrQ2Zfzuj5M5rR7h90HSnaoUhi5hZVvSkfoqw6Y/V+7OIWGoujZlw8eSASLWlT4iXamTx2yx8hmgootUFcXHCQxAoGAHsqWMp1DJ8NFewT8pOBATkhzRex8GzWCBfJ7Ia40mai4ilyvgwcl1yxvav35ISiOeM0wxiyzuQ/Iqf7wOXmraqmqQv5OYMNcvOJwL5nMlQ0GuaeqPmWM5U71EUg3brJEaUdRfulRhyD/Oo7O5dvxhuAYvZXK4KI7LmTRiMbyqkg="
          },
          "Keychain": {
            "dek": {
              "keyLength": 64,
              "iterationCount": 10000,
              "salt": "4NzAM9p4xcus2dmLivY5x9B8",
              "hash": "sha2-512"
            }
          }
        }
        
      }, function (err, ipfsd) {
        if (err) { throw err };
        series([
            (cb) => ipfsd.cleanup((err)=>{
              console.log(err);
              cb();
            }),
           
            (cb) => ipfsd.init([], (err, ipfsd) => {
                console.log(err);
                
                cb();
              }),
            
           
            (cb) => ipfsd.getConfig('', (err, config) => {
              console.log(JSON.stringify(config));
              console.log(ipfsd)
              if(ipfsd.started === false){
                ipfsd.start(["ok"], (err, ipfsd) => {
                  console.log(err);
                  ipfsd.id((err, id)=>{
                    console.log(err);
                    console.log(id);
                    
                  })
                 cb();
              })
            }

             
            }),
           
            (cb) => console.log("the end config ipfsd")
            
            
            
            
        ])
       
        
        
        
        
     
  
})