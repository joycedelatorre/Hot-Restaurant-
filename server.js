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
    name: "Jeff",
    phone: "123",
    email: "applejeff@mac.com",
    id: "banana"
  },
    {
    name: "Jeff2",
    phone: "123",
    email: "applejeff@mac.com",
    id: "banana1"
  },
    {
    name: "Jeff3",
    phone: "123",
    email: "applejeff@mac.com",
    id: "banana2"
  },
    {
    name: "Jeff4",
    phone: "123",
    email: "applejeff@mac.com",
    id: "banana3"
  },
    {
    name: "Jeff5",
    phone: "123",
    email: "applejeff@mac.com",
    id: "banana4"
  }
];

var waitlist = [
  {
    name: "Scott",
    phone: "456",
    email: "scott@scott.com",
    id: "mango"
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});



// Get all tables
app.get("/api/tables", function(req, res) {
  res.json(tables);
});
//get all waitlist
app.get("/api/waitlist", function(req, res) {
  res.json(waitlist);
});


// // Create New Reservation - takes in JSON input
app.post("/api/reserve", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newReservation = req.body;
  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  if (tables.length < 5) {
    tables.push(newReservation);
    res.json(tables);
  }
  else {
    waitlist.push(newReservation);
    res.json(newReservation);
  }


});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
