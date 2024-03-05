function init() {

    const takeOffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landButton = document.getElementById("landing");

    // Write your JavaScript code here.

    //2. When the “Take off” button is clicked, the following should happen:
    takeOffButton.addEventListener('click', function () {
        //a. A window confirm should let the user know “Confirm that the shuttle is ready for takeoff.” If the shuttle is ready for liftoff, then add parts b-d.
        window.confirm("Confirm that the shuttle is ready for takeoff.");
        //b. change flight status to "Shuttle in flight."
        flightStatus.innerHTML = "Shuttle in flight.";
        //c. The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
        shuttleBackground.style.backgroundColor = "blue";
        //d. The shuttle height should increase by 10,000 miles.
        spaceShuttleHeight.innerHTML = 10000;
    });


    //3. When the “Land” button is clicked, the following should happen:
    landButton.addEventListener('click', function () {
        //a. A window alert should let the user know “The shuttle is landing. Landing gear engaged.”
        window.alert("The shuttle is landing. Landing gear engaged");
        //b. The flight status should change to “The shuttle has landed.”
        flightStatus.innerHTML = "The shuttle has landed.";
        //c. The background color of the shuttle flight screen should change from blue to green.
        shuttleBackground.style.backgroundColor = "green";
        //d. The shuttle height should go down to 0.
        spaceShuttleHeight.innerHTML = 0;
    });


}


// Remember to pay attention to page loading!
window.addEventListener("load", init);