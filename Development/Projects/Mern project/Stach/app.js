const express = require("express"); // Import the Express.js framework for creating web applications.
const app = express(); // Create an Express application instance.
const port = 3000; // Define the port number the server will listen on.

const cookieParser = require("cookie-parser"); // Import middleware for parsing cookies from request headers.
const path = require("path"); // Import the 'path' module for working with file and directory paths.

const db = require("./config/mongoose-connection"); // Import the database connection setup from a separate file. This establishes a connection to MongoDB using Mongoose.

const ownersRouter = require("./routes/ownersRouter"); // Import the router for handling owner-related routes.
const usersRouter = require("./routes/usersRouter"); // Import the router for handling user-related routes.
const productsRouter = require("./routes/productsRouter"); // Import the router for handling product-related routes.

app.use(express.json()); // Middleware to parse incoming JSON payloads. This allows the server to handle JSON data in requests.
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies. 'extended: true' allows parsing of complex objects.
app.use(cookieParser()); // Middleware to parse cookies attached to the client request object.
app.use(express.static(path.join(__dirname, "public"))); // Middleware to serve static files (HTML, CSS, JavaScript, images) from the 'public' directory.
app.set("view engine", "ejs"); // Set the view engine to EJS (Embedded JavaScript) for rendering dynamic HTML templates.

app.use("/owners", ownersRouter); // Mount the 'ownersRouter' at the '/owners' path. All requests to '/owners' will be handled by this router.
app.use("/users", usersRouter); // Mount the 'usersRouter' at the '/users' path. All requests to '/users' will be handled by this router.
app.use("/products", productsRouter); // Mount the 'productsRouter' at the '/products' path. All requests to '/products' will be handled by this router.

app.get("/", (req, res) => {
    // Define a route handler for the root URL ('/').
    res.send("Hey, working fine"); // Send a simple text response to indicate the server is running.
});

app.listen(port, () => {
    // Start the server and listen on the specified port.
    console.log("Server running on port " + port); // Log a message to the console indicating the server is running.
    console.log(db); // Log the database connection object. This can be useful for debugging and verifying the connection.
});