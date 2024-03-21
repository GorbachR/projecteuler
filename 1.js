function multiplesOf3Or5(number) {

  let result = 0;

  for(let three = 3; three < number; three += 3) {
    if(three % 5 != 0) {
      result += three;
    }
  }

  for(let five = 5; five < number; five += 5) {
    result += five;
  }

  return result;
}

ccnsole.log(multiplesOf3Or5(1000));
