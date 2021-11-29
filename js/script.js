









//** Bulking Bar  */

function bulking() {
  let bulkEle = document.getElementById("moreCalorie");
  let width = 100;
  let time = 1;
  let timeId = setInterval(frame, 300);
  function frame() {
    if (width >= 0) {
      clearInterval(timeId);
    } else {
      width = width - time;
      bulkEle.style.width = width + "%";
    }
  }
}

bulking();

//** Progression Bar */

i = 0;
function advance() {
  if (i === 0) {
    i = 1;
    let advanceEle = document.getElementById("advance-bar");
    let width = 1;
    let time = setInterval(frame, 200);
    function frame() {
      if (width >= 100) {
        clearInterval(time);
        i = 0;
      } else {
        width++;
        advanceEle.style.width = width + "%";
      }
    }
  }
}

advance();
