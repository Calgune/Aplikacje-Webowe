function updateClock() {
  const now = new Date();

  const hours = now.getHours().toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);

  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);

function validateForm() {
  const email = document.getElementById("email").value;
  const topic = document.getElementById("topic").value;
  const contents = document.getElementById("message").value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
  if (topic === "") {
    alert("Please select or enter a topic.");
    return false;
  }

  if (contents.length < 10) {
    alert("Please write at least 10 characters in the message.");
    return false;
  }
  alert("Message sent successfully!");
  return true;
}

const logo = document.getElementById("nuke");
let clickCount = 0;

logo.addEventListener("click", function () {
  clickCount++;

  if (clickCount === 3) {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.backgroundImage = "url('images/nosignal.webp')";
    overlay.style.backgroundSize = "cover";
    overlay.style.backgroundPosition = "center";
    overlay.style.backgroundRepeat = "no-repeat";
    overlay.style.zIndex = 9999;
    overlay.style.pointerEvents = "none";
    document.body.appendChild(overlay);

    showCustomAlert(
      "Congratulations, you succesfully nuked my website, now it's useless, thanks C:"
    );
  }
});

function showCustomAlert(text) {
  const alertBox = document.createElement("div");
  alertBox.textContent = text;

  alertBox.style.position = "fixed";
  alertBox.style.top = "20%";
  alertBox.style.left = "50%";
  alertBox.style.transform = "translate(-50%, -50%)";
  alertBox.style.backgroundColor = "white";
  alertBox.style.color = "black";
  alertBox.style.padding = "20px 30px";
  alertBox.style.border = "2px solid black";
  alertBox.style.borderRadius = "10px";
  alertBox.style.fontFamily = "Arial";
  alertBox.style.fontSize = "18px";
  alertBox.style.zIndex = 10001;

  document.body.appendChild(alertBox);

  setTimeout(() => {
    alertBox.remove();
  }, 5000);
}


