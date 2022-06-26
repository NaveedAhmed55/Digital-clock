window.addEventListener("DOMContentLoaded", () => {
  function displayTime() {
    const date = new Date();
    [hours, minutes, seconds] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if (hours >= 12) {
      document.querySelector(".session").innerText = "PM";
      hours = hours - 12;
    }

    document.querySelector(".hours").innerText = hours;
    document.querySelector(".minutes").innerText = minutes;
    document.querySelector(".seconds").innerText = seconds;
    if (minutes <= 9)
      document.querySelector(".minutes").innerText = "0" + minutes;
    if (hours <= 9) document.querySelector(".hours").innerText = "0" + hours;
    if (seconds <= 9)
      document.querySelector(".seconds").innerText = "0" + seconds;
  }
  setInterval(displayTime, 10);
});
