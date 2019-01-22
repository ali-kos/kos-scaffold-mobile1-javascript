const exec = require('child_process').exec;

let ip = null;
const net = require('net');
const readline = require('readline');

const clients = [];
let server = null;

function NativeDebugPlugin(options) {
  // Setup the plugin instance with options...
}

function getIPAdress() {
  const interfaces = require('os').networkInterfaces();
  for (const devName in interfaces) {
    const iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
}

function connectNative() {
  exec('adb shell ifconfig wlan0', (err, stdout, stderr) => {
    if (err) {
      console.log(err);
    } else {
      // 1. 获取android设备ip
      const p1 = /inet\s+addr:.*?\s+/;
      const p2 = /\d+.\d+.\d+.\d+/;
      ip = stdout.match(p1)[0].match(p2)[0];

      // 2. 连接android
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      socketClient = new net.Socket();
      if (socketClient) {
        socketClient.connect(
          3520,
          ip
        );
        socketClient.setEncoding('utf8');
        socketClient.on('data', chunk => {});
        socketClient.on('error', e => {
          console.log(e.message);
        });

        const localIP = getIPAdress();
        console.log(`+++++++${localIP}`);
        socketClient && socketClient.write(localIP);
      }
    }
  });
}

function startServer() {
  server = net
    .createServer(socket => {
      console.log('=================new client connected');
      socket.setEncoding('utf-8');
      clients.push(socket);
      // socket.on('data',function(data){
      //     console.log('client send:' + data);
      // });
      // socket.write('Hello client!\r\n');
    })
    .listen(3520);

  if (server) {
    server.on('listening', () => {
      console.log(`server listening:${server.address().port}`);
    });
    // 服务器错误事件
    server.on('error', exception => {
      console.log(`server error:${exception}`);
    });
  }
}

NativeDebugPlugin.prototype.apply = function(compiler) {
  compiler.plugin('afterPlugins', () => {
    startServer();
  });
  compiler.plugin('done', () => {
    console.log('========done');
    // socketClient && socketClient.write("r");
    if (clients != null) {
      let i = clients.length;
      while (i--) {
        try {
          clients[i] &&
            clients[i].write('r', 'utf-8', () => {
              console.log('\n+++send success\n');
            });
        } catch (error) {
          clients.splice(i, 1);
        }
      }
    }
  });
  compiler.plugin('failed', () => {
    console.log('========failed');
  });
  compiler.plugin('invalid', () => {
    console.log('========invalid');
  });
};

module.exports = NativeDebugPlugin;
