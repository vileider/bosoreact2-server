// import express from "express";

const express = require("express");
const mysql = require("mysql");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.use("/rpsplayer", require("./rpsPlayerRoutes.tsx"));
app.post("/", (req, res) => {
	console.log("cokolwiek2");
	res.json({ message: "Kurde juz" }).end();
});
// app.get("/", (req, res) => {
// 	console.log("cokolwiek2");
// 	res.json({ message: "Kurde juz" }).end();
// });

app.listen(port, () => {
	console.log("Server on!");
});
