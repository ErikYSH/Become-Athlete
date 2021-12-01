// ---- Global Variables ---- //

athlete = {
  bulking: 100,
  preWorkout: 100,
  getFit: 100,
  advanceBar: 0,
};

let $moreCalorie = $("#moreCalorie");
let $energyLvl = $("#energyLvl");
let $workoutSession = $("#workoutSession");
let $advanceBar = $("#advance-bar");
let $gamePage = $("#game-page");
let $lostPage = $("#lost-page");

// ---- Losing Game ---- //

function lostGame() {
  if (
    athlete.bulking === 0 ||
    athlete.preWorkout === 0 ||
    athlete.getFit === 0
  ) {
    $gamePage.fadeOut();
    $lostPage.css("display", "block");
  }
}

// ---- Decresing Value Bars ---- //

function CalorieLvl(bars, speed) {
  bulkingIntervalId = setInterval(function () {
    athlete.bulking--;
    bars.css("width", athlete.bulking + "%");
    bars.html(athlete.bulking + "%");
    if (athlete.bulking <= 0) {
      clearInterval(bulkingIntervalId);
      lostGame();
    }
  }, speed);
}
CalorieLvl($moreCalorie, 150);

function EnergyLvl(bars, speed) {
  preWorkoutIntervalId = setInterval(function () {
    athlete.preWorkout--;
    bars.css("width", athlete.preWorkout + "%");
    bars.html(athlete.preWorkout + "%");
    if (athlete.preWorkout <= 0) {
      clearInterval(preWorkoutIntervalId);
      lostGame();
    }
  }, speed);
}
EnergyLvl($energyLvl, 100);

function WorkoutLvl(bars, speed) {
  getFitIntervalId = setInterval(function () {
    athlete.getFit--;
    bars.css("width", athlete.getFit + "%");
    bars.html(athlete.getFit + "%");
    if (athlete.getFit <= 0) {
      clearInterval(getFitIntervalId);
      lostGame();
    }
  }, speed);
}
WorkoutLvl($workoutSession, 80);

function AdvanceLvl(bars, speed) {
  advanceBarIntervalId = setInterval(function () {
    athlete.advanceBar++;
    bars.css("width", athlete.advanceBar + "%");
    if (athlete.advanceBar >= 100) {
      clearInterval(advanceBarIntervalId);
    } else if (athlete.advanceBar === 50) {
      bars.html("ADVANCE");
      console.log("passed 50");
    } else if (athlete.advanceBar === 75) {
      bars.html("WORLD CLASS");
      console.log("pass 75");
    }
  }, speed);
}

AdvanceLvl($advanceBar, 500);

// ---- Adding Value on Btn Click ---- //

function AddMoreCalLvlValue(add, amount) {
  athlete.bulking = athlete.bulking + amount;
  add.css("width", athlete.bulking);
  if (athlete.bulking >= 100) {
    athlete.bulking = 100;
  }
}

function AddEnergyLvlValue(add, amount) {
  athlete.preWorkout = athlete.preWorkout + amount;
  add.css("width", athlete.preWorkout);
  if (athlete.preWorkout >= 100) {
    athlete.preWorkout = 100;
  }
}

function AddWorkoutLvlValue(add, amount) {
  athlete.getFit = athlete.getFit + amount;
  add.css("width", athlete.getFit);
  if (athlete.getFit >= 100) {
    athlete.getFit = 100;
  }
}

// ---- Clicked Buttons ---- //

$("#bulking").on("click", function () {
  console.log("Clicked Bulking Btn");
  AddMoreCalLvlValue($moreCalorie, 5);
});

$("#pre-workout").on("click", function () {
  console.log("Clicked Pre-workout Btn");
  AddEnergyLvlValue($energyLvl, 10);
});

$("#get-fit").on("click", function () {
  console.log("Clicked Get-fit Btn");
  AddWorkoutLvlValue($workoutSession, 13);
});
