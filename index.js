const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 5000 || process.env.PORT;

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.get("/", (req, res) => {
  res.send("Hello World from expense-tracker server root bro");
});

//listen ing port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
