
// Interactive greeting functionality
document.getElementById('greetBtn').addEventListener('click', function() {
    const name = prompt('Please Enter Your Name:');
    const greetingDiv = document.getElementById('greeting');
    if (name && name.trim() !== '') {
        greetingDiv.textContent = `Hello, ${name.trim()}! Welcome!`;
    } else {
        greetingDiv.textContent = 'Hello, Guest!';
    }
});
