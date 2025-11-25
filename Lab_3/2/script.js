var timeElapsed = 0;
var timerID = -1;

function formatTime(totalSeconds) {
  var minutes = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds % 60;
  var formattedTime = "";

  if (minutes > 0) {
    formattedTime = minutes + "min " + seconds + "s";
  } else {
    formattedTime = seconds + "s";
  }

  return formattedTime;
}

function tick() {
  timeElapsed++;
  document.getElementById("stoper").innerHTML = formatTime(timeElapsed);
}

function start() {
  if (timerID == -1) {
    timerID = setInterval(tick, 1000);
  }
}

function stop() {
  if (timerID != -1) {
    clearInterval(timerID);
    timerID = -1;
  }
}

function reset() {
  stop();
  timeElapsed = 0;
  document.getElementById("stoper").innerHTML = formatTime(timeElapsed);
}
