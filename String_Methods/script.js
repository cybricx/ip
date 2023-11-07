// Button elements
const concatBtn = document.getElementById("concatBtn");
const toUpperCaseBtn = document.getElementById("toUpperCaseBtn");
const toLowerCaseBtn = document.getElementById("toLowerCaseBtn");
const charAtBtn = document.getElementById("charAtBtn");
const indexOfBtn = document.getElementById("indexOfBtn");
const substringBtn = document.getElementById("substringBtn");
const replaceBtn = document.getElementById("replaceBtn");
const splitBtn = document.getElementById("splitBtn");
const trimBtn = document.getElementById("trimBtn");

// Input and output elements
const textInput = document.getElementById("textInput");
const output = document.getElementById("output");

// Event listeners for the buttons
concatBtn.addEventListener("click", () => {
    const text = textInput.value;
    const result = text.concat(" Welcome!");
    displayResult(result);
});

toUpperCaseBtn.addEventListener("click", () => {
    const text = textInput.value;
    const result = text.toUpperCase();
    displayResult(result);
});

toLowerCaseBtn.addEventListener("click", () => {
    const text = textInput.value;
    const result = text.toLowerCase();
    displayResult(result);
});

charAtBtn.addEventListener("click", () => {
    const text = textInput.value;
    const result = text.charAt(7);
    displayResult(result);
});

indexOfBtn.addEventListener("click", () => {
    const text = textInput.value;
    const result = text.indexOf("World");
    displayResult(result);
});

substringBtn.addEventListener("click", () => {
    const text = textInput.value;
    const result = text.substring(7, 12);
    displayResult(result);
});

replaceBtn.addEventListener("click", () => {
    const text = textInput.value;
    const result = text.replace("World", "Universe");
    displayResult(result);
});

splitBtn.addEventListener("click", () => {
    const text = textInput.value;
    const result = text.split(",");
    displayResult(result);
});

trimBtn.addEventListener("click", () => {
    const text = textInput.value;
    const result = text.trim();
    displayResult(result);
});

// Function to display the result in the output element
function displayResult(result) {
    output.textContent = result;
}
