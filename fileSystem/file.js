const fs = require("fs");

// this is the way to create a new file and adding some value in it
fs.writeFile("test.txt", "this is a test", function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("done writing");
  }
});

// this is the way to add some content in the file iwthout changing the current content
fs.appendFile("test.txt", "how are you ?", function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("done writing");
  }
});

// renaming the file nae
fs.rename("test.txt", "hello.txt", function (err) {
  if (err) console.error(err);
  else console.log("done writing");
});

// copying the file to new destination

fs.copyFile("hello.txt", "./copy.txt", function (err) {
  if (err) console.error(err);
  else console.log("done");
});

// unlink or deleting the file
fs.unlink("copy.txt", function (err) {
  if (err) console.error(err);
  else console.log("removed");
});

// reading the file
fs.readFile("hello.txt", { encoding: "utf-8" }, function (err, data) {
  if (err) console.error(err);
  else console.log(data);
});

// overwriting the file or updating all the content

fs.writeFile("hello.txt", "hello from yankee", function (err) {
  if (err) console.error(err);
  else console.log("done");
});

// creating a new folder
fs.mkdir("./copy", { recursive: true }, function (err) {
  if (err) console.error(err);
  else console.log("done");
});
