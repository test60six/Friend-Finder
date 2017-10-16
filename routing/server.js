var path = require("path");
var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



require("./apiRoutes")(app);
require("./htmlRoutes")(app);
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});