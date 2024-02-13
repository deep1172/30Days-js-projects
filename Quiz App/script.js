const questions = [
    {
        question: "How many Planets are there in our Solar System ?",
        answers:[
            { text:"seven", correct: false},
            { text:"Twelve", correct: false},
            { text:"Eight", correct: true},
            { text:"Ten", correct: false},
        ]
    },
    {
        question: "In which Galaxy do we live in ?",
        answers:[
            { text:"Juniper", correct: false},
            { text:"Milky Way", correct: true},
            { text:"Tidal Way", correct: false},
            { text:"Neptune", correct: false},
        ]
    },
    {
        question: "In which Planet do we live in ?",
        answers:[
            { text:"Mars", correct: false},
            { text:"Neptune", correct: false},
            { text:"Jupiter", correct: false},
            { text:"Earth", correct: true},
        ]
    },
    {
        question: "Mars is also called _____ Planet ?",
        answers:[
            { text:"Blue", correct: false},
            { text:"Red", correct: true},
            { text:"Green", correct: false},
            { text:"Yellow", correct: false},
        ]
    },
    {
        question: "Which is the nearest star to Earth ?",
        answers:[
            { text:"Alpha Centuri", correct: true},
            { text:"Ross 154", correct: false},
            { text:"Ross 248", correct: false},
            { text:"None of the above", correct: false},
        ]
    },   

];

const questionElement =document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex =0;
let score =0;

function startQuiz() {
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML ="Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion =questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo +". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button =document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
    });

}

function resetState() {
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}
function selectAnswer(e) {
    const selectedBtn =e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{if(button.dataset.correct ==="true")
    {
        button.classList.add("correct");
    }
    button.disabled = true;
})
    nextButton.style.display ="block";
}

function showScore() {
    resetState();
    questionElement.innerHTML =`Hey Champ you Scored ${score *2} out of ${questions.length *2}!`;
    nextButton.innerHTML ="Attempt Again";
    nextButton.style.display =display ="block"
    
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex <questions.length){
    showQuestion();
}
else{
    showScore();
}
}

nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else{
       startQuiz();
    }
});
 startQuiz();