// JavaScript code
// Variables
var button = document.getElementById("changeColorBtn");
var colors = ["#FF5733", "#33FF57", "#5733FF"];
var currentIndex = 0;

// Event Listener - Click Event
button.addEventListener("click", function() {
    // Conditions and Operators
    if (currentIndex < colors.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    // Change background color
    document.body.style.backgroundColor = colors[currentIndex];
});

// Functions
function someFunction() {
    // You can add more JavaScript functions here.
}

// Classes and Objects
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`;
    }
}

// Create objects using the Person class
var person1 = new Person("John", 25);
var person2 = new Person("Alice", 30);

// Output in the console
console.log(person1.introduce());
console.log(person2.introduce());


