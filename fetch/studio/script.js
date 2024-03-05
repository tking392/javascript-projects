//TODO: Add Your Code Below
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (res) {
        res.json().then(function (jsonRes) {
            for (let i = 0; i < jsonRes.length; i++) {
                const div = document.getElementById('container');
                div.innerHTML += ` 
            <ul>    
                <li>ID: ${jsonRes[i].id}</li>
                <li>Active: ${jsonRes[i].active}</li>
                <li>Name: ${jsonRes[i].lastName}, ${jsonRes[i].firstName}</li>
                <li>Skills: [${jsonRes[i].skills}]</li>
                <li>Hours in Space: ${jsonRes[i].hoursInSpace} hrs</li>
                <img src='${jsonRes[i].picture}'></img>
            </ul>    
            `
            }
        });
    });
}); 