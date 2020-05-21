let resetnum = document.querySelector("#num-resets");
let resetnumbutton = document.querySelector("#reset-button");
let teamoneshots = document.querySelector("#teamone-numshots");
let teamonegoals = document.querySelector("#teamone-numgoals");
let teamoneshotsbutton = document.querySelector("#teamone-shoot-button");
let teamtwoshots = document.querySelector("#teamtwo-numshots");
let teamtwogoals = document.querySelector("#teamtwo-numgoals");
let teamtwoshotsbutton = document.querySelector("#teamtwo-shoot-button");

teamoneshotsbutton.addEventListener("click", function() {

    console.log("+ button clicked");

    let rannum1 = Math.floor(Math.random() * 2);

    if (rannum1 > 0) {

        let newgoalValue = Number(teamonegoals.innerHTML) + 1;

        teamonegoals.innerHTML = newgoalValue;

    }

    let newCounterValue = Number(teamoneshots.innerHTML) + 1;

    teamoneshots.innerHTML = newCounterValue;

  })

teamtwoshotsbutton.addEventListener("click", function() {

    console.log("+ button clicked");

    let rannum2 = Math.floor(Math.random() * 2);

    if (rannum2 > 0) {

        let newgoalValue = Number(teamtwogoals.innerHTML) + 1;

        teamtwogoals.innerHTML = newgoalValue;

    }

    let newCounterValue = Number(teamtwoshots.innerHTML) + 1;

    teamtwoshots.innerHTML = newCounterValue;

  })

resetnumbutton.addEventListener("click", function() {

    console.log("+ button clicked");

    let zeroout = 0;

    teamtwoshots.innerHTML = zeroout;
    teamoneshots.innerHTML = zeroout;
    teamonegoals.innerHTML = zeroout;
    teamtwogoals.innerHTML = zeroout;

    let newCounterValue = Number(resetnum.innerHTML) + 1;

    resetnum.innerHTML = newCounterValue;

  })