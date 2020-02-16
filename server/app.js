const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const cors = require('cors');

let app = express();

app.use(cors());

const languagesApi = require('./routes/codingLanguages-api');
const projectsApi = require('./routes/projects-api');
const messageApi = require('./routes/contact-api');
const loginApi = require('./routes/login-api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use(express.static(path.join(__dirname, "../dist/portfolio")));
app.use("/", express.static(path.join(__dirname, "../dist/portfolio")));

app.use('/api', languagesApi);
app.use('/api/p', projectsApi);
app.use('/api/m', messageApi);
app.use('/api/login', loginApi);


// Global variables
const serverPort = process.env.PORT || 3000;

// Connection String

const connString =
  "mongodb+srv://admin:Kellogs123@cluster0-rfwnt.mongodb.net/portfolio?retryWrites=true&w=majority";

/************************* Mongoose connection strings go below this line  ***************/

mongoose.connect(connString).then(() => {
  console.log('successfully connected to MongoDB')
}).catch(() => {
  console.log('connection failed.');
})


/**
 * Creates an express server and listens on port 3000
 */
http.createServer(app).listen(serverPort, function() {
  console.log(`Application started and listing on port: ${serverPort}`);
});
