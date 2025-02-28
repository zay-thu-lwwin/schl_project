const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "olearn",
    port: 3306
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed: " + err.message);
    } else {
        console.log("Connected to MySQL database.");
    }
});

// **Signup Route**
app.post("/signup", (req, res) => {
    const { username, email, password } = req.body;
    const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(sql, [username, email, password], (err, result) => {
        if (err) return res.status(500).json({ message: "Error signing up" });
        res.json({ message: "User registered successfully" });
    });
});

// **Login Route**
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err, results) => {
        if (err) return res.status(500).json({ message: "Login error" });
        if (results.length > 0) {
            res.json({ message: "Login successful", user: results[0] });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    });
});

// **Logout Route (Frontend will handle session clearing)**
app.get("/logout", (req, res) => {
    res.json({ message: "Logged out" });
});

// Start Server
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
