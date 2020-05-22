const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

// const homeRouter = require("./routes/home.route");
const accountRouter = require("./routes/account.route");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

// app.use("/api", homeRouter);
app.use("/api/accounts", accountRouter);
app.use(function (err, req, res, next) {
  res.json(err);
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
