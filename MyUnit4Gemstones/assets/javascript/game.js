$(document).ready(function () {

    // Defines global variables
    var wins = 0;
    var losses = 0;
    var score = 0;
    var goal = randomGen(60, 19);
    var first = randomGen(12, 1);
    var second = randomGen(12, 1);
    var third = randomGen(12, 1);
    var fourth = randomGen(12, 1);

    // Ceates a function that generates random numbers
    function randomGen(x, y) {
        return Math.floor((Math.random() * x) + y);
    };
    
    // Funtion that resets certain variables to restart the game, as well as appends an updated scoreboard
    function reset() {
        goal = randomGen(60, 19);
        first = randomGen(12, 1);
        second = randomGen(12, 1);
        third = randomGen(12, 1);
        fourth = randomGen(12, 1);
        $("#score").html(score);
        $("#goal").html(goal);
        $("#wins").html(wins);
        $("#losses").html(losses);
    };

    // 
    $("#first").on("click", function () {
        score = score + first;
        $("#score").html(score);
        check();
    });

    $("#second").on("click", function () {
        score = score + second;
        $("#score").html(score);
        check();
    });

    $("#third").on("click", function () {
        score = score + third;    
        $("#score").html(score);
        check();
    });

    $("#fourth").on("click", function () {
        score = score + fourth;
        $("#score").html(score);
        check();
    });

    function check() {
        if (score === goal) {
            wins++;
            score = 0;
            reset();
        }
        if (score > goal) {
            losses++;
            score = 0;
            reset();
        }
    };

    reset();























})