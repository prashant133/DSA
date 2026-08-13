function patternThree(number) {
  for (let i = 0; i <= number; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j ;
    }

    console.log(row);   
  }
}

patternThree(5);
