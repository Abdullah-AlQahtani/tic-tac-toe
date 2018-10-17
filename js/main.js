
var player1 = prompt("Enter Player 1 ( X ) name :");
var player2 = prompt("Enter Player 2 ( O ) name :");
var score = 0;
var p1win = 0;
var p2win = 0;
var play = 'O';
var xArr = [];
var oArr = [];
// game timer
var second = 0, minute = 0; hour = 0;
var timer = document.querySelector(".timer h3");
// var totaltTimer = $(timer).text();
var interval;
// move counter
var player1Moves = 0;
var player2Moves = 0;

// rating stars
const stars = document.querySelectorAll(".fa-star");

// stars list
var starsList = document.querySelectorAll(".stars li");


$(document).ready(function () {
    startTimer();
    //player turn
    $('.playerTurn h3').text("Player turn: " + player1 + " - ");
    $('.playerTurn img').attr("src", "../images/abdullah1.png");
    //player 1 score
    $('.player1').text(" - " + player1 + " Score: " + p2win + "    | ");
    $('.player1Face img').attr("src", "../images/abdullah1.png");
    //player 2 score
    $('.player2').text(" - " + player2 + " Score: " + p2win + "    | ");
    $('.player2Face img').attr("src", "../images/abdullah2.png");



    $('.box').on('click', function () {

        if ($(this).find('img').attr('src') !== "") {
            return;
        }

        $('.player2').text(" - " + player2 + " Score: " + p2win + " | ");
        var id = parseInt($(this).attr('id').substring(3));
        if (play === 'O') {
            $(this).find('img').attr('src', "../images/abdullah1.png");
            play = 'X';
            xArr.push(id);
            console.log(xArr);
            $('.playerTurn h3').text("Player turn: " + player2 + " - ");
            $('.playerTurn img').attr("src", "../images/abdullah2.png");
            player1MoveCounter();

        } else {

            $(this).find('img').attr('src', "../images/abdullah2.png");
            play = 'O';
            oArr.push(id);
            console.log(oArr);
            $('.playerTurn h3').text("Player turn: " + player1 + " - ");
            $('.playerTurn img').attr("src", "../images/abdullah1.png");
            player2MoveCounter();

        }
        function cond(num1, num2, num3, arr) {
            if ((arr.includes(num1) && arr.includes(num2) && arr.includes(num3))) {
                return true;
            }
            else {
                return false;
            }
        }
        if ((cond(1, 2, 3, xArr))
            || (cond(4, 5, 6, xArr))
            || (cond(7, 8, 9, xArr))
            || (cond(1, 4, 7, xArr))
            || (cond(2, 5, 8, xArr))
            || (cond(3, 6, 9, xArr))
            || (cond(3, 5, 7, xArr))
            || (cond(1, 5, 9, xArr))) {
            setTimeout(function () {
                swal({
                    title: player1 + " Win !!",
                    text: 'You win in ' + $(timer).text(),
                    imageUrl: '../images/abdullah1.png',
                    imageHeight: 100,
                    imageWidth: 100,
                    imageAlt: player1 + ' image',
                });
                restart();

            }, 300);
            p1win++;
            $('.player1').text(" - " + player1 + " Score: " + p1win + " | ");




        } else if ((cond(1, 2, 3, oArr))
            || (cond(4, 5, 6, oArr))
            || (cond(7, 8, 9, oArr))
            || (cond(1, 4, 7, oArr))
            || (cond(2, 5, 8, oArr))
            || (cond(3, 6, 9, oArr))
            || (cond(3, 5, 7, oArr))
            || (cond(1, 5, 9, oArr))) {
            setTimeout(function () {
                swal({
                    title: player2 + " Win !!",
                    text: 'You win in ' + $(timer).text(),
                    imageUrl: '../images/abdullah2.png',
                    imageHeight: 100,
                    imageWidth: 100,
                    imageAlt: player2 + ' image',
                    icon: "success",

                });
                restart();

            }, 300);
            p2win++;
            $('.player2').text(" - " + player2 + " Score: " + p2win + " | ");

        }

        // debugger;

        function restart() {
            for (var i of $('.box img')) {
                $(i).attr('src', '');
            }
            xArr = [];
            oArr = [];
            //reset moves
            player1Moves = 0;
            player2Moves = 0;
            $(".player1Moves h3").text(player1Moves + " Moves");
            $(".player2Moves h3").text(player2Moves + " Moves");
            //reset timer
            second = 0;
            minute = 0;
            hour = 0;
            $(".timer h3").text("0 minutes 0 seconds ");
            clearInterval(interval);
            startTimer();
        }

        var DrawCounter = 0;
        for (var i of $('.box img')) {
            if ($(i).attr('src') !== '') {
                DrawCounter++;
            }
        }

        if (DrawCounter === 9) {
            setTimeout(function () {
                swal({
                    title: "it's Draw !!",
                    text: 'unfourntionly, no one win next time use smart strategy',
                    imageUrl: 'https://i.imgur.com/NiHRLTo.png',
                    imageHeight: 100,
                    imageWidth: 100,
                    icon: "error",
                    backdrop: `
                    #FFFFFF
                    url("https://i.imgur.com/NiHRLTo.png")
                    repeat
                  `

                });
                DrawCounter = 0;
                restart();

            }, 300);
        }
        for (var i = 0; i < stars.length; i++) {
            stars[i].style.color = "#FFD700";
            stars[i].style.visibility = "visible";
        }

    })

});



function startTimer() {
    interval = setInterval(function () {
        $(".timer h3").text(minute + " minutes " + second + " seconds");
        second++;
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
        }
    }, 1000);
}

function player1MoveCounter() {
    player1Moves++;
    $(".player1Moves h3").text(player1Moves + " Moves");
    // setting rates based on moves
    // if (player1Moves <= 3){
    //     for( i= 0; i <= 3; i++){
    //         if(i > 1){
    //             stars[i].style.visibility = "collapse";
    //         }
    //     }
    // }
    // else if (player1Moves > 5){
    //     for( i= 0; i < 3; i++){
    //         if(i > 0){
    //             stars[i].style.visibility = "collapse";
    //         }
    //     }
    // }
}

function player2MoveCounter() {
    player2Moves++;
    $(".player2Moves h3").text(player2Moves + " Moves");
    // setting rates based on moves
    // if (player2Moves >= 3){
    //     for( i= 0; i <= 3; i++){
    //         if(i > 1){
    //             stars[i].style.visibility = "collapse";
    //         }
    //     }
    // }
    // else if (player2Moves > 13){
    //     for( i= 0; i < 3; i++){
    //         if(i > 0){
    //             stars[i].style.visibility = "collapse";
    //         }
    //     }
    // }
}
