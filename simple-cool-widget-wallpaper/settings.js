const darkModeCheckbox = document.querySelector('.popup-item:first-child input');
const gearIcon = document.querySelector('.settings i');
const popup = document.querySelector('.settings-popup');
const calendarCheckbox = document.querySelector('.popup-item:nth-child(2) input');
const weatherCheckbox = document.querySelector('.popup-item:nth-child(3) input');
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

// Dark Mode Toggle
darkModeCheckbox.addEventListener('change', () => {
    if (darkModeCheckbox.checked) {
        document.documentElement.style.setProperty('--text-color', 'white');
    } else {
        document.documentElement.style.setProperty('--text-color', 'black');
    }
});

// Set default states (enabled by default)
document.addEventListener('DOMContentLoaded', () => {
    // Set initial states
    darkModeCheckbox.checked = true;
    calendarCheckbox.checked = true;
    weatherCheckbox.checked = true;
    
    // Set initial text color
    document.documentElement.style.setProperty('--text-color', 'white');
    
    // Ensure elements are visible
    calendarElement.classList.remove('hidden');
    weatherElement.classList.remove('hidden');
});

document.addEventListener("DOMContentLoaded", () => {
  const gearIcon = document.querySelector(".gear-icon");
  const settingsPopup = document.querySelector(".settings-popup");
  const settingsContainer = document.querySelector(".settings");

  let isOpen = false;

  gearIcon.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent event from bubbling to document
    isOpen = !isOpen;
    settingsPopup.style.display = isOpen ? "block" : "none";
    gearIcon.classList.toggle("rotate", isOpen);
  });

  // Close popup when clicking outside
  document.addEventListener("click", (e) => {
    if (isOpen && !settingsContainer.contains(e.target)) {
      isOpen = false;
      settingsPopup.style.display = "none";
      gearIcon.classList.remove("rotate");
    }
  });
});