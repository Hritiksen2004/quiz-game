const questions = [
    {
        question: "Who was the first woman to win a Nobel Prize?",
        options: ["Marie Curie", "Ada Lovelace", "Rosalind Franklin", "Dorothy Hodgkin"],
        answer: 1
    },
    {
        question: "What is the capital city of Bhutan?",
        options: ["Thimpu", "Kathmandu", "Ulaanbaatar", "Colombo"],
        answer: 1
    },
    {
        question: "Which code does the college learn us first?",
        options: ["Bye World", "Ye world", "Hello World", "Or World"],
        answer: 3
    },
    {
        question: "How much money comes in our account as a scholarship?",
        options: ["85795", "50😂", "30000", "General category🥺"],
        answer: 3
    },
    {
        question: "Which language you have done in our college?",
        options: ["C", "C++", "Bundeli", "Java"],
        answer: 2
    },
    {
        question: "A intelligent student Belong's to.?",
        options: ["sagar", "Banda", "Rehli", "Gadakota"],
        answer: 2
    },
    {
        question: "How many stairs you use to reach on ground floor to second floor?",
        options: ["20", "17", "16", "I don't know"],
        answer: 4
    },
    {
        question: "Who teach us maths-2 in 2nd sem ?",
        options: ["Ankit sir", "subhashini mam", "Both", "Jyotsna mam"],
        answer: 3
    },
    {
        question: "How many students was come on 31 April, 2023?",
        options: ["48", "58", "64", "None"],
        answer: 4
    },
    {
        question: "How many Golgappe we can buy from 10 rupees?",
        options: ["10", "7", "6", "Ham nahi khate"],
        answer: 3
    }
];

let currentQuestionIndex = 0;
let attemptedQuestions = 0;
let correctAnswers = 0;

function displayQuestion() {
    const questionObj = questions[currentQuestionIndex];
    document.getElementById("question-container").innerHTML = questionObj.question;
    
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = '';
    questionObj.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.innerText = option;
        optionElement.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(optionElement);
    });

    document.getElementById("next-button").style.display = "none";
}

function checkAnswer(selectedIndex) {
    const questionObj = questions[currentQuestionIndex];
    const options = document.querySelectorAll(".option");

    // Mark the selected answer
    options.forEach((option, index) => {
        if (index === selectedIndex) {
            if (index === questionObj.answer) {
                option.classList.add("correct");
                correctAnswers++;
            } else {
                option.classList.add("wrong");
            }
        } else if (index === questionObj.answer) {
            option.classList.add("correct");
        }
    });

    attemptedQuestions++;

    // Show next button
    document.getElementById("next-button").style.display = "inline-block";
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `You attempted ${attemptedQuestions} questions.`;

    if (correctAnswers === questions.length) {
        resultContainer.innerHTML += `<div id="victory">Yahoo! You answered all questions correctly!</div>`;
    } else {
        resultContainer.innerHTML += `<br>Correct Answers: ${correctAnswers}<br>Incorrect Answers: ${attemptedQuestions - correctAnswers}`;
    }

    document.getElementById("next-button").style.display = "none";
}

// Start the game
displayQuestion();
