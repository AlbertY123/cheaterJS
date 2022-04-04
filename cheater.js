function popup(thing){
    alert(thing);
}
//function that generates random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}
function fakename(){
    var names = [
        "John",
        "Jane",
        "Sam",
        "Sally",
        "Sue",
        "Albert",
        "Bob",
        "Mary",
        "Steve",
        "Joe",
        "Alex",
        "Mike",
        "Tom",
        "Mark",
        "Linda",
        "Sara", 
        "Sophia",

    ]
    return names[randomNumber(0, names.length - 1)];
}
//function to add 2 numbers
function add(a, b) {
    return a + b;
}
//function to subtract 2 numbers
function subtract(a, b) {
    return a - b;
}
//function to multiply 2 numbers
function multiply(a, b) {
    return a * b;
}
//function to divide 2 numbers
function divide(a, b) {
    return a / b;
}
function calculate(a, b, operator) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
}
function closetab(){
    close()
}
function hidebyid(id){
    document.getElementById(id).style.display = "none";
}
export default{popup, randomNumber, fakename, add, subtract, multiply, divide, calculate, closetab, hidebyid};
