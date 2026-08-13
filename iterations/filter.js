const coding = ["python", "java", "javascript", "c++", "rust", "golang"];

// const values = coding.forEach((item)=> {
//     console.log(item)
// })

// console.log(values)

// note : forEach does not return value

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNumber = nums.filter((num)=> num > 4)

// console.log(newNumber)

const books = [
  { title: "book 1", genre: "fiction", published: "1960" },
  { title: "book 2", genre: "History", published: "2000" },
  { title: "book 3", genre: "Science", published: "2001" },
  { title: "book 4", genre: "non-fiction", published: "1965" },
  { title: "book 5", genre: "Science", published: "1970" },
  { title: "book 6", genre: "History", published: "1990" },
  { title: "book 7", genre: "fiction", published: "1999" },
];

// const bookList = books.filter((bk) => bk.genre === "History");

const bookList = books.filter(
  (bk) => bk.published >= 2000 && bk.genre === "Science"
);

console.log(bookList);
