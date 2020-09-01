
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
};

//timer bar//

console.log(1.0)
