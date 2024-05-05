let quizTheme = 1;
let selectedAnswer = 1;
let questionNumber = 1;
let questionsRight =0;
let questionsAnswered = 0;
const questions = [ // paramaters are [theme-1][questionnumber-1][0=question, 1-4=answers]
    [['Where is sperm made?','Ovas','Brain','testis','Vas deferens'],['Which of the following contraception has the highest success rate?', 'male condoms', 'IUD', 'female condoms', 'Raw Dawgin it'],['Who has sexual fantasies?','men','women','humans','that bitch stacy'],['What form of sexual education causes the most STIs and Teen pregnancies?','Abstinence+','Comprehensive','Abstinence only','Sexual risk avoidance'],['At what age to people on average lose their virginity?','17 years old','35 years old','23 years old','15 years old'],['What percentage of Women masturbate','34%','48%','87%','69%'],['What percentage of men masturbate?','74%','13%','45%','93%'],['Who is most likely statistically speaking to be gay? (from same mother)','eldest son','second eldest son','youngest son','Middle son'],['How long does it take on average for a man to orgasm?','3 hours','35 seconds','4 minutes','20 minutes'],['How long does it take on average for a female to orgasm?','34 minutes','20 minutes','8 minutes','47 seconds']],
    [['What gay is Kaitlyn?','Lesiban','Bisexual','Demisexual','Straight'],['What gay is Katie?','Bisexual','Lesbian','?','Queer'],['How long gay together for?','2 Days','5 years','4 years','25 minutes'],['How many Squishmellows on bed?','70','35','2','46'],['Who is Katie and Kaitlyn son?','Aaron','Sheila','Eli','Ethan'],['Who asked out who first?','Nakiya','Katie','Kaitlyn','Jeffrey'],['Who kissed who first?','Kaitlyn','Keef','Nakiya','Katie'],['Who said "I love you" first?','Katie','Kaitlyn','The fish','Sage'],['Who had cancer?','Katie','Kaitlyn','Eli','Tyler'],['What age is they?','18','19','20','21']],
    [['Who is the main character of One piece?','Luffy','Kaido','Zoro','Tony Tony Chopper'],['What is the name of the man who gave luffy the straw hat?','Kevin','Jeremy','Shanks','Blackbeard'],['what is the main power system in one piece?','Devil Fruits','Magic','Haki','Cursed energy'],['What is the name of the first ship the straw hats have?','Thosend Sunny','Batmoboat','Going merry','bob evens'],['What is the one piece?','idk',"don't ask me",'Does the author even know?','try again in 1000 more episodes'],['Who wears an eye patch in One Piece?','Luffy','Whitebeard','patrick star','no one'],['what is the name of the island the one piece is supposed to be on?','Elbaf','laughtale','logtown','Dressrosa'],["who is the world's greatest scientist?",'Vegapunk','my mom','Nami','Kaido'],['Who created the ponyglyphs?','Antient kingdom','Imu','Nico Robin','Akainu'],['Who is the good guys?','Pirates','Marines','Celestial Dragons','N/A they are complex characters']],
    [['What is the power system in JJK?','Haki','Magic','Chakra','Cursed energy'],['Who is the strongest?','Not Gojo','Sukana','Meguna','heian era Sukuna'],["Who is Eli's favorite character?",'Toji','Yuji','Hakari','Yuta'],['Who has the boogie woogie cursed technique?','Todo','Sukana','Kenjaku','Geto'],['who is dubbed by fans as "mr. potential?','Megumi','Yuji','Yuta','Hakari'],['Who has a bad ass gambling techinque and philosophy?','Hakari','Principle yaga','Panda','Drake'],['What question number is this? (of JJK questions theme)','5','4','9','7'],['What episode does Yuji eat the first finger?','1','4','12','23'],['Where does JJK typically take place?','Japan','Korea','China','USA'],['What is the meaning of life?','Gambling','42','???','I am losing my mind.']]
];
let tabs = document.getElementById('tabs');
let scoreText = document.getElementById('totalScoreBar');
window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');
    for (let i =0; i<tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const tabNum = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {
            document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');

            SwitchTheme(tabNum);
            refreshQuestion();
        })
    }
}

function SwitchTheme(tabNum) {
    questionNumber = 1;
    quizTheme = tabNum;

}

