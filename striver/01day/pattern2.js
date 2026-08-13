function patternTwo(number) {
  for (let i = 0; i < number; i++) {
    // console.log("*")
    let row = "";

    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

patternTwo(5);
