let checkingAmount = 1000;
let savingsAmount = 20000;
let history = document.getElementById("historyText");
let savingsText = document.getElementById('savingsText');
let checkingText = document.getElementById('checkingText');
let insurancePaid = 0;
let electricityPaid =0;
let rentPaid = 0;
let phonePaid = 0;
let internetPaid =0;
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
let isLocked = 'ture';
let NameBarText = document.querySelector(".AccountNameBar");

let SignInButton = document.getElementById("SignInButton");
SignInButton.addEventListener("click", function() {
    document.getElementById("myForm").style.display = "block";
});
let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function() {
    console.log("test");
    let nameInput = document.getElementById("nameInput");
    NameBarText.textContent =  nameInput.value;
    document.getElementById("myForm").style.display = "none";
    let pages = document.querySelector('.pages');
    let tabs = document.querySelector('.tabs');
    tabs.classList.remove('isLocked');
    pages.classList.remove('isLocked');
    SignInButton.classList.add('isSignedIn');
    savingsText.textContent = "Savings: $" + savingsAmount;
    checkingText.textContent = "Checking: $" + checkingAmount;
});
let payElectricity = document.getElementById('payElectricity');
payElectricity.addEventListener('click', function () {
    document.getElementById("billForm").style.display = "block";

    document.getElementById('yesButton').addEventListener('click', function(){
        let billToAccount = document.getElementById('billAccountBox').value;
        if (billToAccount === 'Checking' && checkingAmount > 150 && electricityPaid===0) {
            checkingAmount -= 150;
            checkingText.textContent = "Checking: $" + checkingAmount;
            document.getElementById('electricityBill').style.display = "none";
            let newSpan = document.createElement("span");
            newSpan.textContent = "-150 from checking, New balance is: $" + checkingAmount + ", ";
            newSpan.classList.add("is-neg");
            history.appendChild(newSpan);
            electricityPaid++
        } else if (billToAccount === 'Savings' && savingsAmount > 150 && electricityPaid===0) {
            savingsAmount -= 150;
            savingsText.textContent = "Checking: $" + savingsAmount;
            document.getElementById('electricityBill').style.display = "none";
            let newSpan = document.createElement("span");
            newSpan.textContent = "-150 from savings, New balance is: $" + savingsAmount + ", ";
            newSpan.classList.add("is-neg");
            history.appendChild(newSpan);
            electricityPaid++
        }
        document.getElementById("billForm").style.display = "none";
    });
    document.getElementById('NoButton').addEventListener('click', function(){
        document.getElementById("billForm").style.display = "none";
    });
});
let payRent = document.getElementById('payRent');
payRent.addEventListener('click', function () {
    document.getElementById("billForm").style.display = "block";

    document.getElementById('yesButton').addEventListener('click', function(){
        let billToAccount = document.getElementById('billAccountBox').value;
        if (billToAccount === 'Checking' && checkingAmount > 1200 && rentPaid===0) {
                checkingAmount -= 1200;
                checkingText.textContent = "Checking: $" + checkingAmount;
                document.getElementById('rentBill').style.display = "none";
                let newSpan = document.createElement("span");
                newSpan.textContent = "-1200 from checking, New balance is: $" + checkingAmount + ", ";
                newSpan.classList.add("is-neg");
                history.appendChild(newSpan);
                rentPaid++
        } else if (billToAccount === 'Savings' && savingsAmount > 1200 && rentPaid===0) {
            savingsAmount -= 1200;
            savingsText.textContent = "Checking: $" + savingsAmount;
            document.getElementById('rentBill').style.display = "none";
            let newSpan = document.createElement("span");
            newSpan.textContent = "-1200 from savings, New balance is: $" + savingsAmount + ", ";
            newSpan.classList.add("is-neg");
            history.appendChild(newSpan);
            rentPaid++
        }
        document.getElementById("billForm").style.display = "none";
    });
    document.getElementById('NoButton').addEventListener('click', function(){
        document.getElementById("billForm").style.display = "none";
    });
});
let payPhone = document.getElementById('payPhone');
payPhone.addEventListener('click', function () {
    document.getElementById("billForm").style.display = "block";

    document.getElementById('yesButton').addEventListener('click', function(){
        let billToAccount = document.getElementById('billAccountBox').value;
        if (billToAccount === 'Checking' && checkingAmount > 75 && phonePaid===0) {
            checkingAmount -= 75;
            checkingText.textContent = "Checking: $" + checkingAmount;
            document.getElementById('phoneBill').style.display = "none";
            let newSpan = document.createElement("span");
            newSpan.textContent = "-75 from checking, New balance is: $" + checkingAmount + ", ";
            newSpan.classList.add("is-neg");
            history.appendChild(newSpan);
            phonePaid++
        } else if (billToAccount === 'Savings' && savingsAmount > 75 && phonePaid===0) {
            savingsAmount -= 75;
            savingsText.textContent = "Checking: $" + savingsAmount;
            document.getElementById('phoneBill').style.display = "none";
            let newSpan = document.createElement("span");
            newSpan.textContent = "-75 from savings, New balance is: $" + savingsAmount + ", ";
            newSpan.classList.add("is-neg");
            history.appendChild(newSpan);
            phonePaid++
        }
        document.getElementById("billForm").style.display = "none";
    });
    document.getElementById('NoButton').addEventListener('click', function(){
        document.getElementById("billForm").style.display = "none";
    });
});
let payInsurance = document.getElementById('payInsurance');
payInsurance.addEventListener('click', function () {
    document.getElementById("billForm").style.display = "block";

    document.getElementById('yesButton').addEventListener('click', function(){
        let billToAccount = document.getElementById('billAccountBox').value;
        if (billToAccount === 'Checking' && checkingAmount > 300 && insurancePaid===0) {
            checkingAmount -= 300;
            checkingText.textContent = "Checking: $" + checkingAmount;
            let newSpan = document.createElement("span");
            newSpan.textContent = "-300 from checking, New balance is: $" + checkingAmount + ", ";
            newSpan.classList.add("is-neg");
            history.appendChild(newSpan);
            document.getElementById('insuranceBill').style.display = "none";
            insurancePaid++
        } else if (billToAccount === 'Savings' && savingsAmount > 300 && insurancePaid===0) {
            savingsAmount -= 300;
            savingsText.textContent = "Checking: $" + savingsAmount;
            let newSpan = document.createElement("span");
            newSpan.textContent = "-300 from savings, New balance is: $" + savingsAmount + ", ";
            newSpan.classList.add("is-neg");
            history.appendChild(newSpan);
            document.getElementById('insuranceBill').style.display = "none";
            insurancePaid++
        }
        document.getElementById("billForm").style.display = "none";
    });
    document.getElementById('NoButton').addEventListener('click', function(){
        document.getElementById("billForm").style.display = "none";
    });
});
let payInternet = document.getElementById('payInternet');
payInternet.addEventListener('click', function () {
    document.getElementById("billForm").style.display = "block";

    document.getElementById('yesButton').addEventListener('click', function(){
        let billToAccount = document.getElementById('billAccountBox').value;
        if (billToAccount === 'Checking' && checkingAmount > 150 && internetPaid===0) {
            checkingAmount -= 150;
            checkingText.textContent = "Checking: $" + checkingAmount;
            document.getElementById('internetBill').style.display = "none";
            let newSpan = document.createElement("span");
            newSpan.textContent = "-150 from checking, New balance is: $" + checkingAmount + ", ";
            newSpan.classList.add("is-neg");
            history.appendChild(newSpan);
            internetPaid++
        } else if (billToAccount === 'Savings' && savingsAmount > 150 && internetPaid===0) {
            savingsAmount -= 150;
            savingsText.textContent = "Checking: $" + savingsAmount;
            document.getElementById('internetBill').style.display = "none";
            let newSpan = document.createElement("span");
            newSpan.textContent = "-150 from savings, New balance is: $" + savingsAmount + ", ";
            newSpan.classList.add("is-neg");
            history.appendChild(newSpan);
            internetPaid++
        }
        document.getElementById("billForm").style.display = "none";
    });
    document.getElementById('NoButton').addEventListener('click', function(){
        document.getElementById("billForm").style.display = "none";
    });
});

