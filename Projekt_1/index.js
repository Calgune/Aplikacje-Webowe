function updateClock() {
  const now = new Date();

  const hours = now.getHours().toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);

  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent = timeString;
}

function validateForm() {
  const email = document.getElementById("email").toString().trim();
  const topic = document.getElementById("topic").toString().trim();
  const contents = document.getElementById("contents").toString().trim();

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

updateClock();
setInterval(updateClock, 1000);
