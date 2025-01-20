const zmq = require("zeromq");

const PORT = 7000;

const socket = new zmq.Push();

const run = async () => {
  await socket.bind(`tcp://localhost:${PORT}`);
  console.log(`Server is listening on port ${PORT}`);
  console.log(`Press any key to start sending jobs`);
  process.stdin.once("data", send)
};

// sends jobs to workers
const send = async () => {
  console.log(`Sending jobs to workers`);

  for (let i = 0; i < 100; i++) {
    await socket.send(`sending job ${i + 1}`);
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
}

run();
