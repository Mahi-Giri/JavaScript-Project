const questionObj = {
    category: 'Food & Drink',
    id: 'qa-1',
    correctAnswer: 'Three',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
};

const questionElement = document.querySelector('#question');
const optionsElement = document.querySelector('#options');
const scoreElement = document.querySelector('#score');


// Destructuring the object
const { correctAnswer, options, question } = questionObj;
let score = 0;

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
            questionElement.textContent = 'Quiz Completed!!';
            questionElement.style.backgroundColor = 'green'
            optionsElement.textContent = '';
        } else {
            questionElement.textContent = 'Quiz Failed!!';
            questionElement.style.backgroundColor = '#ce5353';
            questionElement.style.color = 'black';
            optionsElement.textContent = '';
            score = score - 0.25;
        }
        scoreElement.textContent = `Score: ${score}`;
    });
});

function shuffleOptions(opt) {
    for (let i = opt.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * i);
        [opt[i], opt[j]] = [opt[j], opt[i]];
    }
    return opt;
}