var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            return 0.25 * daysLate;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function maxBooksAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.maxBooksAllowed = maxBooksAllowed;
    function privateFunc() {
        console.log('This is private function');
    }
})(Utility || (Utility = {}));
///<reference path="utility-functions.ts" />
var util = Utility.Fees;
var result = util.calculateLateFee(10);
console.log(result);
var result2 = Utility.maxBooksAllowed(25);
console.log(result2);
