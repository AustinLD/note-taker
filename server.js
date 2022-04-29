const path = require("path")
const express = require("express")
const dbJason = require("./db/db.json")
const fs = require("fs")
const uuidv1 = require("uuidv1")
const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes")
const notes = require("./routes/notes")

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());