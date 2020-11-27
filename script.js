let quizData = [{
    question: 'How old is Anshuman ?',
    a: '10',
    b: '19',
    c: '13',
    d: '20',
    correct: 'c'
  },
  {
    question: 'What is The Most Used Proograming Language In 2019 ?',
    a: 'Java',
    b: 'Javascript',
    c: 'Swift',
    d: 'C++',
    correct: 'b'
  },
  {
    question: 'Who is the present President Of US ?',
    a: 'Narendra Damodardas Modi',
    b: 'Nelson Mandella',
    c: 'Donald Trump',
    d: 'Yoweri Museveni',
    correct: 'c'
  },
  {
    question: 'What is the Capital of India ?',
    a: 'Bihar',
    b: 'Maharastra',
    c: 'Uttar Pradesh',
    d: 'New Delhi',
    correct: 'd'
  },
  {
    question: 'What does HTML stands for ?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Memory Language',
    c: 'Hypertext Mini Language',
    d: 'Hypertext Macro Language',
    correct: 'a'
  },
  {
    question: 'Capital of Azerbaizan ?',
    a: 'Uganda',
    b: 'Kabul',
    c: 'Baku',
    d: 'Bihar',
    correct: 'c'
  },
  {
    question: 'Full form of UPSC ?',
    a: 'Union Public Security Commission',
    b: 'Union Public Service Commission',
    c: 'Union Private Security Commission',
    d: 'None of the above',
    correct: 'b'
  },
  {
    question: 'Which of the following is a politician of US ?',
    a: 'Barack Hussein Obama',
    b: 'Narendra Damodardas Modi',
    c: 'Yoweri Museveni',
    d: 'Jair Bolsonaro',
    correct: 'a'
  },
  {
    question: 'What do you call a group of bears ?',
    a: 'A mob',
    b: 'A swarm',
    c: 'A sloth',
    d: 'A Flock',
    correct: 'c'
  },
  {
    question: 'What type of rock is marble ?',
    a: 'Metamorphic Rock',
    b: 'Sedimentary Rock',
    c: 'Igneous Rock',
    d: 'None of the above',
    correct: 'a'
  },
  {
    question: 'Which colour is the largest wavelength ?',
    a: 'White',
    b: 'Green',
    c: 'Blue',
    d: 'Red',
    correct: 'd'
  },
  {
    question: 'Who got noble prize on econmics in India ?',
    a: 'Netaji Subhas Chnadra Bose',
    b: 'Amartha Sen',
    c: 'Anshuman Pradhan',
    d: 'Amitabha Bachhan',
    correct: 'b'
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('Submit')

let currentQuiz = 0;


loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerHTML = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;

}

function deselectAnswers() {

  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
let score = 0;
submitBtn.addEventListener('click', () => {

  const answer = getSelected();
  console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      if (score > 10, score == quizData.length) {
        quiz.innerHTML = `<h1>You answered correctly at ${score}/${quizData.length} questions.</h1><br>
            <p id="pp">Great Job</p><button onclick = "location.reload()">Replay</button>`;
      } else if (score > 9) {
        quiz.innerHTML = `<h1>You answered correctly at ${score}/${quizData.length} questions.</h1><br>
             <p id="pp">Almost Perfect</p><button onclick = "location.reload()">Replay</button>`;
      } else if (score < 9, score > 6, score == 6) {
        quiz.innerHTML = `<h1>You answered correctly at ${score}/${quizData.length} questions.</h1><br>
             <p id="pp">Well Done</p><button onclick = "location.reload()">Replay</button>`;
      } else if (score < 6, score > 2, score == 2) {
        quiz.innerHTML = `<h1>You answered correctly at ${score}/${quizData.length} questions.</h1><br>
             <p id="pp">Need Improvement</p><button onclick = "location.reload()">Replay</button>`;
      } else if (score < 2, score == 0) {
        quiz.innerHTML = `<h1>You answered correctly at ${score}/${quizData.length} questions.</h1><br>
                <p id="pp">Better Luck next Time!!</p><button onclick = "location.reload()">Replay</button>`;
      } else {
        quiz.innerHTML = `<h1>You answered every questions wrong.</h1> `;
      }
      // quiz.innerHTML = `<h1>You answered correctly at ${score}/${quizData.length} questions.</h1> `;
    }





  }
});
