function popup(e) {
    alert(e);
}
function randomNumber(e, t) {
    return Math.floor(Math.random() * (1 + t - e) + e);
}
function fakename() {
    var e = ["John", "Jane", "Sam", "Sally", "Sue", "Albert", "Bob", "Mary", "Steve", "Joe", "Alex", "Mike", "Tom", "Mark", "Linda", "Sara", "Sophia"];
    return e[randomNumber(0, e.length - 1)];
}
function add(e, t) {
    return e + t;
}
function subtract(e, t) {
    return e - t;
}
function multiply(e, t) {
    return e * t;
}
function divide(e, t) {
    return e / t;
}
function calculate(e, t, n) {
    return "+" === n ? add(e, t) : "-" === n ? subtract(e, t) : "*" === n ? multiply(e, t) : "/" === n ? divide(e, t) : void 0;
}
function closetab() {
    close();
}
function hidebyid(e) {
    document.getElementById(e).style.display = "none";
}
function showbyid(e) {
    document.getElementById(e).style.display = "block";
}
function redirect(e) {
    window.location.href = e;
}
export default{popup, randomNumber, fakename, add, subtract, multiply, divide, calculate, closetab, hidebyid, showbyid, redirect};
