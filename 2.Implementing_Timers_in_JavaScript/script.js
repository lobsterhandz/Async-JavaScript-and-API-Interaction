// Task 1: Countdown Timer
let countdownInterval;
const timerDisplay = document.getElementById("timerDisplay");
const startTimerButton = document.getElementById("startTimerButton");

startTimerButton.addEventListener("click", () => {
  const timerInput = parseInt(document.getElementById("timerInput").value, 10);
  if (isNaN(timerInput) || timerInput <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }

  clearInterval(countdownInterval);
  let remainingTime = timerInput;

  countdownInterval = setInterval(() => {
    timerDisplay.textContent = `Timer: ${remainingTime} seconds`;
    remainingTime--;

    if (remainingTime < 0) {
      clearInterval(countdownInterval);
      timerDisplay.textContent = "Time's up!";
      alert("Time's up!");
    }
  }, 1000);
});

// Task 2: Delayed Notification
const startNotificationButton = document.getElementById("startNotificationButton");
startNotificationButton.addEventListener("click", () => {
  setTimeout(() => {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = "This is your delayed notification!";
    document.getElementById("notifications").appendChild(notification);
  }, 5000); // 5-second delay
});

// Task 3: Repeated Notifications
let repeatNotificationInterval;
const startRepeatNotificationButton = document.getElementById("startRepeatNotificationButton");
const stopRepeatNotificationButton = document.getElementById("stopRepeatNotificationButton");

startRepeatNotificationButton.addEventListener("click", () => {
  if (repeatNotificationInterval) {
    alert("Repeated notifications are already running.");
    return;
  }

  repeatNotificationInterval = setInterval(() => {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = "This is a repeated notification!";
    document.getElementById("notifications").appendChild(notification);
  }, 3000); // Every 3 seconds
});

stopRepeatNotificationButton.addEventListener("click", () => {
  clearInterval(repeatNotificationInterval);
  repeatNotificationInterval = null;
  alert("Repeated notifications stopped.");
});
