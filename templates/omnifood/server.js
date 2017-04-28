var express = require('express');
var app = express();
var port = process.env.PORT || 3001;
app.use(express.static(__dirname + '/public'));
app.listen(port, 'localhost',function() {
	console.log('Webserver has been started at the port: '+ port)
});