var express = require("express");
var path = require("path");
var app = express();
var rootPath = path.normalize(__dirname + "/../");

app.use(express.static(rootPath + "/app"));
var port = Number(process.env.PORT || 8000);

app.listen(port);
console.log("listening on port" + port );





