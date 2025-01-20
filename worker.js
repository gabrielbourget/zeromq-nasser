const zmq = require("zeromq");

const socket = new zmq.Pull();

const run = async () => {
  await socket.connect("tcp://localhost:7000");
  console.log("Connected to server.");

  for await (const msg of socket) {
    console.log(`Worker received job ${msg.toString()}`);
  }
}

run();