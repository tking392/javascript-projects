function init() {

    const takeOffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const missionAbortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const rocket = document.getElementById("rocket");
    //setting the rocket img position
    rocket.style.position = "relative";  
    rocket.style.left = "0px";  
    rocket.style.top = "0px";  
    rocket.style.right = "0px";  
    rocket.style.down = "0px"
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

    //4. When the “Abort Mission” button is clicked, the following should happen:
    missionAbortButton.addEventListener('click', function () {
        //a. A window confirm should let the user know “Confirm that you want to abort the mission.” If the user wants to abort the mission, then add parts b-d.
        window.confirm("Confirm that you want to abort the mission.");
        //b. The flight status should change to “Mission aborted.”
        flightStatus.innerHTML = "Mission aborted.";
        //c. The background color of the shuttle flight screen should change from blue to green.
        shuttleBackground.style.backgroundColor = "green";
        //d. The shuttle height should go to 0.
        spaceShuttleHeight.innerHTML = 0;
    });

    //5. When the “Up”, “Down”, “Right”, and “Left” buttons are clicked, the following should happen:
    upButton.addEventListener('click', function () {
        //a. The rocket image should move 10 px in the direction of the button that was clicked.
        rocket.style.top = parseInt(rocket.style.top) - 10 + 'px';
        //b. If the “Up” or “Down” buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000; 
    });    

    downButton.addEventListener('click', function () {
        //a. The rocket image should move 10 px in the direction of the button that was clicked.
        rocket.style.top = parseInt(rocket.style.top) + 10 + 'px';
        //b. If the “Up” or “Down” buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000; 
    }); 
    
    leftButton.addEventListener('click', function () {
        //a. The rocket image should move 10 px in the direction of the button that was clicked.
        rocket.style.left = parseInt(rocket.style.left) - 10 + 'px';
        
    });    

    rightButton.addEventListener('click', function () {
        //a. The rocket image should move 10 px in the direction of the button that was clicked.
        rocket.style.left = parseInt(rocket.style.left) + 10 + 'px';
        
    });    
}

// Remember to pay attention to page loading!
window.addEventListener("load", init);