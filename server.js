// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// table data
// =============================================================
var tables = [
  {
    name: "",
    phone: "",
    email: "",
    id: "", 
  },
];

var waitlist = [
  {
    name: "",
    phone: "",
    email: "",
    id: "", 
  },
]

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "XXX.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/create", function(req, res) {
  res.sendFile(path.join(__dirname, "create.html"));
});

// Get all characters
app.get("/tables", function(req, res) {
  res.json(tables);
});

// // Search for Specific Character (or all characters) - provides JSON
// app.get("/api/:characters?", function(req, res) {
//   var chosen = req.params.characters;

//   if (chosen) {
//     console.log(chosen);

//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         return res.json(characters[i]);
//       }
//     }
//     return res.json(false);
//   }
//   return res.json(characters);
// });

// // Create New Characters - takes in JSON input
// app.post("/api/new", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body-parser middleware
//   var newcharacter = req.body;
//   newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newcharacter);

//   characters.push(newcharacter);

//   res.json(newcharacter);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
