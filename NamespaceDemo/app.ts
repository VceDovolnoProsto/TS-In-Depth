///<reference path="utility-functions.ts" />

import util = Utility.Fees
const result = util.calculateLateFee(10);
console.log(result);

const result2 = Utility.maxBooksAllowed(25);
console.log(result2);