let startButton = document.getElementById('startButton');
let quizSection = document.getElementById('quizSection');
startButton.addEventListener('click', function(){
    startButton.classList.add('isLocked');
    quizSection.classList.remove('isLocked');
    refreshQuestion();
});
let answerOne = document.getElementById('answerOne');
let answerTwo = document.getElementById('answerTwo');
let answerThree = document.getElementById('answerThree');
let answerFour = document.getElementById('answerFour');
let feedBackText = document.getElementById('feedBack');
let questionText = document.getElementById('question');
let submitButton = document.getElementById('submitButton');
let nextButton =document.getElementById('nextButton');
answerOne.addEventListener('click', function () {
    document.querySelector('.answerButton.isSelected').classList.remove('isSelected');
    answerOne.classList.add('isSelected')
    selectedAnswer = 1;
});
answerTwo.addEventListener('click', function () {
    document.querySelector('.answerButton.isSelected').classList.remove('isSelected');
    answerTwo.classList.add('isSelected')
    selectedAnswer = 2;
});
answerThree.addEventListener('click', function () {
    document.querySelector('.answerButton.isSelected').classList.remove('isSelected');
    answerThree.classList.add('isSelected')
    selectedAnswer = 3;
});
answerFour.addEventListener('click', function () {
    document.querySelector('.answerButton.isSelected').classList.remove('isSelected');
    answerFour.classList.add('isSelected')
    selectedAnswer = 4;
});

