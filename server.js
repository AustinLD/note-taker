const path = require("path")
const express = require("express")
const dbJason = require("./db/db.json")
const fs = require("fs")
const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes")
const notes = require("./routes/notes")

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", notes)
app.use("/", htmlRoutes)

app.listen(PORT, () => console.log(PORT))