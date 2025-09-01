const quizData = [
  {
    question: "Which language is used for web apps?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answer: 1
  },
  {
    question: "Which HTML tag is used for paragraphs?",
    options: ["<h1>", "<p>", "<div>", "<a>"],
    answer: 1
  },
  {
    question: "Which CSS property changes text color?",
    options: ["font-weight", "background-color", "color", "text-style"],
    answer: 2
  }
];
let currentQuestion = 0;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(i, btn);
    optionsEl.appendChild(btn);
  });
}
function checkAnswer(selected, btn) {
  const correctIndex = quizData[currentQuestion].answer;
  const buttons = optionsEl.querySelectorAll("button");

  buttons.forEach((b, i) => {
    b.disabled = true;
    if (i === correctIndex) b.classList.add("correct");
    else if (i === selected) b.classList.add("wrong");
  });
}
nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Quiz Complete!";
    optionsEl.innerHTML = "";
    nextBtn.disabled = true;
  }
};
loadQuestion();
function getJoke() {
  document.getElementById("joke").textContent = "Loading joke...";
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").textContent = ${data.setup} — ${data.punchline};
    })
    .catch(err => {
      document.getElementById("joke").textContent = "Oops! Couldn't fetch joke.";
      console.error(err);
    });
}