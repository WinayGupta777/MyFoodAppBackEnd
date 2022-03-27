const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const routeSignUp = require("./routes/signup");
const routeSignIn = require("./routes/signin");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use("/",routeSignUp);
app.use("/",routeSignIn);

app.listen(8080, console.log("Server Started"));