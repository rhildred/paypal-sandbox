const express = require('express');
const bodyParser  = require("body-parser");

// Create a new express application instance
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("www"));

app.get("/users/:uname", (req, res) => {
    res.end("Hello " + req.params.uname);
});

app.get("/cancelled", (req, res) =>{
    console.log(req.params);
    console.log(req.query);
    res.end("cancelled");
});

app.get("/finished", (req, res) =>{
    console.log(req.params);
    console.log(req.query);
    res.end("finished");
});

var port = process.env.PORT || parseInt(process.argv.pop()) || 3000;

app.listen(port, () => console.log('Example app listening on port ' + port + '!'));