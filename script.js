function updateClock() {
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const year = now.getFullYear();
    const dateString = `${month}/${day}/${year}`;
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const timeString = `${hours}:${minutes} ${ampm}`;
    dateElement.textContent = dateString;
    timeElement.textContent = timeString;
}

setInterval(updateClock, 60000);
updateClock();



const startBtn = document.querySelector(".start-btn");
const searchBtn = document.querySelector(".search-btn");
const startPopup = document.getElementById("startPopup");
const searchPopup = document.getElementById("searchPopup");

startBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  startPopup.classList.toggle("active");
  searchPopup.classList.remove("active");
});

searchBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  searchPopup.classList.toggle("active");
  startPopup.classList.remove("active");
});

document.addEventListener("click", function (event) {
  if (
    !startPopup.contains(event.target) &&
    !startBtn.contains(event.target) &&
    !searchPopup.contains(event.target) &&
    !searchBtn.contains(event.target)
  ) {
    startPopup.classList.remove("active");
    searchPopup.classList.remove("active");
  }
});
