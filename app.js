let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board")
const result_div = document.querySelector(".result > p")
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissors_div = document.getElementById("scissors")

function getComputerChoice(){
    const choices = ['r','p','s'];
    return choices[Math.floor(Math.random()*3)];
}

function win(){
    userScore++;
    userScore_span.innerHTML = userScore;
}

function lose() {
    computerScore++;
    computerScore_span.innerHTML = computerScore;

}
function draw() {

}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rr":
            draw();
            result_div.innerHTML = "Pierre contre Pierre. Égalité"
            break;
        case "ss":
            draw();
            result_div.innerHTML = "Ciseaux contre Ciseaux. Égalité"
            break;
        case "pp":
            draw();
            result_div.innerHTML = "Papier contre Papier. Égalité"
            break;

        case "rp":
            lose();
            result_div.innerHTML = "Le papier couvre la pierre. Vous perdez!"
            break;
        case "sr":
            lose();
            result_div.innerHTML = "La pierre casse les ciseaux. Vous perdez!"
            break;
        case "ps":
            lose();
            result_div.innerHTML = "Les ciseaux coupent le papier. Vous perdez!"
            break;
            
        case "rs":
            win();
            result_div.innerHTML = "La pierre casse les ciseaux. Vous gagnez!"
            break;
        case "pr":
            win();
            result_div.innerHTML = "Le papier couvre la pierre. Vous gagnez!"
            break;
        case "sp":
            win();
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
