if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => console.log('Service Worker registered!'))
      .catch((error) => console.error('Service Worker registration failed:', error));
  }

document.addEventListener('DOMContentLoaded', function() {
    var today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    document.getElementById('date').setAttribute('min', today); // Set the min attribute to today's date

});


// Sticky Header Effect
const header = document.querySelector('.header-container');
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}); 


// ----------------
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

document.getElementById('book-appointment').addEventListener('click', function() {
    document.getElementById('appointments').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('change-branch').addEventListener('change', function() {
    var address = document.getElementById('branch-address');
    if (this.value === 'branch1') {
        address.textContent = 'Ground C.G, Sai Parisar Complex, J.J. Hospital, Torwa, Bilaspur, Chhattisgarh 495004';
        document.getElementById("map").setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.524148696579!2d82.18204547566951!3d22.067791079854473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280ac4f386f3af%3A0xc230665de1ce6a85!2sZaynah%20Beauty%20Parlour%20%26%20Boutique!5e0!3m2!1sen!2sin!4v1734070473258!5m2!1sen!2sin");
    } else if (this.value === 'branch2') {
        address.textContent = 'Anwar Bakshi Marg, near Sahoo Medical Store, Bilaspur, Chhattisgarh 495004';
        document.getElementById("map").setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.977157465668!2d82.17643357566911!3d22.050469279867006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28753baa5a3055%3A0x48a144a40e1c4444!2sZAYNAH%20SALON%20%26%20ACADEMY!5e0!3m2!1sen!2sin!4v1734115994609!5m2!1sen!2sin");
    }
});
// Appointment Form Submission
document.querySelector('#appointments form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Capture form data
    const name = document.querySelector('#appointments input[name="name"]').value;
    const number = document.querySelector('#appointments input[name="number"]').value;
    const date = document.querySelector('#appointments input[name="date"]').value;
    const service = document.querySelector('#appointments select[name="service"]').value;

    // Validate the form (simple example)
    if (!name || !number || !date || !service) {
        alert('Please fill out all fields before submitting.');
        return;
    }

    // Display a success message
    alert(`Thank you, ${name}! Your appointment for ${service} is booked for ${date}.`);
    this.reset(); // Clear the form
});
// ------------------


const toggleBtn = document.querySelector(".toggle-btn");
const dropDownMenu = document.querySelector(".dropdown-menu");
const toggleBtnIcon = document.querySelector(".toggle-btn i");

toggleBtn.addEventListener('click', ()=>{
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains("open");

    toggleBtnIcon.classList = isOpen? 'fa-solid fa-xmark' : "fa-solid fa-bars";
})