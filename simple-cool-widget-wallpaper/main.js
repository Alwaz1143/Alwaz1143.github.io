window.addEventListener("error", function () {
  console.log("reloading page due to error...");
  setTimeout(() => {
    location.reload();
  }, 1 * 60 * 1000);
});
window.addEventListener("unhandledrejection", function () {
  console.log("reloading page due to unhandled rejection...");
  setTimeout(() => {
    location.reload();
  }, 1 * 60 * 1000);
});

import "./js/settings.js";
import "./js/quotesLogic.js";
import "./js/clockLogic.js";
import "./js/calendarLogic.js";
import "./js/weatherLogic.js";
import "./js/date.js";
