const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);


require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const Student = require("./Student");


const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed:", error.message);
  });

app.post("/students", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});

app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

app.get("/students/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.json(student);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});

app.get("/", (req, res) => {
  res.send("Student API is running");
});

const PORT = process.env.PORT || 5000;



  
