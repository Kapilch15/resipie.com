const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();
const connectDb = require("./config/db");
const menuRoute = require("./routes/menuRoute");
//PORT
const port = process.env.PORT || 4000;
connectDb();

app.use(express.json());
app.use('/uploads', express.static('uploads'));   
app.use(cors());
app.use("/api/v1", menuRoute);

app.listen(port, () => console.log(`Express Server is running at ${port}`));
app.get("/", (req, res) => {
  res.send({
    message: "Server is started!!",
  });
});


  