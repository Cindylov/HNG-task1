const updateTime = () => {
  const now = new Date();
  const timeUTC = now.toISOString().substring(11, 19);
  document.querySelector('[data-testid="currentTimeUTC"]').textContent = ` ${timeUTC}`;
  document.querySelector('[data-testid="currentDay"]').textContent = ` ${now.toLocaleDateString('en-US',{ weekday: 'long'})}`;
};

updateTime();
setInterval(updateTime, 1000);