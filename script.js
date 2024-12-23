const questions = [
  {
    question: "ما هو تعريف مخارج الحروف في علم التجويد؟",
    options: [
      "الموضع الذي ينتهي إليه صوت الحرف عند النطق به",
      "الأحكام المتعلقة بنون التنوين",
      "الصفات التي تميز الحروف بعضها عن بعض",
      "الإطالة الصوتية للحروف المدية",
    ],
    answer: "الموضع الذي ينتهي إليه صوت الحرف عند النطق به",
  },
  {
    question: "على وفق مذهب من يعد عدد مخارج الحروف 17؟",
    options: ["الكسائي", "الخليل بن أحمد", "سيبويه", "مذهب مركب من مذهبي الخليل وسيبويه"],
    answer: "مذهب مركب من مذهبي الخليل وسيبويه",
  },
  {
    question: "ما هو مخرج حرف القاف وفقًا لعلماء التجويد؟",
    options: ["وسط اللسان مع الحنك الأعلى", "أقصى اللسان مع الحنك اللحمي", "طرف اللسان مع اللثة", "أدنى اللسان مع الأسنان"],
    answer: "أقصى اللسان مع الحنك اللحمي",
  },
  {
    question: "أي الحروف تخرج من الشفتين؟",
    options: ["الباء والميم والواو وجزئيًا الفاء", "النون والراء", "العين والهاء", "الطاء والدال"],
    answer: "الباء والميم والواو وجزئيًا الفاء",
  },
  {
    question: "ما هي أقصى مخارج الحروف في الحلق؟",
    options: [
      "الجوف",
      "أقصى الحلق حيث تخرج الهمزة والهاء",
      "وسط الحلق حيث تخرج العين والحاء",
      "أدنى الحلق حيث تخرج الغين والخاء",
    ],
    answer: "أقصى الحلق حيث تخرج الهمزة والهاء",
  },
  {
    question: "ما هي الحروف التي تخرج من وسط الحلق؟",
    options: ["العين والحاء", "الغين والخاء", "الهمزة والهاء", "اللام والنون"],
    answer: "العين والحاء",
  },
  {
    question: "ما هو مخرج حرف الراء؟",
    options: [
      "طرف اللسان مع ما يحاذيه من اللثة",
      "طرف اللسان مع أطراف الثنايا العليا",
      "أقصى الحلق",
      "بطن اللسان",
    ],
    answer: "طرف اللسان مع ما يحاذيه من اللثة",
  },
  {
    question: "من أي مخرج تخرج حروف المد (الألف والواو والياء المدية)؟",
    options: [
      "الجوف",
      "الشفتان",
      "الحلق",
      "اللسان",
    ],
    answer: "الجوف",
  },
  {
    question: "أي الحروف تخرج من أدنى الحلق؟",
    options: ["الغين والخاء", "العين والحاء", "الهمزة والهاء", "الطاء والدال"],
    answer: "الغين والخاء",
  },
  {
    question: "ما هو المخرج الذي يخرج منه حرف الطاء؟",
    options: [
      "طرف اللسان مع أصول الثنايا العليا",
      "وسط اللسان",
      "الشفتان",
      "الجوف",
    ],
    answer: "طرف اللسان مع أصول الثنايا العليا",
  },
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


