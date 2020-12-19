function CalculateFutureValues(monthlyInvestment, monthlyInterestRate, months) {
  let futureValue = 0;
  for (let i = 1; i <= months; i++) {
    futureValue = (futureValue + monthlyInvestment) * (1 + monthlyInterestRate);
  }
  return futureValue.toFixed(2);
}

let x = CalculateFutureValues(100, 0.01, 120);
console.log(x);
