function init() {

    const takeOffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");

    
// Write your JavaScript code here.
//A window confirm should let the user know “Confirm that the shuttle is ready for takeoff.” If the shuttle is ready for liftoff, then add parts b-d.
    takeOffButton.addEventListener('click', function () {
        window.confirm("Confirm that the shuttle is ready for takeoff.");
        //b. change flight status to "Shuttle in flight."
        flightStatus.innerHTML = "Shuttle in flight.";
        //c. The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
        shuttleBackground.setAttribute();
    });


}


// Remember to pay attention to page loading!
window.addEventListener("load", init);