// ============== Global Variables ============== //

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
let $advanceBarTxt = $("#advanceTxt");
let $gamePage = $("#game-page");
let $lostPage = $("#lost-page");
let $winPage = $("#congrat-page");
let $startPage = $("#start-Page");
let $userInput = $(".name");
let $userName = $("#userName");
let $consentBox = $("#consent");
let $aysBox = $("#ays");
let avatarImg = $("#avatarImg");

// ============== Hide All page ============== //
$gamePage.css("display", "none");
$lostPage.css("display", "none");
$winPage.css("display", "none");
// $startPage.css("display", "none");

// ============== Game ON ============== //
function startingGame() {
  console.log("start game btn hit");
  $userName.html($userInput.val() + " Trainnie");
  $startPage.hide();
  $gamePage.fadeIn();
  CalorieLvl($moreCalorie, 250);
  EnergyLvl($energyLvl, 150);
  WorkoutLvl($workoutSession, 80);
  AdvanceLvl($advanceBar, $advanceBarTxt, 450);

  avatartIntervalID = setInterval(function(){
    if(athlete.advanceBar>= 50){
      $("#avatarImg").atrr('src',"https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/10/1024/512/cinder-the-cat.jpg?ve=1&tl=1")
    }
  })

}

// ============== Losing Game ============== //

function lostGame() {
  if (
    athlete.bulking === 0 ||
    athlete.preWorkout === 0 ||
    athlete.getFit === 0
  ) {
    $gamePage.hide();
    $lostPage.fadeIn();
    clearValue();
  }
}

// ============== Winning game ============== //
function winGame() {
  $gamePage.hide();
  $winPage.fadeIn();
  $lostPage.hide();
  clearValue();
}

// ============== Stop Counting  ============== //
function clearValue() {
  clearInterval(bulkingIntervalId);
  clearInterval(preWorkoutIntervalId);
  clearInterval(getFitIntervalId);
  clearInterval(advanceBarIntervalId);
}

// ============== Decresing Value Bars ============== //

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
// CalorieLvl($moreCalorie, 150);

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
// EnergyLvl($energyLvl, 100);

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
// WorkoutLvl($workoutSession, 80);

function AdvanceLvl(bars, barTxt, speed) {
  advanceBarIntervalId = setInterval(function () {
    athlete.advanceBar++;
    bars.css("width", athlete.advanceBar + "%");
    if (athlete.advanceBar >= 100) {
      clearInterval(advanceBarIntervalId);
    } else if (athlete.advanceBar === 50) {
      barTxt.html("ADVANCE");
      console.log("passed 50");
    } else if (athlete.advanceBar === 75) {
      barTxt.html("WORLD CLASS");
      console.log("pass 75");
    }
    if (athlete.advanceBar === 100) {
      winGame();
    }
  }, speed);
}

// AdvanceLvl($advanceBar, 500);

// ============== Adding Value on Btn Click ============== //

function AddMoreCalLvlValue(add, amount) {
  athlete.bulking = athlete.bulking + amount;
  add.css("width", athlete.bulking + "%");
  if (athlete.bulking >= 100) {
    athlete.bulking = 100;
  }
}

function AddEnergyLvlValue(add, amount) {
  athlete.preWorkout = athlete.preWorkout + amount;
  add.css("width", athlete.preWorkout + "%");
  if (athlete.preWorkout >= 100) {
    athlete.preWorkout = 100;
  }
}

function AddWorkoutLvlValue(add, amount) {
  athlete.getFit = athlete.getFit + amount;
  add.css("width", athlete.getFit + "%");
  if (athlete.getFit >= 100) {
    athlete.getFit = 100;
  }
}

// ============== Clicked Buttons ============== //

$("#bulking").on("click", function () {
  console.log("Clicked Bulking Btn");
  AddMoreCalLvlValue($moreCalorie, 50);
});

$("#pre-workout").on("click", function () {
  console.log("Clicked Pre-workout Btn");
  AddEnergyLvlValue($energyLvl, 50);
});

$("#get-fit").on("click", function () {
  console.log("Clicked Get-fit Btn");
  AddWorkoutLvlValue($workoutSession, 50);
});

$("#startBtn").on("click", function (e) {
  e.preventDefault();
  if ($aysBox.is(":checked") && $consentBox.is(":checked")) {
    console.log("Its going Down");
    startingGame();
  } else {
    alert("CHECK ALL BOXES");
  }
});

$("#restartBtn").on("click", function (e) {
  e.preventDefault();
  $lostPage.hide();
  startingGame();
});
