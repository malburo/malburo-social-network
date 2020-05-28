require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const accountRouter = require("./routes/account.route");
const postRouter = require("./routes/post.route");
const commentRouter = require("./routes/comment.route");
const likeRouter = require("./routes/like.route");
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

app.use("/api/accounts", accountRouter);
app.use("/api/post", postRouter);
app.use("/api/comment", commentRouter);
app.use("/api/like", likeRouter);

app.use((err, req, res, next) => {
  res.status(400).json(err);
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
