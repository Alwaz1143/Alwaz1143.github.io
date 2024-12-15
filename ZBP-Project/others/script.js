// JavaScript for Salon Website

// Smooth Scrolling for Navigation Links
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Appointment Form Submission
document.querySelector('#appointments form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Capture form data
    const name = document.querySelector('#appointments input[name="name"]').value;
    const email = document.querySelector('#appointments input[name="email"]').value;
    const date = document.querySelector('#appointments input[name="date"]').value;

    // Validate the form (simple example)
    if (!name || !email || !date) {
        alert('Please fill out all fields before submitting.');
        return;
    }

    // Display a success message
    alert(`Thank you, ${name}! Your appointment is booked for ${date}.`);
    this.reset(); // Clear the form
});

// Sticky Header Effect
const header = document.querySelector('header');
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
