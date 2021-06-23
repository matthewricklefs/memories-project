import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// import routes
import postRoutes from "./routes/posts.js";

// initialize express application
const app = express();

// configuring the ability to read local environment variables
dotenv.config();

// body-parser set up
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// initiliaze CORS before using the routes
app.use(cors());

// express middleware to connect postRoutes to application
app.use("/posts", postRoutes);

// connect server with Mongo Database
const PORT = process.env.PORT;

// connect mongoose to mongo and server
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
mongoose.set("useFindAndModify", false);
