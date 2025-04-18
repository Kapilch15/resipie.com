const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  const mongoUrl =
    process.env.MONGO_URI || "mongodb://localhost:27017/RestaurantAPI";
  try {
    let conn = await mongoose.connect(mongoUrl);
    console.log(`Mongodb is connect at : ${conn.connection.host}`);
  } catch (error) {
    console.error(error.name);
    process.exit(1);
  }
};
 
module.exports = connectDb;
