function patternSeven(number) {
  for (let i = 0; i < number; i++) {
    // console.log(i)
    let row = " ";
    for (let j = number; j > i; j--) {
      row += number - j + 1 + " ";
    }

    console.log(row);
  }
}

patternSeven(5);
