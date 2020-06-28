let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board")
const result_div = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

const menuBtn = document.querySelector('.menu-btn');
const invisibleBtn = document.querySelector('.btn-invisible');
let menuOpen = false;
invisibleBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

function getComputerChoice(){
    const choices = ['r','p','s'];
    return choices[Math.floor(Math.random()*3)];
}

function win(userChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 400);
}

function lose(userChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function () { document.getElementById(userChoice).classList.remove('red-glow') }, 400);

}
function draw(userChoice) {
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function () { document.getElementById(userChoice).classList.remove('gray-glow') }, 400);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rr":
            draw(userChoice);
            result_div.innerHTML = "Pierre contre Pierre. Égalité"
            break;
        case "ss":
            draw(userChoice);
            result_div.innerHTML = "Ciseaux contre Ciseaux. Égalité"
            break;
        case "pp":
            draw(userChoice);
            result_div.innerHTML = "Papier contre Papier. Égalité"
            break;

        case "rp":
            lose(userChoice);
            result_div.innerHTML = "Le papier couvre la pierre. Vous perdez!"
            break;
        case "sr":
            lose(userChoice);
            result_div.innerHTML = "La pierre casse les ciseaux. Vous perdez!"
            break;
        case "ps":
            lose(userChoice);
            result_div.innerHTML = "Les ciseaux coupent le papier. Vous perdez!"
            break;
            
        case "rs":
            win(userChoice);
            result_div.innerHTML = "La pierre casse les ciseaux. Vous gagnez!"
            break;
        case "pr":
            win(userChoice);
            result_div.innerHTML = "Le papier couvre la pierre. Vous gagnez!"
            break;
        case "sp":
            win(userChoice);
            result_div.innerHTML = "Les ciseaux coupent le papier. Vous gagnez!"
            break;
    }
}


function main(){
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })

}

main();