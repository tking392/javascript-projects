const gameResult = require ('../RPS.js');

describe ("whoWon", function() {

    test("should return 'TIE!' when players make the same choice and end the game in a draw.", function () {
        let output = gameResult.whoWon('paper', 'paper');
        expect(output).toBe("TIE!");
    });

    test("should return 'Player 2 wins!' when Player 1 plays paper and Player 2 plays scissors", function () {
        let output = gameResult.whoWon('paper', 'scissors');
        expect(output).toBe("Player 2 wins!");
    });

    test("should return 'Player 2 wins!' when Player 1 plays rock and Player 2 plays paper", function () {
        let output = gameResult.whoWon('rock', 'paper');
        expect(output).toBe("Player 2 wins!");
    });


});