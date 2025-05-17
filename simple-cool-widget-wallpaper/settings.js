const gearIcon = document.querySelector('.settings i');
const popup = document.querySelector('.settings-popup');
const calendarCheckbox = document.querySelector('.popup-item:nth-child(1) input');
const weatherCheckbox = document.querySelector('.popup-item:nth-child(2) input');
const calendarElement = document.querySelector('.calendar');
const weatherElement = document.querySelector('.weather-container');

// Show/hide settings popup
gearIcon.addEventListener('click', () => {
  popup.classList.toggle('show');
});

// Optional: Close popup when clicking outside
document.addEventListener('click', (e) => {
  if (!document.querySelector('.settings').contains(e.target)) {
    popup.classList.remove('show');
  }
});

// Toggle Calendar visibility
calendarCheckbox.addEventListener('change', () => {
  if (calendarCheckbox.checked) {
    calendarElement.classList.remove('hidden');
  } else {
    calendarElement.classList.add('hidden');
  }
});

// Toggle Weather visibility
weatherCheckbox.addEventListener('change', () => {
  if (weatherCheckbox.checked) {
    weatherElement.classList.remove('hidden');
  } else {
    weatherElement.classList.add('hidden');
  }
});

// Set default states (enabled by default)
document.addEventListener('DOMContentLoaded', () => {
  calendarCheckbox.checked = true; // Calendar enabled by default
  weatherCheckbox.checked = true; // Weather enabled by default

  calendarElement.classList.remove('hidden'); // Ensure Calendar is visible
  weatherElement.classList.remove('hidden'); // Ensure Weather is visible
});
