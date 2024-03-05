//TODO: Add Your Code Below
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (res) {
        res.json().then(function (jsonRes) {
            for (let i = 0; i < jsonRes.length; i++) {
                const div = document.getElementById('container');
                div.innerHTML += ` 
                <div class = "astronaut">
                    <div clas = "bio">
                        <h3>${jsonRes[i].firstName} ${jsonRes[i].lastName}</h3>
                        <ul>
                        <li>Hours in Space: ${jsonRes[i].hoursInSpace}</li>
                        <li>Active: ${jsonRes[i].active}</li>
                        <li>Skills: ${jsonRes[i].skills}</li>
                        </ul>  
                    </div>
                    <img class = "avatar" src="${jsonRes[i].picture}"></img>
                </div>
             
            `
            }
        });
    });
}); 