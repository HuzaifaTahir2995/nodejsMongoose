const mongoose = require("mongoose");

const mongoConnect = (callback) => {
  mongoose.connect(
    "mongodb+srv://rain77:pyTau8nOTHya4u2E@cluster0.km8ou3n.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB Atlas!");
    callback();
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
    throw err;
  });
};

const getDb = () => {
  return mongoose.connection; 
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
