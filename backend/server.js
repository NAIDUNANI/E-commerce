const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Naidu",
    database: "new_users",
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to database");
    }
});


app.listen(5000, () => {
    console.log("Server running on port 5000");
});

// Registration Route
app.post("/register", (req, res) => {
    const { username, useremail, usernumber, pass } = req.body;

    if (!username || !useremail || !usernumber || !pass) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const sql = "INSERT INTO users (username, useremail, usernumber, password) VALUES (?, ?, ?, ?)";
    db.query(sql, [username, useremail, usernumber, pass], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to register user" });
        }
        res.status(200).json({ message: "User registered successfully" });
    });
});

// Login Route
app.post("/login", (req, res) => {
    const { useremail, pass } = req.body;

    if (!useremail || !pass) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const sql = "SELECT * FROM users WHERE useremail = ? AND password = ?";
    db.query(sql, [useremail, pass], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Login failed" });
        }

        if (result.length > 0) {
            res.status(200).json({ message: "Login successful", user: result[0] });
        } else {
            res.status(401).json({ error: "Invalid credentials" });
        }
    });
});

