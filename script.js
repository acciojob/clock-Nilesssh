//your JS code here. If required.
function displayTime() {
  let now = new Date();
  let time = now.toLocaleTimeString();
  let date = now.toDateString();
  document.getElementById("timer").innerHTML = `${time}, ${date}`;
}

setInterval(displayTime, 1000);
