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
let stats = document.getElementById("statsText");

function SubtractMoney(bet) {
    moneyAmount -= bet;
    moneyText.textContent = "$" + moneyAmount.toString();
    let newSpan = document.createElement("span");
    newSpan.textContent = "-" +bet+ " New balance is: " +moneyAmount+ ", ";
    newSpan.classList.add("is-neg");
    stats.appendChild(newSpan);
}
function AddMoney(bet) {
    moneyAmount += bet;
    moneyText.textContent = "$" + moneyAmount.toString();
    let newSpan = document.createElement("span");
    newSpan.textContent = "+" +bet+ " New balance is: " +moneyAmount+ ", ";
    newSpan.classList.add("is-pos");
    stats.appendChild(newSpan);
}

let blackButton = document.getElementById("blackButton");
let redButton = document.getElementById("redButton");
let greenButton = document.getElementById("greenButton");
let rollButton = document.getElementById("rollButton");

let selectedColor = document.getElementById("selectedColor");
let rollNumber = document.getElementById("rollNumber");

let betColor = "black";
blackButton.addEventListener("click", function() {
    selectedColor.classList.remove("is-green", "is-red");
    selectedColor.classList.add("is-black");
    selectedColor.textContent = "Black!";
    betColor = "black";
});
redButton.addEventListener("click", function() {
    selectedColor.classList.remove("is-green", "is-black");
    selectedColor.classList.add("is-red");
    selectedColor.textContent = "Red!";
    betColor = "red";
});
greenButton.addEventListener("click", function() {
    selectedColor.classList.remove("is-black", "is-red");
    selectedColor.classList.add('is-green');
    selectedColor.textContent = "Green!";
    betColor = "green";
});
rollButton.addEventListener("click", function() {
         rollNumber.classList.remove("is-black", "is-red", "is-green");
        let roll = Math.floor(Math.random()*37);
        let color = "";
        rollNumber.textContent = roll.toString();
        if (roll===0) {
            rollNumber.classList.add("is-green");
            color = "green";
        } else if (roll%2===0) {
            rollNumber.classList.add("is-red");
            color = "red";
        } else {
            rollNumber.classList.add("is-black");
            color = "black";
        }
        if (color===betColor) {
            AddMoney(betAmount);
        } else {
            SubtractMoney(betAmount);
        }
    });

