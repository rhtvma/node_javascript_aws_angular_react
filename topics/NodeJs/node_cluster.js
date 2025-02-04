const cluster = require("cluster")
const express = require("express")
const os = require("os")
const process = require("process")

const noCPUs = os.availableParallelism()
// console.log(`YOUR SYSTEM HAS ${noCPUs} CPU cores`);

if (cluster.isPrimary) {
    // Keep track of http requests
    let numReqs = 0;

    console.log(`Primary ${process.pid} is running`);
    setInterval(() => {
        console.log(`numReqs = ${numReqs}`);
    }, 3000);

    // Count requests
    function messageHandler(msg) {
        if (msg.cmd && msg.cmd === 'notifyRequest') {
            numReqs += 1;
        }
    }

    //Fork Workers
    for (let i = 0; i < noCPUs; i++) {
        cluster.fork()
    }

    for (const id in cluster.workers) {

        console.log(id)
        cluster.workers[id].on('message', messageHandler);
    }

    cluster.on('exit', (worker, code, signal) => {
        if (signal) {
            console.log(`worker was killed by signal: ${signal}`);
        } else if (code !== 0) {
            console.log(`worker exited with error code: ${code}`);
        } else {
            console.log('worker success!');
        }
    });
} else {
    const app = express()
    const PORT = 3000
    app.get("/", (req, res) => {
        res.send({ "message": `Message from express server ${process.pid}` })
        // Notify primary about the request
        process.send({ cmd: 'notifyRequest' });
    })

    app.listen(PORT, () => {
        console.log(`Server is running @ ${PORT}`)
    })
}


// [nodemon] starting `node server.js`
// Primary 28648 is running
// Server is running @ 3000
// Server is running @ 3000
// Server is running @ 3000
// Server is running @ 3000
// Server is running @ 3000
// Server is running @ 3000
// Server is running @ 3000
// Server is running @ 3000
// numReqs = 2