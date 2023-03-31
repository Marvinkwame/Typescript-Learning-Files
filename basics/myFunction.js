"use strict";
exports.__esModule = true;
function addNum(num) {
    return num + 5;
}
function attackOnTitan(main, place) {
    return "So ".concat(main, " attack ").concat(place);
}
function theTyep(type) {
    return type === "admin";
}
theTyep("admin");
attackOnTitan("eren", "paradis");
function getUpper(word) {
    return "Oh word ".concat(word);
}
function signUp(name, email, isPaid) {
}
var loginUser = function (email, username, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
};
/* function getVal(myVal: number): string {
    if(myVal > 2) {
        return true
    }

    return "200 okay"
}
*/
var getString = function (s) {
    return "";
};
function consoleError(msg) {
    console.log(msg);
}
function handleError(msg) {
    throw new Error(msg);
}
loginUser("Shishui@konohamail.com", "shishui");
signUp("Kakashi", "k@konohamail.com", true);
getUpper("Neymar");
addNum(10);
