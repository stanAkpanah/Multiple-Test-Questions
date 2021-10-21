const quizData = [
    {
        question: 'Who is the President of Nigeria?',
        a: 'Goodluck Jonathan',
        b: 'Muhammadu Buhari',
        c: 'Atiku Abubakar',
        d: 'Olusegun Obasanjo',
        correct: 'b',
    },
    {
        question: 'How many states does Nigeria have?',
        a: '36',
        b: '35',
        c: '30',
        d: '33',
        correct: 'a',
    },
    {
        question: 'Which Programming language runs in a web browser?',
        a: 'Java',
        b: 'Python',
        c: 'Google Chrome',
        d: 'JavaScript',
        correct: 'd',
    },
    {
        question: 'Which of these is a web browser application?',
        a: 'Mozilla Firefox',
        b: 'Google Chrome',
        c: 'Brave Browser',
        d: 'All of the above',
        correct: 'd',
    },
];

const quiz = document.getElementById('quiz')
const answerElements = document.querySelectorAll('.answer')
const questionElement = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionElement.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerElements.forEach(function(answerEl){
        answerEl.checked = false
    })
}

function getSelected() {
    let answer

    answerElements.forEach(function(answerEl){
        if(answerEl.checked) {
            answer = answerEl.id
        }

    })

    return answer
}

submitBtn.addEventListener('click', function(){
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2 style="margin-left:30px">You answered ${score} out of ${quizData.length} questions correctly!</h2>
            

            <button onclick='location.reload()'>Reload</button>
            `
        }
    }
})