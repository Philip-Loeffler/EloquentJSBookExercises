function timeForMilkAndCookies(date) {
  console.log(date.getMonth(), date.getDate());

  let month = date.getMonth();
  let day = date.getDate();
  if (month == 11 && day == 24) {
    return true;
  } else {
    return false;
  }
}

let result = timeForMilkAndCookies(new Date(3000, 11, 24));
console.log(result);
