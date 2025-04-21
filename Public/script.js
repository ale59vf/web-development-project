// home page //

// typing effect 
const texts = ["\nComputer Science Student"];
let textIndex = 0;
let charIndex = 0;
let cursorVisible = true; // Track cursor visibility

function typeEffect() {
    let currentText = texts[textIndex];
    let cursor = cursorVisible ? "|" : ""; // Toggle cursor visibility
    document.getElementById("major").innerText = currentText.slice(0, charIndex) + cursor; // Display text with cursor
    charIndex++;

    if (charIndex > currentText.length) {
        setTimeout(() => {
            charIndex = 0;
            textIndex = (textIndex + 1) % texts.length;
            typeEffect();
        }, 1500);
    } else {
        setTimeout(typeEffect, 100);
    }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// About Page //


// Contact Page // 
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    fetch('https://example.com/api/contact', { // Replace with your API endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Message sent successfully!');
        form.reset(); // Reset the form after successful submission
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again later.');
    });
});