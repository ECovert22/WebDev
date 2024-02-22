let moneyAmount = 1000;
let betAmount = 100;
window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');
    for (let i =0; i<tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {
            document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');

            SwitchPage(page_id);
        })
    }
}
let moneyText = document.querySelector(".moneyBar");

moneyText.textContent = "$" + moneyAmount.toString();
moneyText.addEventListener("click", function() {

    AddMoney(betAmount);
    moneyText.textContent = "$" + moneyAmount.toString();
});

let betText = document.querySelector(".betBar");

betText.textContent = "Bet: $" + betAmount.toString();
betText.addEventListener("click", function() {
    document.getElementById("myForm").style.display = "block";
});




let submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", function() {

    let betInput = document.getElementById("betInput");
    betAmount = betInput.value;
    betAmount = Number(betAmount);
    betText.textContent = "Bet: $" + betAmount.toString();
    document.getElementById("myForm").style.display = "none";
});
function SwitchPage(page_id) {
    const current_page = document.querySelector('.pages .page.is-active')
    current_page.classList.remove('is-active');

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`)
    next_page.classList.add('is-active');
}
function SubtractMoney(bet) {
    moneyAmount -= bet;
}
function AddMoney(bet) {
    moneyAmount += bet;
}
let startGameButton = document.getElementById("startGameButton");
startGameButton.addEventListener("click", function() {
    playGame();
    console.log("pressed");
});
function getCardIcon(s,n) {
    let suit = s;
    let number = n;
    // there might be a better way to do this but i don't think this is too bad
    if (suit === 1) {
        if (number === 1) {
            return "&#127137;";
        } else if (number === 2) {
            return "&#127138;";
        } else if (number === 3) {
            return "&#127139;";
        } else if (number === 4) {
            return "&#127140;";
        } else if (number === 5) {
            return "&#127141;";
        } else if (number === 6) {
            return "&#127142;";
        } else if (number === 7) {
            return "&#127143;";
        } else if (number === 8) {
            return "&#127144;";
        } else if (number === 9) {
            return "&#127145;";
        } else if (number === 10) {
            return "&#127146;";
        } else if (number === 11) {
            return "&#1271347;";
        } else if (number === 12) {
            return "&#127149;";
        } else if (number === 13) {
            return "&#127150;";
        }
    } else if (suit === 2 ) {
        if (number === 1) {
            return "&#127153;";
        } else if (number === 2) {
            return "&#127154;";
        } else if (number === 3) {
            return "&#127155;";
        } else if (number === 4) {
            return "&#127156;";
        } else if (number === 5) {
            return "&#127157;";
        } else if (number === 6) {
            return "&#127158;";
        } else if (number === 7) {
            return "&#127159;";
        } else if (number === 8) {
            return "&#127160;";
        } else if (number === 9) {
            return "&#127161;";
        } else if (number === 10) {
            return "&#127162;";
        } else if (number === 11) {
            return "&#127163;";
        } else if (number === 12) {
            return "&#127165;";
        } else if (number === 13) {
            return "&#127166;";
        }
    } else if (suit === 3) {
        if (number === 1) {
            return "&#127169;";
        } else if (number === 2) {
            return "&#127170;";
        } else if (number === 3) {
            return "&#127171;";
        } else if (number === 4) {
            return "&#127172;";
        } else if (number === 5) {
            return "&#127173;";
        } else if (number === 6) {
            return "&#127174;";
        } else if (number === 7) {
            return "&#127175;";
        } else if (number === 8) {
            return "&#127176;";
        } else if (number === 9) {
            return "&#127177;";
        } else if (number === 10) {
            return "&#127178;";
        } else if (number === 11) {
            return "&#127179;";
        } else if (number === 12) {
            return "&#127181;";
        } else if (number === 13) {
            return "&#127182;";
        }
    } else if (suit === 4) {
        if (number === 1) {
            return "&#127185;";
        } else if (number === 2) {
            return "&#127186;";
        } else if (number === 3) {
            return "&#127187;";
        } else if (number === 4) {
            return "&#127188;";
        } else if (number === 5) {
            return "&#127189;";
        } else if (number === 6) {
            return "&#127190;";
        } else if (number === 7) {
            return "&#127191;";
        } else if (number === 8) {
            return "&#127192;";
        } else if (number === 9) {
            return "&#127193;";
        } else if (number === 10) {
            return "&#127194;";
        } else if (number === 11) {
            return "&#127195;";
        } else if (number === 12) {
            return "&#127197;";
        } else if (number === 13) {
            return "&#127198;";
        }
    }
}
function Card(s, n) {
    let suit = s;
    let number = n;
    this.getNumber = function() {
        return number;
    };
    this.getSuit = function() {
        return suit;
    };
    this.getValue = function() {
        if (number > 10)
            return 10;
        else if (number === 1)
            return 11;
        else
            return number;
    };
}

var deal = function() {
    var suit = Math.floor(Math.random() * 4) + 1;
    var number = Math.floor(Math.random() * 13) + 1;
    var myCard = new Card(suit, number);
    return myCard;
};

function Hand() {
    var cards = [deal(), deal()];
    this.getHand = function() {
        return cards;
    };
    this.score = function() {
        var myScore = 0;
        for (var i = 0; i < cards.length; i++)
            myScore += cards[i].getValue();
        for (var a = 0; a < cards.length && myScore > 21; a++) {
            if (cards[a].getValue() === 11)
                myScore -= 10;
        }
        return myScore;
    };
    this.printHand = function() {
        var myHand = "";
        var numberArray = [];
        var suitArray = [];
        for (var i = 0; i < cards.length; i++) {
            switch(cards[i].getNumber()) {
                case 1:
                    numberArray.push("ace");
                    break;
                case 11:
                    numberArray.push("jack");
                    break;
                case 12:
                    numberArray.push("queen");
                    break;
                case 13:
                    numberArray.push("king");
                    break;
                default:
                    numberArray.push(cards[i].getNumber());
            }
            switch(cards[i].getSuit()) {
                case 1:
                    suitArray.push("spades");
                    break;
                case 2:
                    suitArray.push("hearts");
                    break;
                case 3:
                    suitArray.push("diamonds");
                    break;
                case 4:
                    suitArray.push("clubs");
                    break;
            }
            myHand += numberArray[i] +" of " +suitArray[i];
            if (i < cards.length - 1)
                myHand += ", ";
        }

        for (var i = 0; i < cards.length; i++) {
            myHand += cards[i].getNumber() +" of suit " +cards[i].getSuit();
            if (i < cards.length - 1)
                myHand += ", ";
        }
        return myHand;
    };
    this.hitMe = function() {
        cards.push(deal());
    };
}

var playAsDealer = function() {
    var dealerHand = new Hand();
    while (dealerHand.score() < 17) {
        dealerHand.hitMe();
    }
    return dealerHand;
};

var playAsUser = function() {
    var userHand = new Hand();
    var decision = confirm("Welcome to the Blackjack Palace.\nYour hand is: "+ userHand.printHand() + ". Hit?");
    while(decision) {
        userHand.hitMe();
        decision = confirm("Your hand is: "+ userHand.printHand() +". Hit?");
    }
    return userHand;
};

var declareWinner = function(userHand, dealerHand) {
    if (userHand.score() > 21) {
        if (dealerHand.score() > 21)
            return "You tied!";
        else
            return "You lose!";
    }
    else if (dealerHand.score() > 21)
        return "You win!";
    else {
        if (userHand.score() > dealerHand.score())
            return "You win!";
        else if (userHand.score() === dealerHand.score())
            return "You tied!";
        else if (userHand.score() < dealerHand.score())
            return "You lose!";

    }
};

var playGame = function() {
    var userHand = playAsUser();
    var dealerHand = playAsDealer();
    console.log(declareWinner(userHand, dealerHand));
    console.log("\nScores:");
    if (userHand.score() > 21)
        console.log("User: " +userHand.score() +" (went over)");
    else
        console.log("User: " +userHand.score());
    if (dealerHand.score() > 21)
        console.log("Dealer: " +dealerHand.score() +" (went over)");
    else
        console.log("Dealer: " +dealerHand.score());
    console.log("\nYour hand:\n" +userHand.printHand());
    console.log("Dealer's hand:\n" +dealerHand.printHand());
};

