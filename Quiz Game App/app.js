const QueJSON = [
    {
        correctAnswer: 'Three',
        options: ['Two', 'Three', 'Four', 'Five'],
        question: "How many pieces of bun are in a Mcdonald's Big Mac?",
    },
    {
        correctAnswer: 'L. Frank Baum',
        options: ['Suzanne Collins', 'James Fenimore Cooper', 'L. Frank Baum', 'Donna Leon'],
        question: "Which author wrote 'The Wonderful Wizard of Oz'?",
    },
    {
        correctAnswer: 'Atlanta United',
        options: ['Atlanta United', 'Atlanta Impact', 'Atlanta Bulls', 'Atlanta Stars'],
        question: "Which of this soccer team bases in Atlanta ?",
    },
    {
        correctAnswer: 'A Nanny',
        options: ['A Sow', 'A Lioness', 'A Hen', 'A Nanny'],
        question: "A female goat is know as what?",
    },
    {
        correctAnswer: 'P. L. Travers',
        options: ['J. R. R. Tolkien', 'P. L. Travers', 'Lewis Carroll', 'Enid Blyton'],
        question: "Which author wrote 'Mary Poppins'?",
    },
]

const questionElement = document.querySelector('#question');
const optionsElement = document.querySelector('#options');
const scoreElement = document.querySelector('#score');
const nextBtn = document.querySelector('#next');

let score = 0;
let currentQuestion = 0;
function showQue() {
    const { correctAnswer, options, question } = QueJSON[currentQuestion];
    questionElement.textContent = `${question}`;

    const shuffleOption = shuffleOptions(options);

    shuffleOption.forEach((option) => {
        const btn = document.createElement('button');
        btn.setAttribute('class', 'btn-options');
        btn.textContent = `${option}`;
        optionsElement.appendChild(btn);
    });

    const btns = document.querySelectorAll('.btn-options');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.textContent.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
                score++;
            } else {
                score = score - 0.25;
            }
            scoreElement.textContent = `Score: ${score} / ${QueJSON.length}`;
            nextQue();
        });
    });
}

showQue();
function nextQue() {
    currentQuestion++;
    optionsElement.textContent = '';
    if (currentQuestion >= QueJSON.length) {
        questionElement.textContent = 'Quiz Completed!!';
        questionElement.style.backgroundColor = 'green'
        nextBtn.style.display = 'none';
    }
    else {
        showQue();
    }
};

nextBtn.addEventListener('click', () => {
    scoreElement.textContent = `Score: ${score} / ${QueJSON.length}`;
    nextQue();
});

function shuffleOptions(opt) {
    for (let i = opt.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * i);
        [opt[i], opt[j]] = [opt[j], opt[i]];
    }
    return opt;
}