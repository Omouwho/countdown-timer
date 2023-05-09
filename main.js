const daysValue = document.querySelector("#days");
const hoursValue = document.querySelector("#hours");
const minutesValue = document.querySelector("#minutes");
const secondsValue = document.querySelector("#seconds");

// time the clock counts from ie from the new year 2024
const countdownDateTime = new Date(2024, 1, 1, 0, 0, 0).getTime();

function countDown() {
  const dateTimeNow = new Date().getTime();
  let difference = countdownDateTime - dateTimeNow;

  // days
  const days = Math.round(difference / (1000 * 60 * 60 * 24));

  // hours
  const hours = Math.round((difference / (1000 * 60 * 60)) % 24);

  // minutes
  const minutes = Math.round((difference / (1000 * 60)) % 60);

  // seconds
  const seconds = Math.round((difference / 1000) % 60);

  daysValue.innerHTML = days;
  hoursValue.innerHTML = hours;
  minutesValue.innerHTML = minutes;
  secondsValue.innerHTML = seconds;
}

setInterval(countDown, 1000);