let transferButton = document.getElementById('transferButton');
transferButton.addEventListener('click', function() {
    let from = document.getElementById('fromBox').value;
    let to = document.getElementById('toBox').value;
    let amount = document.getElementById('transferAmount').value;

    if (from==='Checking' && checkingAmount>=Number(amount)) {
        checkingAmount-=Number(amount);
        checkingText.textContent = "Checking: $" + checkingAmount;
        if (to==='Savings'){
            savingsAmount+=Number(amount);
            savingsText.textContent = "Savings: $" + savingsAmount;
            let newSpan = document.createElement("span");
            newSpan.textContent = "$"+ amount+ " Transferred from Checking to Savings, New balance is $" + checkingAmount + " in checking and $" + savingsAmount + " in savings, ";
            newSpan.classList.add("is-pos");
            history.appendChild(newSpan);
        } else if (to === 'Checking') {
            checkingAmount+=Number(amount);
            checkingText.textContent = "Checking: $" + checkingAmount;
            let newSpan = document.createElement("span");
            newSpan.textContent = "$"+ amount+ " Transferred from Checking to Checking, New balance is $" + checkingAmount + " in checking and $" + savingsAmount + " in checking, ";
            newSpan.classList.add("is-pos");
            history.appendChild(newSpan);
        }
    } else if (from==='Savings' && savingsAmount>=Number(amount)) {
        savingsAmount-=Number(amount);
        savingsText.textContent = "Savings: $" + savingsAmount;
        if (to==='Savings'){
            savingsAmount+=Number(amount);
            savingsText.textContent = "Savings: $" + savingsAmount;
            let newSpan = document.createElement("span");
            newSpan.textContent = "$"+ amount+ " Transferred from Savings to Savings, New balance is $" + savingsAmount + " in savings and $" + savingsAmount + " in savings, ";
            newSpan.classList.add("is-pos");
            history.appendChild(newSpan);
        } else if (to === 'Checking') {
            checkingAmount+=Number(amount);
            checkingText.textContent = "Checking: $" + checkingAmount;
            let newSpan = document.createElement("span");
            newSpan.textContent = "$"+ amount+ " Transferred from Savings to Checking, New balance is $" + checkingAmount + " in checking and $" + savingsAmount + " in savings, ";
            newSpan.classList.add("is-pos");
            history.appendChild(newSpan);
        }
    }

});

function SwitchPage(page_id) {
    const current_page = document.querySelector('.pages .page.is-active')
    current_page.classList.remove('is-active');

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`)
    next_page.classList.add('is-active');
}








