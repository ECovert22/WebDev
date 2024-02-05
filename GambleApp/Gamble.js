let moneyAmount = 1000;
window.onload = () => {
    const moneyText = document.querySelector(".moneyBar");

    moneyText.textContent = "$" + moneyAmount.toString();
    moneyText.addEventListener("click", function() {
        SubtractMoney(100);
        //AddMoney(100);
        moneyText.textContent = "$" + moneyAmount.toString();
    });
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