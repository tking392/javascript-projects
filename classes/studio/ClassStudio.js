//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
        this.addScore = function (newScore) {
            this.scores.push(newScore);
        }
    }

    average() {
        let total = 0;
        for (let i = 0; i < this.scores.length; i++) {
            total += this.scores[i];
        }
        let average = total / this.scores.length;
        return  Math.round(average * 10) / 10;
       
    }

    status() {
        let status = "";
        if (this.average() < 70) {
            status = "Rejected";
        } else if (this.average() >= 90 ) {
            status = "Accepted";
        } else if (this.average() >= 80) {
            status = "Reserve";
        } else {
            status = "Probationary";
        }

        return `${this.name} earned an average test score of ${this.average()}% and has a status of ${status}.`;
    }

}


let candidate1 = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let candidate2 = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let candidate3 = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

// Tests to verify the correct results in Part 1
// console.log(candidate1);
// console.log(candidate2);
// console.log(candidate3);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

// Tests to verify the correct results in Part 2
// candidate1.addScore(83)
// console.log(candidate1.scores);

//Tests to verify the correct results in Part 3 - Calculating the Test Average
// console.log(candidate2.average());
// console.log(candidate2.scores.length);

//Tests to verify the correct results in Part 3 - Determining Candidate Status
// console.log(candidate1.status());
// console.log(candidate2.status());
// console.log(candidate3.status());

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

// It will take 2 more tests with a perfect score to reach a reserve status for Glad Gator


// while loop will keep adding a test with a perfect score until the candidate's average meets the conditions for the Reserve status
while (candidate3.average() < 80) {
    candidate3.addScore(100)
}

console.log(candidate3.status());