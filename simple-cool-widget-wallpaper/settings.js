const darkModeCheckbox = document.querySelector(
  ".popup-item:first-child input"
);
const gearIcon = document.querySelector(".settings i");
const popup = document.querySelector(".settings-popup");
const calendarCheckbox = document.querySelector(
  ".popup-item:nth-child(2) input"
);
const weatherCheckbox = document.querySelector(
  ".popup-item:nth-child(3) input"
);
const calendarElement = document.querySelector(".calendar");
const weatherElement = document.querySelector(".weather-container");

// Show/hide settings popup
gearIcon.addEventListener("click", () => {
  popup.classList.toggle("show");
});

// Optional: Close popup when clicking outside
document.addEventListener("click", (e) => {
  if (!document.querySelector(".settings").contains(e.target)) {
    popup.classList.remove("show");
  }
});

// Toggle Calendar visibility
calendarCheckbox.addEventListener("change", () => {
  if (calendarCheckbox.checked) {
    calendarElement.classList.remove("hidden");
  } else {
    calendarElement.classList.add("hidden");
  }
});

// Toggle Weather visibility
weatherCheckbox.addEventListener("change", () => {
  if (weatherCheckbox.checked) {
    weatherElement.classList.remove("hidden");
  } else {
    weatherElement.classList.add("hidden");
  }
});

// Dark Mode Toggle
darkModeCheckbox.addEventListener("change", () => {
  if (darkModeCheckbox.checked) {
    document.documentElement.style.setProperty("--text-color", "white");
    document
      .querySelector("#bg-url-input")
      .style.setProperty("background-color", "rgb(44, 44, 44)");
  } else {
    document.documentElement.style.setProperty("--text-color", "black");
    document
      .querySelector("#bg-url-input")
      .style.setProperty("background-color", "white");
  }
});

// Set default states (enabled by default)
document.addEventListener("DOMContentLoaded", () => {
  // Set initial states
  darkModeCheckbox.checked = true;
  calendarCheckbox.checked = true;
  weatherCheckbox.checked = true;

  // Set initial text color
  document.documentElement.style.setProperty("--text-color", "white");

  // Ensure elements are visible
  calendarElement.classList.remove("hidden");
  weatherElement.classList.remove("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
  const gearIcon = document.querySelector(".gear-icon");
  const settingsPopup = document.querySelector(".settings-popup");
  const settingsContainer = document.querySelector(".settings");
  const main = document.querySelector(".main");

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
  function setBg(
    url = "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ) {
    if (main) {
      main.style.backgroundImage = `url('${url}')`;
    }
  }
  setBg();

  const changeBackground = document.querySelector("#change-background");
  const defaultBackground = document.querySelector("#default-background");

  const urlInput = document.querySelector("#bg-url-input");
  changeBackground.addEventListener("click", () => {
    const url = urlInput.value;
    setBg(url);
  });
  defaultBackground.addEventListener("click", () => {
    setBg();
  });

  const fileInput = document.querySelector("#bg-file-input");
  if (fileInput) {
    fileInput.addEventListener("change", function () {
      const file = this.files[0];
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = function (e) {
          setBg(e.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        console.log("please select a valid image file");
      }
    });
  }
});
