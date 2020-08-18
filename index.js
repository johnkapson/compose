const express = require("express");
const redis = require("redis");
const process = require("process");

const app = express();
const client = redis.createClient({
    // service name define in compose.yml
    host: 'redis-server',
    port: 6379
});

// initialize redis
client.set('visits', 0);

app.get("/", (req, res) => {
    // force error...
    process.exit(0);
    client.get('visits', (err, visits) => {
        res.send("Number of visits: " + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});


app.listen(8081, function() {
    console.log("Listening on port 8081");
});
