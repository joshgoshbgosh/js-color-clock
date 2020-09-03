
//running clock//

//setInterval(setTime, 1000);


(function setTime() {

  var time = new Date();
  var hrs;
  var min;
  var sec;

  //if (hrs > 12) {
  //  hrs = hrs - 12;
  //}

  //if (hrs == 0) {
  //  hrs = 12;
  //}
  //if (hrs < 10) {
  //  hrs = '0' + hrs;
  //}
  //if (min < 10) {
  //  min = '0' + min;
  //}
  //if (sec < 10) {
  //  sec = '0' + sec;
  //}

  document.querySelector(".clock-display").innerHTML = hrs + ':' + min + ':' + sec;
  document.querySelector(".clock").style.background=`#${hrs}${min}${sec}`;

//console.loging 1 minute//
console.log(sec / 60);


//time bar//

//hexidecimal color//

//var doc = document.getElementById("background");
//var color = ["black", "blue", "brown", "green"];
//var i = 0;
//function change() {
//  doc.style.backgroundColor = color[i];
//  i++;

//  if(i > color.length - 1) {
//    i = 0;
//  }
//}
var colorClock = document.querySelector(".clock");
var clockDisplay=document.querySelector(".clock-display");
var isHovering=false;
clockDisplay.addEventListener("mouseover", function() {
            isHovering = true;
        });
        clockDisplay.addEventListener("mouseout" , function() {
            isHovering = false;
        });
setInterval(function() {
            currentTime = new Date()
            if(isHovering) {
                hrs = ("0" + currentTime.getHours().toString(16)).slice(-2);
                min = ("0" + currentTime.getMinutes().toString(16)).slice(-2);
                sec = ("0" + currentTime.getSeconds().toString(16)).slice(-2);
            } else {
                hrs = ("0" + currentTime.getHours()).slice(-2);
                min = ("0" + currentTime.getMinutes()).slice(-2);
                sec = ("0" + currentTime.getSeconds()).slice(-2);
            }
            const $progressBar = document.querySelector(".clock-progress-bar");
            const width = `${sec / 60 * 14}rem`;
            $progressBar.style.width = width;

            clockDisplay.textContent = hrs + ":" + min + ":" + sec;
            colorClock.style.backgroundColor = "#" + hrs.toString(16) + min.toString(16) + sec.toString(16);
        }, 1000);
})();
