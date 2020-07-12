var mysql = require('mysql');
var express = require('express'),
    app = module.exports.app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var server = http.createServer(app);
var fs = require('fs');
var io = require('socket.io').listen(server);
server.listen(3000);


var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'nodelogin'
});

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});

app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;

        //Validacion correcta, invoca Chat
				response.redirect('/chat');

			} else {
				//Vuelve a pedir login
        response.redirect('/');
			}
			response.end();
		});
	} else {
		response.send('Por favor ingresa tus datos!');
		response.end();
	}
});

app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Bienvenido de nuevo, ' + request.session.username + '!');

	} else {
		response.send('Por favor ingresa tus datos!');
	}
	response.end();
});


// CODIGO PARA EL CHAT

app.get('/chat', function(request, response) {
  var file = "";

  file = __dirname + '/chat.html';

  fs.readFile(file, function(err, data) {
      if (err) {
          response.writeHead(404);
          return response.end('Pagina o archivo no encontrado');
      }
  response.writeHead(200);
      response.end(data);
  });

  io.on("connection", function(socket) {
      socket.on("send message", function(sent_msg, callback) {
          sent_msg = "[ " + getCurrentDate() + " ]["+request.session.username+"]: " + sent_msg;
          io.sockets.emit("update messages", sent_msg);
          callback();
      });
  });
  function getCurrentDate() {
      var currentDate = new Date();
      var day = (currentDate.getDate() < 10 ? '0' : '') + currentDate.getDate();
      var month = ((currentDate.getMonth() + 1) < 10 ? '0' : '') + (currentDate.getMonth() + 1);
      var year = currentDate.getFullYear();
      var hour = (currentDate.getHours() < 10 ? '0' : '') + currentDate.getHours();
      var minute = (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes();
      var second = (currentDate.getSeconds() < 10 ? '0' : '') + currentDate.getSeconds();
      return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
  }
});
