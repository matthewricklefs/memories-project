import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
// import routes
import postRoutes from "./routes/posts.js";

// initialize express application
const app = express();

// body-parser set up
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// initiliaze CORS before using the routes
app.use(cors());

// express middleware to connect postRoutes to application
app.use("/posts", postRoutes);

// connect server with Mongo Database
const CONNECTION_URL =
  "mongodb+srv://mattyricks:mattyricks123@cluster0.o7fa8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

// connect mongoose to mongo and server
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
mongoose.set("useFindAndModify", false);
