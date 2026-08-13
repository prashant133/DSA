function patternFour(number) {
  for (let i = 0; i < number; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i + " ";
    }
    console.log(row);
  }
}

patternFour(6);
