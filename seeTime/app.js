var MicroModal = require('micromodal');
var moment = require('moment'); // require
document.addEventListener('DOMContentLoaded', function () {
  MicroModal.init({
    onShow: modal => console.info(`${modal.id} is shown`), // [1]
    onClose: modal => console.info(`${modal.id} is hidden`), // [2]
    openTrigger: 'data-custom-open', // [3]
    closeTrigger: 'data-custom-close', // [4]
    openClass: 'is-open', // [5]
    disableScroll: true, // [6]
    disableFocus: false, // [7]
    awaitOpenAnimation: false, // [8]
    awaitCloseAnimation: false, // [9]
    debugMode: true // [10]
  });
  fetchTimeZones();
  const defaultZone = 'Asia/Kolkata';
  setTime(defaultZone);

  // -----
  intervalId = setInterval(() => setTime(defaultZone), 3000); // Update time every second  
  // -----
});

const zoneList = "https://api.timezonedb.com/v2.1/list-time-zone?key=TZ9RFCWLOEAN&format=json";
// const timeBox = document.querySelector('.time-box');
const zoneDiv = document.querySelector('.zone-div');
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const applyButton = document.querySelector('#apply-button');

// -----
let intervalId;
// -----


applyButton.addEventListener('click',()=>{
  const zoneName = document.querySelector('.select-location').value;
  setTime(zoneName);
  MicroModal.close('modal-1');

// -----
  clearInterval(intervalId);
  intervalId = setInterval(() => setTime(zoneName), 3000); // Update time every second
// -----

});

async function fetchTimeZones(){
  try {
    const options = document.querySelector('.select-location');
    const response = await fetch(zoneList);
    const data = await response.json();
    if (data.status === 'OK'){
      data.zones.sort((a, b) => a.countryName.localeCompare(b.countryName));

      data.zones.forEach(zone => {
        // let optionName = `${zone.countryName}, ${zone.zoneName} (${zone.countryCode})`;
        const totalZone = zone.zoneName.split('/');
        var cityName = totalZone[1];
        if (totalZone.length === 3){
          cityName = totalZone[1] + " " +totalZone[2];
        }

                // Format GMT offset
                const gmtOffsetHours = Math.floor(Math.abs(zone.gmtOffset) / 3600);
                const gmtOffsetMinutes = Math.abs(zone.gmtOffset) % 3600 / 60;
                const gmtSign = zone.gmtOffset >= 0 ? "+" : "-";
                const gmtFormatted = `GMT${gmtSign} ${gmtOffsetHours.toString().padStart(2, '0')}:${gmtOffsetMinutes.toString().padStart(2, '0')}`;

        let optionName = `${zone.countryName} ${cityName} (${zone.countryCode}) ${gmtFormatted}`;
        let option = document.createElement('option');
        option.value = zone.zoneName;
        option.textContent = optionName;
        options.appendChild(option);
        if (zone.countryName === 'India'){
          option.setAttribute('selected',true);
        }
      });
    }
    else{
      console.log('Error on fetching time:', data.message)
    }
  } catch (error) {
    console.log('Error on fetching time:', error);
  }
}

async function setTime(zone) {
  try {
    const timeResponse = await fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=TZ9RFCWLOEAN&format=json&by=zone&zone=${zone}`);
    const timeData = await timeResponse.json();
    // console.log(timeData.formatted);
    zoneDiv.innerText = zone;
    time.innerText = timeData.formatted.split(' ')[1];
    date.innerText = moment(timeData.formatted.split(' ')[0]).format("dddd, MMMM Do YYYY");
  } catch (error) {
    console.error('Error setting time:', error);
  }
}

const toggleIcon = document.getElementById('toggle-dark-mode');
const body = document.body;

toggleIcon.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Optional: Change the icon based on mode
    if (body.classList.contains('dark-mode')) {
        toggleIcon.textContent = '☀️'; // Light mode icon
    } else {
        toggleIcon.textContent = '🌙'; // Dark mode icon
    }
});