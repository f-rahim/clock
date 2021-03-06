/**
 *
 * Make a simple clock for Abdur Rahim.
 *
 * Ler's think how many steps we need to complete the clock
 *
 * => Let's write all steps as a comment
 */

// get all the referance.
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const secounds = document.getElementById("secounds");

// Update secound
const updateSecound = () => {
  let getSecound = new Date().getSeconds();
  getSecound = getSecound <= 9 ? "0" + getSecound : getSecound;
  secounds.innerHTML = getSecound;
};

// const update minute
const updateMinute = () => {
  let getMinute = new Date().getMinutes();
  getMinute = getMinute <= 9 ? "0" + getMinute : getMinute;
  minutes.innerHTML = getMinute;
};

// const update hour
const updateHour = () => {
  let getHour = new Date().getHours();
  if (getHour > 12) {
    getHour -= 12;
  }
  if (getHour <= 9) {
    getHour = "0" + getHour;
  }
  hours.innerHTML = getHour;
};

// update hours & minute as first time
updateMinute();
updateHour();
updateSecound();

// update all method in every secound
setInterval(() => {
  updateMinute();
  updateHour();
  updateSecound();
}, 1000);
