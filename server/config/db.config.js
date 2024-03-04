const mongoose = require("mongoose");

const connection = mongoose.connect(process.env.MONGODB_URL);

connection
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Database connection error", err);
  });
