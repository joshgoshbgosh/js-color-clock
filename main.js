
//running clock//

setInterval(setTime, 1000);


function setTime() {
  var time = new Date();
  var hrs = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();

  if (hrs > 12) {
    hrs = hrs - 12;
  }

  if (hrs == 0) {
    hrs = 12;
  }
  if (hrs < 10) {
    hrs = '0' + hrs;
  }
  if (min < 10) {
    min = '0' + min;
  }
  if (sec < 10) {
    sec = '0' + sec;
  }

  document.querySelector(".clock-display").innerHTML = hrs + ':' + min + ':' + sec;


//console.loging 1 minute//
console.log(sec / 60);


//time bar//
const $progressBar =document.querySelector(".clock-progress-bar");
const width = `${sec / 60 * 14}rem`;
$progressBar.style.width = width;
}
