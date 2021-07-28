const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',// IP address here,
    port: 50542// PORT number here,
  }, 
  // () => {
  //   console.log("Successfully connected to game server")
  // }
  );

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', function(data) {
    console.log(data);
    
  })
  
  conn.on('connect',()=>{
    console.log("Successfully connected to game server");
    conn.write('Name: AKI');
  })
  
  return conn;
};

console.log("Connecting ...");
connect();


module.exports = { connect };