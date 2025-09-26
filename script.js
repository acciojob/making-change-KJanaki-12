

const makeChange = (amount) => {
  // your name here
	const change = {};

  change.q = Math.floor(amount / 25);     // number of quarters
  amount %= 25;                           // remainder after quarters

  change.d = Math.floor(amount / 10);     // number of dimes
  amount %= 10;

  change.n = Math.floor(amount / 5);      // number of nickels
  amount %= 5;

  change.p = amount;                      // remaining pennies

  return change;
	
};

// Do not the change the code below
const c = prompt("Enter c: ");

alert(JSON.stringify(makeChange(c)));
