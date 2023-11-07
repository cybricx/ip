// Sample array
const numbers = [1, 2, 3, 4, 5];

// Button elements
const pushBtn = document.getElementById("pushBtn");
const popBtn = document.getElementById("popBtn");
const unshiftBtn = document.getElementById("unshiftBtn");
const shiftBtn = document.getElementById("shiftBtn");
const concatBtn = document.getElementById("concatBtn");
const joinBtn = document.getElementById("joinBtn");
const sliceBtn = document.getElementById("sliceBtn");
const spliceBtn = document.getElementById("spliceBtn");
const filterBtn = document.getElementById("filterBtn");
const mapBtn = document.getElementById("mapBtn");

// Output element
const output = document.getElementById("output");

// Event listeners for the buttons
pushBtn.addEventListener("click", () => {
    numbers.push(6);
    displayResult(numbers);
});

popBtn.addEventListener("click", () => {
    numbers.pop();
    displayResult(numbers);
});

unshiftBtn.addEventListener("click", () => {
    numbers.unshift(0);
    displayResult(numbers);
});

shiftBtn.addEventListener("click", () => {
    numbers.shift();
    displayResult(numbers);
});

concatBtn.addEventListener("click", () => {
    const newArray = numbers.concat([6, 7, 8]);
    displayResult(newArray);
});

joinBtn.addEventListener("click", () => {
    const joinedString = numbers.join(", ");
    displayResult(joinedString);
});

sliceBtn.addEventListener("click", () => {
    const subArray = numbers.slice(1, 4);
    displayResult(subArray);
});

spliceBtn.addEventListener("click", () => {
    numbers.splice(2, 2, 6, 7);
    displayResult(numbers);
});

filterBtn.addEventListener("click", () => {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    displayResult(evenNumbers);
});

mapBtn.addEventListener("click", () => {
    const squaredNumbers = numbers.map(num => num * num);
    displayResult(squaredNumbers);
});

// Function to display the result in the output element
function displayResult(result) {
    output.textContent = JSON.stringify(result);
}
