// function to display the current time
function updateTime(){
  const timeElement = document.getElementById('utc-time');
  const now = new Date();
  timeElement.textContent = now.toLocaleTimeString('en-US', {hour12: false});
}

// function to display the current day of week
function updateDay() {
  const dayElement = document.getElementById('current-day');
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const now = new Date();
  dayElement.textContent = days[now.getDay()];
}

// update time and day immediately
updateTime();
updateDay();

// update time every second
setInterval(updateTime, 1000)