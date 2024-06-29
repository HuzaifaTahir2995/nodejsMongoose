const express = require("express");
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");
const errorController = require("./controllers/error");

const User = require("./models/user");

// const mongoConnect = require("./util/database").mongoConnect;
const mongoose = require('mongoose')

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById("667f6f5c3a852d67d75cb2a5")
    .then((user) => {
      req.user = new User(user.name, user.email, user.cart, user._id);
      next();
    })
    .catch((err) => console.log(err));
  next()
});

app.use("/admin", adminRouter);
app.use(shopRoutes);

app.use(errorController.get404);

  // const user = new User("roger", "roger@test.com", { items: [] });
  // user.save();
  mongoose
  .connect('mongodb+srv://Huzaifa:60o2mtAT49P040io@cluster0.7ynpr2v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(result => {
    app.listen(3000);
  })