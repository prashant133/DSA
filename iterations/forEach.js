const coding = ["python", "java", "javascript", "c++", "rust", "golang"];

// takes a callback
coding.forEach(function (item) {
  //   console.log(item);
});

coding.forEach((item) => {
  //   console.log(item);
});

// can have multipe parameter
// note can also take full array
coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
});

const arryWithinObject = [
  {
    language: "javascript",
    extension: "js",
  },
  {
    language: "python",
    extension: "py",
  },
  {
    language: "java",
    extension: "java",
  },
];

arryWithinObject.forEach((item) => {
  console.log(item.language,item.extension);

});
