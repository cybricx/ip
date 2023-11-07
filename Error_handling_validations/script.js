function handleClick() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dateOfBirth = document.getElementById('date').value; // Get the date input
    const errorText = document.getElementById('errorText');
    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Check if the email matches the valid pattern
    if (!emailPattern.test(email)) {
        errorText.textContent = 'Enter a valid email address.';
        return;
    } else {
        errorText.textContent = ''; // Clear any previous error message
    }

    if (password.length < 8 || password.length > 32) {
        errorText.textContent = 'Password must be between 8 and 32 characters.';
        return;
    } else {
        errorText.textContent = ''; // Clear any previous error message
    }

    const currentDate = new Date();
    const userDateOfBirth = new Date(dateOfBirth);
    const ageDifference = currentDate.getFullYear() - userDateOfBirth.getFullYear();
    if (ageDifference < 18) {
        errorText.textContent = 'You must be at least 18 years old to submit the form.';
        return;
    } else {
        errorText.textContent = ''; // Clear any previous error message
    }
    alert("Form submitted successfully");
}
