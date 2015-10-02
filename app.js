var app = require("http").createServer();
var io = require("socket.io")(app);

var handleClient = function(socket) {
	socket.emit("hola", {
							user: "nodesource",
							text: "Bonjour"
						});
};

io.on("connection", handleClient);

app.listen(8080);