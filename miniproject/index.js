const express = require("express");
const path = require("path");
const fs = require("fs");
const { log } = require("console");

const app = express();

// this is also known as parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set up ejs for the frontend
app.set("view engine", "ejs");

// now we can use css and with this line of code
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res, next) {
  fs.readdir("./files", function (err, files) {
    res.render("index", { files: files });
  });
});

// to create a new file
app.post("/create", function (req, res, next) {
  console.log(req.body); // Debugging line
  const { title, details } = req.body;

  const sanitizedTitle = title.replace(/[^a-zA-Z0-9_\-]/g, "_");
  const fileName = `${sanitizedTitle}.txt`;

  fs.writeFile(`./files/${fileName}`, details, function (err) {
    if (err) {
      console.error("Error writing file:", err);
      return res.status(500).send("Error creating file.");
    }
    res.redirect("/");
  });
});

// to read the particular file
app.get("/file/:filename", function (req, res, next) {
  const fileName = req.params.filename;

  fs.readFile(`./files/${fileName}`, "utf-8", function (err, fileData) {
    if (err) {
      console.error("Error writing file:", err);
      return res.status(500).send("Error creating file.");
    }
    res.render(`show`, { fileName: fileName, files: fileData });
  });
});

//to edit the file
app.get("/edit/:filename", function (req, res, next) {
  const fileName = req.params.filename;
  res.render("edit", { fileName });
});

app.post("/edit", function (req, res) {
  const { perviousName, newFileName } = req.body;

  fs.rename(
    `./files/${perviousName}`,
    `./files/${newFileName}`,
    function (err) {
      if (err) console.log(err);
      res.redirect("/");
    }
  );
});

app.listen(3000, function () {
  console.log("server is running");
});
