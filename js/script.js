


// Global Variables 

athlete = {
    bulking: 100,
    preWorkout: 100,
    getFit : 100,

};


let $moreCalorie = $('#moreCalorie')
let $energyLvl = $('#energyLvl')
let $workoutSession = $('#workoutSession')

// Decresing Value Bars 

function CalorieLvl (bars, speed){
builkingIntervalId =  setInterval(function(){
    athlete.bulking--;
    bars.css('width',athlete.bulking +"%");
    if (athlete.bulking <= 0){
        clearInterval(builkingIntervalId)
    }
},speed);
}
CalorieLvl($moreCalorie, 150);


function EnergyLvl(bars, speed){
    preWorkoutIntervalId = setInterval(function(){
        athlete.preWorkout--;
        bars.css('width', athlete.preWorkout + "%");
        if (athlete.preWorkout <= 0){
            clearInterval(preWorkoutIntervalId)
        }
    },speed)
}

EnergyLvl($energyLvl,100)

function WorkoutLvl (bars,speed){
    getFitIntervalId = setInterval(function(){
        athlete.getFit--;
        bars.css('width', athlete.getFit + "%");
        if (athlete.getFit<= 0){
            clearInterval(getFitIntervalId)
        }
    }, speed)
}


WorkoutLvl($workoutSession, 80)



// Clicked Buttons

$("#bulking").on("click", function (evt) {
  console.log("Clicked Bulking Btn");
});

$("#pre-workout").on("click", function (evt) {
  console.log("Clicked Pre-workout Btn");
});

$("#get-fit").on("click", function (evt) {
  console.log("Clicked Get-fit Btn");
});

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
