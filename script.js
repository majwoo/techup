var age = 20;
age = 65;
console.log(age);

var username = "winston";
var password = "password";
var isMale = "true";
var isLoggedIn = "false";
var words = ["hello! how are you?", "i am well", "thank you!"];

console.log(username);
console.log(password);
console.log(isMale);
console.log(isLoggedIn);
console.log(words);

if(isMale == "false") {
    console.log("I am a boy!");
} else {
    console.log("I am a girl!");
}

while(age < 70) {
    console.log("My age is " + age);
    age = age + 1;
}

function sayHello() {
    var x = 1;
    while(x < 5) {
        alert("hello everyone!");  
        x = x + 1;
    }
    
}

function showAge() {

    //Get the value from the input field of ID #user-input
    //Store this value in a variable called user_input
    var user_input = document.getElementById("user-input").value

    //Update the content for the HTML element with ID #header-age with
    //whatever the user_input variable contains
    document.getElementById("header-age").textContent = user_input
}