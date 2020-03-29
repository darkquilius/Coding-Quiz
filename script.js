const questionDisplay = document.getElementById("questionDisplay");
const answerDisplay = document.getElementById("answerDisplay");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const restart = document.getElementById("restart");
const start = document.getElementById("start");

var questions = [{
        question: "What does HTML stand for?",
        choiceA: "Hyper Team Magic League",
        choiceB: "HyperText Markdown Language",
        choiceC: "HyperText Markup Language",
        choiceD: "Hella Tight Macchiato Late",
        correct: "C"
    },
    {
        question: "What does CSS stand for?",
        choiceA: "Cascading Style Sheets",
        choiceB: "Correcting Style Sheets",
        choiceC: "Correcting Supposition Style",
        choiceD: "I Don't Know",
        correct: "A"
    },
    {
        question: "What does JS stand for?",
        choiceA: "JavaStyle",
        choiceB: "JavaSentencing",
        choiceC: "JavaScripting",
        choiceD: "JavaScript",
        correct: "D"
    },
    {
        question: "When using <h#> tags in HTML, which # creates the largest fontsize?",
        choiceA: "6",
        choiceB: "4",
        choiceC: "1",
        choiceD: "2",
        correct: "C"
    },
    {
        question: "In the terminal, what is the tilde(~) a shortcut for?",
        choiceA: "Close Terminal",
        choiceB: "Homework",
        choiceC: "Home",
        choiceD: "I Don't Know",
        correct: "C"
    },
    {
        question: "What is the symbol when calling an ID?",
        choiceA: "#",
        choiceB: "?",
        choiceC: "&",
        choiceD: "+",
        correct: "A"
    },
    {
        question: "An integer value holds...?",
        choiceA: "Strings",
        choiceB: "Numbers",
        choiceC: "Booleans",
        choiceD: "Weight",
        correct: "B"
    },
    {
        question: "What is the process of solving errors in a program called?",
        choiceA: "Error Decoding",
        choiceB: "Decoding",
        choiceC: "Exterminating",
        choiceD: "Debugging",
        correct: "D"
    },
    {
        question: "When a programmer writes a program, the code is known as...?",
        choiceA: "Source Code",
        choiceB: "Object Code",
        choiceC: "Primary Code",
        choiceD: "Bugger Code",
        correct: "A"
    },
    {
        question: "What is 1+1?",
        choiceA: "11",
        choiceB: "2",
        choiceC: "0",
        choiceD: "I Don't Know",
        correct: "B"
    },
]

var lastQuestion = questions.length - 1;
var currentQuestion = 0;
var wrongCount = 3
var score = 0

function makeQuestion() {
    var q = questions[currentQuestion]
    questionDisplay.innerHTML = `${q.question}`;
    choiceA.innerHTML = `${q.choiceA}`;
    choiceB.innerHTML = `${q.choiceB}`;
    choiceC.innerHTML = `${q.choiceC}`;
    choiceD.innerHTML = `${q.choiceD}`;
};

function checkAnswer(choiceValue) {
    if (questions[currentQuestion].correct === choiceValue) {
        score++;
    } else {
        wrongCount--;
    }

};

function renderScore() {
    choiceA.setAttribute("style", "display: none;");
    choiceB.setAttribute("style", "display: none;");
    choiceC.setAttribute("style", "display: none;");
    choiceD.setAttribute("style", "display: none;");
    restart.removeAttribute("style");
    if (score >= 6) {
        questionDisplay.innerHTML = `<h1> You got ${score} right! Good Job!!`
    } else {
        questionDisplay.innerHTML = `<h1> Ouch! You only got ${score} right!`
    }
};

choiceA.addEventListener("click", function(event) {
    var choiceValue;
    choiceValue = event.target.value;
    checkAnswer(choiceValue);
    if (wrongCount === 0) {
        renderScore();
    } else if (currentQuestion < lastQuestion) {
        currentQuestion++;
        makeQuestion();
    } else { renderScore() }
});
choiceB.addEventListener("click", function(event) {
    var choiceValue;
    choiceValue = event.target.value;
    checkAnswer(choiceValue);
    if (wrongCount === 0) {
        renderScore();
    } else if (currentQuestion < lastQuestion) {
        currentQuestion++;
        makeQuestion();
    } else { renderScore() }
});
choiceC.addEventListener("click", function(event) {
    var choiceValue;
    choiceValue = event.target.value;
    checkAnswer(choiceValue);
    if (wrongCount === 0) {
        renderScore();
    } else if (currentQuestion < lastQuestion) {
        currentQuestion++;
        makeQuestion();
    } else { renderScore() }
});
choiceD.addEventListener("click", function(event) {
    var choiceValue;
    choiceValue = event.target.value;
    checkAnswer(choiceValue);
    if (wrongCount === 0) {
        renderScore();
    } else if (currentQuestion < lastQuestion) {
        currentQuestion++;
        makeQuestion();
    } else { renderScore() }
});

restart.addEventListener("click", function() {
    restart.setAttribute("style", "display: none;");
    choiceA.removeAttribute("style");
    choiceB.removeAttribute("style");
    choiceC.removeAttribute("style");
    choiceD.removeAttribute("style");
    currentQuestion = 0;
    wrongCount = 3;
    score = 0;
    makeQuestion();
});

start.addEventListener("click", function() {
    start.setAttribute("style", "display: none;");
    choiceA.removeAttribute("style");
    choiceB.removeAttribute("style");
    choiceC.removeAttribute("style");
    choiceD.removeAttribute("style");
    makeQuestion();
});