let home = document.querySelector('.score-home span');
let guests = document.querySelector('.score-guests span');
let winnerMessage = document.querySelector('.resetResult p');
;

let scoreHome = Number(home.innerHTML);
let scoreGuests = Number(guests.innerHTML);

console.log(`The score of home is ${scoreHome}`);
console.log(`The score of guests is ${scoreGuests}`);


function addOneHome() {
    scoreHome+=1;
    console.log(`The score of home is ${scoreHome}`);
    updateScore();
}

function addOneGuests() {
    scoreGuests+=1;
    console.log(`The score of guests is ${scoreGuests}`);
    updateScore();
}

function addTwoHome() {
    scoreHome+=2;
    console.log(`The score of home is ${scoreHome}`);
    updateScore();
}

function addTwoGuests() {
    scoreGuests+=2;
    console.log(`The score of guests is ${scoreGuests}`);
    updateScore();
}

function addThreeHome() {
    scoreHome+=3;
    console.log(`The score of home is ${scoreHome}`);
    updateScore();
}

function addThreeGuests() {
    scoreGuests+=3;
    console.log(`The score of guests is ${scoreGuests}`);
    updateScore();
}

function winnerGame() {
    if (scoreHome > scoreGuests) {
        winnerMessage.innerHTML = 'The winner is <strong>HOME</strong> with <strong>'+  scoreHome + "</strong> points!";
        home.style.fontWeight = "700";
        home.style.color = "red";
    } else if (scoreGuests > scoreHome) {
        winnerMessage.innerHTML = 'The winner is <strong>GUESTS</strong> with <strong>'+  scoreGuests + "</strong> points!";
        guests.style.fontWeight = "700";
        guests.style.color = "red";
    } else {
        winnerMessage.innerHTML = 'We have no winner! The <strong>HOME</strong> team has <strong>'+  scoreHome + "</strong> points and the <strong>GUESTS</strong> team has <strong>" + scoreGuests + "</strong> points!";
        guests.style.color = "red";
        home.style.color = "red";
    }
}

function resetGame() {
    scoreHome=0;
    scoreGuests=0;
    guests.style.color = "#f94f6d";
    home.style.color = "#f94f6d";
    winnerMessage.textContent = `The game is started!`;
    updateScore();
}

function updateScore() {
    home.textContent = scoreHome;
    guests.textContent = scoreGuests;
}