const questions = [
  {
    question: "ما هي عاصمة فرنسا؟",
    options: ["باريس", "مدريد", "روما", "برلين"],
    answer: "باريس",
  },
  {
    question: "من هو مؤسس شركة مايكروسوفت؟",
    options: ["بيل غيتس", "ستيف جوبز", "إيلون ماسك", "مارك زوكربيرغ"],
    answer: "بيل غيتس",
  },
  // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const questionIndex = document.getElementById("question-index");
const totalQuestions = document.getElementById("total-questions");
const form = document.getElementById("question-form");
const resultContainer = document.getElementById("result");
const correctAnswerText = document.getElementById("correct-answer");
const userAnswerText = document.getElementById("user-answer");
const answerStatus = document.getElementById("answer-status");
const finalResultContainer = document.getElementById("final-result");
const scoreText = document.getElementById("score");
const totalScoreText = document.getElementById("total-score");

function loadQuestion() {
  if (currentQuestionIndex < questions.length) {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    questionIndex.textContent = currentQuestionIndex + 1;
    totalQuestions.textContent = questions.length;

    optionsContainer.innerHTML = "";
    question.options.forEach((option) => {
      const label = document.createElement("label");
      label.innerHTML = `
        <input type="radio" name="answer" value="${option}" required>
        ${option}
      `;
      optionsContainer.appendChild(label);
    });
  } else {
    showFinalResult();
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  const userAnswer = form.answer.value;
  const correctAnswer = questions[currentQuestionIndex].answer;

  const isCorrect = userAnswer === correctAnswer;
  if (isCorrect) {
    score++;
  }

  correctAnswerText.textContent = correctAnswer;
  userAnswerText.textContent = userAnswer;
  answerStatus.textContent = isCorrect ? "صحيحة" : "خاطئة";

  resultContainer.style.display = "block";
  currentQuestionIndex++;
  setTimeout(loadQuestion, 2000); // Wait 2 seconds before loading the next question
}

function showFinalResult() {
  finalResultContainer.style.display = "block";
  scoreText.textContent = score;
  totalScoreText.textContent = questions.length;
  document.getElementById("question-container").style.display = "none";
}

function retryQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  finalResultContainer.style.display = "none";
  document.getElementById("question-container").style.display = "block";
  resultContainer.style.display = "none";
  loadQuestion();
}

form.addEventListener("submit", handleFormSubmit);
loadQuestion();