nextButton.addEventListener('click', function() {
    refreshQuestion();
    submitButton.classList.remove('isLocked');
    nextButton.classList.add('isLocked');
    feedBackText.classList.add('isLocked');
    tabs.classList.remove('isLocked');
});
submitButton.addEventListener('click', function (){
    let feedBack = "";
    if(quizTheme===1) { //Human Sexuality Quiz
        if (questionNumber===1) {
            if(selectedAnswer===3) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="Sperm is made in the Testis"
            }
        } else if (questionNumber===2) {
            if(selectedAnswer===2) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="IUD's are convenient, easy, and effective. A bitch to remove and insert though."
            }
        } else if (questionNumber===3) {
            if(selectedAnswer===3) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="Everyone has fantasies"
            }
        } else if (questionNumber===4) {
            if(selectedAnswer===3) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="Abstinence only has proved to be detrimental to our youth's sexual health."
            }
        } else if (questionNumber===5) {
            if(selectedAnswer===1) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="Maybe you thought it was higher, maybe you thought it was lower, but on average 17 is when people lose their virginity."
            }
        } else if (questionNumber===6) {
            if(selectedAnswer===2) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="about half of women masturbate, which is natural and normal"
            }
        } else if (questionNumber===7) {
            if(selectedAnswer===1) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="about 74% of men masturbate, which is weird and gross. (kidding)"
            }
        } else if (questionNumber===8) {
            if(selectedAnswer===3) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="The womb's hormones are permanently altered every time a women has a boy, so the youngest is the most likely to be gay statistically speaking."
            }
        } else if (questionNumber===9) {
            if(selectedAnswer===3) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="Men can go in and out really fast, 4 minutes on average"
            }
        } else if (questionNumber===10) {
            if(selectedAnswer===2) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="Foreplay is important because women take 5x the time as men, about 20 minutes!"
            }
        }
    } else if (quizTheme===2) { //Katie and Kaitlyn Quiz
        if (questionNumber===1) {
            if(selectedAnswer===1) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="Oh no! Kaitlyn is actually a lesbian!"
            }
        } else if (questionNumber===2) {
            if(selectedAnswer===4) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="Oh no! Katie is actually queer!"
            }
        } else if (questionNumber===3) {
            if(selectedAnswer===3) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="They have been together for 4 years!"
            }
        } else if (questionNumber===4) {
            if(selectedAnswer===1) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="The right answer was 70! (even they are not sure of the exact number)"
            }
        } else if (questionNumber===5) {
            if(selectedAnswer===3) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="Katie and Kaitlyn are Eli's adoptive college lesbian moms"
            }
        } else if (questionNumber===6) {
            if(selectedAnswer===2) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="oh no! Katie had the crush first!"
            }
        } else if (questionNumber===7) {
            if(selectedAnswer===1) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="Kaitlyn had the balls to kiss her first"
            }
        } else if (questionNumber===8) {
            if(selectedAnswer===1) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="again, Katie had the crush first"
            }
        } else if (questionNumber===9) {
            if(selectedAnswer===4) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="a bit dark, but it was katie's little brother Tyler!"
            }
        } else if (questionNumber===10) {
            if(selectedAnswer===1) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="They are currently the same age, 20 years old!"
            }
        }
    } else if (quizTheme===3) { //One Piece Quiz
        if (questionNumber===1) {
            if(selectedAnswer===1) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="Luffy is the main character!"
            }
        } else if (questionNumber===2) {
            if(selectedAnswer===3) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="Red hair shanks, but is he who he seems..."
            }
        } else if (questionNumber===3) {
            if(selectedAnswer===1 || selectedAnswer===3) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="There is two right answers here, Devil Fruits and Haki!"
            }
        } else if (questionNumber===4) {
            if(selectedAnswer===1) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="The Thousend sunny will forever be loved and missed."
            }
        } else if (questionNumber===5) {
            questionsRight++
                feedBack="We still don't know over 1100 episodes later..."

        } else if (questionNumber===6) {
            if(selectedAnswer===4) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="The author must be saving the eye patch for someone special... still no one with it!"
            }
        } else if (questionNumber===7) {
            if(selectedAnswer===2) {
                questionsRight++
                feedBack="Correct! Good Job!"
            } else {
                feedBack="laughtale or raftale, not sure about the pronounciation"
            }
        } else if (questionNumber===8) {
            if(selectedAnswer===1) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="Vegapunk! who was teased for a long time but only just appeared in the anime!"
            }
        } else if (questionNumber===9) {
            if(selectedAnswer===1) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="All we know is that the ancient kingdom made the poneglyphs."
            }
        } else if (questionNumber===10) {
            if(selectedAnswer===4) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="One piece has strong themes of the winners of war choose what is right and wrong, there are gray characters everywhere."
            }
        }
    } else if (quizTheme===4) {
        if (questionNumber===1) { //One Piece Quiz
            if(selectedAnswer===4) {
                feedBack="Correct! Good Job!"
            } else {
                feedBack="They use cursed energy in this universe!"
            }
        } else if (questionNumber===2) {
            questionsRight++
            feedBack="These are all the right answer"
        } else if (questionNumber===3) {
            if(selectedAnswer===3) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="Hakari's whole power system is based on gambling <3"
            }
        } else if (questionNumber===4) {
            if(selectedAnswer===1) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="I should say had, but Todo used to use the awesome boogie woogie technique"
            }
        } else if (questionNumber===5) {
            if(selectedAnswer===1) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="Hopefully they show us this potential one day, but it is Megumi"
            }
        } else if (questionNumber===6) {
            if(selectedAnswer===1) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="If you got number 3 right, you got this one right too! Hakari has the gambling technique."
            }
        } else if (questionNumber===7) {
            if(selectedAnswer===4) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="If you were paying attention, it was question number 7!"
            }
        } else if (questionNumber===8) {
            if(selectedAnswer===1) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="Episode 1 he eats the first finger, many more to come..."
            }
        } else if (questionNumber===9) {
            if(selectedAnswer===1) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="Like most animanga, it takes place in Japan"
            }
        } else if (questionNumber===10) {
            if(selectedAnswer===1) {
                feedBack="Correct! Good Job!"
                questionsRight++
            } else {
                feedBack="I sure love gambling!"
            }
        }
    }
    feedBackText.classList.remove('isLocked');
    questionNumber++
    questionsAnswered++
    feedBackText.textContent = feedBack;
    submitButton.classList.add('isLocked');
    nextButton.classList.remove('isLocked');
    tabs.classList.add('isLocked');
    scoreText.textContent = questionsRight + "/" + questionsAnswered;
});
function refreshQuestion() {
    if (questionNumber<11) {
        questionText.textContent = questions[quizTheme - 1][questionNumber - 1][0];
        answerOne.textContent = questions[quizTheme - 1][questionNumber - 1][1];
        answerTwo.textContent = questions[quizTheme - 1][questionNumber - 1][2];
        answerThree.textContent = questions[quizTheme - 1][questionNumber - 1][3];
        answerFour.textContent = questions[quizTheme - 1][questionNumber - 1][4];
    }
}

