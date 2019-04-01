var express = require('express');
var app = express();
const PORT = process.env.port || 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
	res.send('hello world');
});

app.listen(PORT, () => console.log(`Freedom Dive's Hello Food API is listening on port ${port}!`));