let startGameButton = document.getElementById("startGameButton");
let hitButton = document.getElementById("hitButton");
let standButton = document.getElementById("standButton");
startGameButton.addEventListener("click", function() {
    startGameButton.classList.add('is-active');
    hitButton.classList.add('is-active');
    standButton.classList.add('is-active');
    playGame();
});
function getCardIcon(s,n) {
    let suit = s;
    let number = n;
    // there might be a better way to do this, but I don't think this is too bad
    if (suit === 1) {
        if (number === 1) {
            return '🂡';
        } else if (number === 2) {
            return "🂢";
        } else if (number === 3) {
            return "🂣";
        } else if (number === 4) {
            return "🂤";
        } else if (number === 5) {
            return "🂥";
        } else if (number === 6) {
            return "🂦";
        } else if (number === 7) {
            return "🂧";
        } else if (number === 8) {
            return "🂨";
        } else if (number === 9) {
            return "🂩";
        } else if (number === 10) {
            return "🂪";
        } else if (number === 11) {
            return "🂫";
        } else if (number === 12) {
            return "🂭";
        } else if (number === 13) {
            return "🂮";
        }
    } else if (suit === 2 ) {
        if (number === 1) {
            return "🂱";
        } else if (number === 2) {
            return "🂲";
        } else if (number === 3) {
            return "🂳";
        } else if (number === 4) {
            return "🂴";
        } else if (number === 5) {
            return "🂵";
        } else if (number === 6) {
            return "🂶";
        } else if (number === 7) {
            return "🂷";
        } else if (number === 8) {
            return "🂸";
        } else if (number === 9) {
            return "🂹";
        } else if (number === 10) {
            return "🂺";
        } else if (number === 11) {
            return "🂻";
        } else if (number === 12) {
            return "🂺";
        } else if (number === 13) {
            return "🂾";
        }
    } else if (suit === 3) {
        if (number === 1) {
            return "🃁";
        } else if (number === 2) {
            return "🃂";
        } else if (number === 3) {
            return "🃃";
        } else if (number === 4) {
            return "🃄";
        } else if (number === 5) {
            return "🃅";
        } else if (number === 6) {
            return "🃆";
        } else if (number === 7) {
            return "🃇";
        } else if (number === 8) {
            return "🃈";
        } else if (number === 9) {
            return "🃉";
        } else if (number === 10) {
            return "🃊";
        } else if (number === 11) {
            return "🃋";
        } else if (number === 12) {
            return "🃍";
        } else if (number === 13) {
            return "🃎";
        }
    } else if (suit === 4) {
        if (number === 1) {
            return "🃑";
        } else if (number === 2) {
            return "🃒";
        } else if (number === 3) {
            return "🃓";
        } else if (number === 4) {
            return "🃔";
        } else if (number === 5) {
            return "🃕";
        } else if (number === 6) {
            return "🃖";
        } else if (number === 7) {
            return "🃗";
        } else if (number === 8) {
            return "🃘";
        } else if (number === 9) {
            return "🃙";
        } else if (number === 10) {
            return "🃚";
        } else if (number === 11) {
            return "🃛";
        } else if (number === 12) {
            return "🃝";
        } else if (number === 13) {
            return "🃞";
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

let deal = function() {
    let suit = Math.floor(Math.random() * 4) + 1;
    let number = Math.floor(Math.random() * 13) + 1;
    return new Card(suit, number);
};

function Hand() {
    let cards = [deal(), deal()];
    this.getHand = function() {
        return cards;
    };
    this.score = function() {
        let myScore = 0;
        for (let i = 0; i < cards.length; i++)
            myScore += cards[i].getValue();
        for (let a = 0; a < cards.length && myScore > 21; a++) {
            if (cards[a].getValue() === 11)
                myScore -= 10;
        }
        return myScore;
    };
    this.printHand = function() {
        let myHand = "";
        let cardIconArray = [];
        for (let i = 0; i < cards.length; i++) {
            cardIconArray.push(getCardIcon(cards[i].getSuit(), cards[i].getNumber()));
            myHand += cardIconArray[i];
            if (i < cards.length - 1) {
                myHand += " ";
            }
        }
        console.log(myHand);
        return myHand;
    };
    this.hitMe = function() {
        cards.push(deal());
    };
}

let playAsDealer = function(dealerHand) {
    while (dealerHand.score() < 17) {
        dealerHand.hitMe();
    }
    return dealerHand;
};

let playAsUser = function(userHand) {
    return new Promise((resolve, reject) => {
        hitButton.addEventListener("click", function () {
            userHand.hitMe();
            let userHandText = document.querySelector("#playerHandText");
            userHandText.textContent = userHand.printHand();
        });

        standButton.addEventListener("click", function () {
            resolve(userHand);
            hitButton.classList.remove('is-active');
            standButton.classList.remove('is-active');
        });
    });
};

let declareWinner = function(userHand, dealerHand) {
    if (userHand.score() > 21) {
        if (dealerHand.score() > 21) {
            return "You tied!";
        } else {
            SubtractMoney(betAmount);
            return "You lose!";
        }
    }
    else if (dealerHand.score() > 21) {
        AddMoney(betAmount);
        return "You win!";
    } else {
        if (userHand.score() > dealerHand.score()) {
            AddMoney(betAmount);
            return "You win!";
        } else if (userHand.score() === dealerHand.score()) {
            return "You tied!";
        } else if (userHand.score() < dealerHand.score()) {
            SubtractMoney(betAmount);
            return "You lose!";
        }

    }
};

let playGame = function() {
    let initialDealerHand = new Hand();
    let dealerHandText = document.querySelector("#dealerHandText");
    let initialUserHand = new Hand();
    let userHandText = document.querySelector("#playerHandText");
    dealerHandText.textContent = initialDealerHand.printHand();
    userHandText.textContent = initialUserHand.printHand();
    let userHand = playAsUser(initialUserHand)
        .then(userHand => {
            console.log("test");
            let dealerHand = playAsDealer(initialDealerHand);
            dealerHandText.textContent = initialDealerHand.printHand();
            let results = declareWinner(userHand, dealerHand);
            console.log(results);
            if (userHand.score() > 21) {
                console.log("User: " + userHand.score() + " (went over)");
            } else {
                console.log("User: " + userHand.score());
            }
            if (dealerHand.score() > 21) {
                console.log("Dealer: " + dealerHand.score() + " (went over)");
            } else {
                console.log("Dealer: " + dealerHand.score());
            }
            console.log("\nYour hand:\n" +userHand.printHand());
            console.log("Dealer's hand:\n" +dealerHand.printHand());
            startGameButton.classList.remove('is-active');
        });

};

