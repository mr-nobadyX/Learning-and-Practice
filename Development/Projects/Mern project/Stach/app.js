const express = require("express"); // Web framework Technology 
const app = express();
const port = 3000;

const cookieParser = require("cookie-parser"); // Cookie parsing for parshing the Cookies
const path = require("path"); // Path utilities

const db = require("./config/mongoose-connection"); // DB connection

const ownersRouter = require("./routes/ownersRouter"); // Owner routes
const usersRouter = require("./routes/usersRouter"); // User routes
const productsRouter = require("./routes/productsRouter"); // Product routes

app.use(express.json()); // JSON parsing
app.use(express.urlencoded({ extended: true })); // URL-encoded parsing
app.use(cookieParser()); // Cookie middleware
app.use(express.static(path.join(__dirname, "public"))); // Static files
app.set("view engine", "ejs"); // Template engine

app.use("/owners", ownersRouter); // Mount owner routes
app.use("/users", usersRouter); // Mount user routes
app.use("/products", productsRouter); // Mount product routes

app.get("/", (req, res) => {
    res.send("Hey, working fine"); // Basic route
});

app.listen(port, () => {
    console.log("Server running on port " + port);
    console.log(db); // Log DB connection
});