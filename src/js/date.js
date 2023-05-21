const countingTime = () => {
  const dateHTML = document.querySelectorAll('.time__number');
  const targetDate = new Date('2023-05-31');
  const currentDate = new Date();
  const differenceDate = targetDate - currentDate;
  const days = Math.floor(differenceDate / (1000 * 60 * 60 * 24));
  const hours = Math.floor((differenceDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((differenceDate % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((differenceDate % (1000 * 60)) / 1000);
  for (let i = 0; i < dateHTML.length; i++) {
    dateHTML[0].innerHTML = days;
    dateHTML[1].innerHTML = hours;
    dateHTML[2].innerHTML = minutes;
    dateHTML[3].innerHTML = seconds;
  }
}
setInterval(countingTime, 1000)