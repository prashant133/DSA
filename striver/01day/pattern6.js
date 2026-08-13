// reverser triganle *

function pattern6(number) {
  for (let i = 0; i < number; i++) {
    let row = " ";

    for (let j = number; j > i; j--) {
      row += " *";
    }
    console.log(row);
  }
}

pattern6(5);

// reverse triangle from 5 - 1
function patternSeven(number) {
  for (let i = 0; i < number; i++) {
    // console.log(i)
    let row = " ";
    for (let j = number; j > i; j--) {
      row += j + " ";
    }

    console.log(row);
  }
}

patternSeven(5);
