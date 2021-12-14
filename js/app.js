const clock = document.querySelector("#clock");
const footer = document.querySelector(".footer");
const getClockTime = () => {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  var ap = "AM";
  if (hour > 11) {
    ap = "PM";
  }
  if (hour > 12) {
    hour = hour - 12;
  }
  if (hour == 0) {
    hour = 12;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  var timeString = hour + ":" + minute + ":" + second + " " + ap;
  return timeString;
}

setInterval(function () {
  clock.innerHTML = getClockTime();
}, 1000);


const toggleFullScreen = () => {
  if (!document.webkitIsFullScreen) {
    document.body.webkitRequestFullScreen();
  } else {
    if (document.exitFullscreen) {
      document.webkitCancelFullScreen();
    }
  }
}

const toggleFooter = () => {
  if (footer.style.display === "none") {
    footer.style.display = "block";
  } else {
    footer.style.display = "none";
  }
}

footer.addEventListener(
  "touchstart",
  function (e) {
    toggleFullScreen();
    toggleFooter();
  },
  false
);

documnent.documentElement.onfullscreenerror = function(event){
  alert("Fullscreen Denied", JSON.stringify(event, null, 4));
}
