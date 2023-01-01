// Start Counter
stats = document.querySelector("#stats");
statBox = document.querySelectorAll(".stats .count");
// start our skills animation
ourSkills = document.querySelector(".our-skills");
skill = document.querySelectorAll(".rate .rating span");
skillRate = document.querySelectorAll(".rate .lang .skill-rate");

let started = false;

window.onscroll = function () {
  if (window.scrollY >= stats.offsetTop) {
    if (!started) {
      statBox.forEach((stat) => {
        countdown(stat);
      });
    }
    started = true;
  }

  if (window.scrollY >= ourSkills.offsetTop - 400) {
    skill.forEach((sk) => {
      sk.style.width = sk.dataset.width;
    });
  }
};

function countdown(element) {
  let goal = element.dataset.goal;

  let interval = setInterval(() => {
    element.textContent++;

    if (element.textContent == goal) {
      clearInterval(interval);
    }
  }, 1000 / goal);
}

// start latest events
//date targe and current
let targetDate = new Date("31 dec, 23 11:59:59").getTime();

setInterval(() => {
  let currentDate = new Date().getTime();
  let dateDifference = targetDate - currentDate;

  let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDifference % (1000 * 60)) / 1000);

  //setting the date in the html
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
}, 1000);
