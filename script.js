const questions = [
  {
    question: "ما هي صفة الحروف التي تتميز بها الحروف الشديدة؟",
    options: [
      "القوة والصرامة في النطق",
      "الرخاوة واللين",
      "الاحتكاك أثناء النطق",
      "الإطباق مع الشفتين",
    ],
    answer: "القوة والصرامة في النطق",
  },
  {
    question: "أي من هذه الحروف تتميز بصفة الاستعلاء؟",
    options: ["ص", "د", "م", "ر"],
    answer: "ص",
  },
  {
    question: "ما الذي يحدث للصوت عند نطق الحروف المستعلية؟",
    options: [
      "ينخفض الصوت نحو أسفل الفم",
      "يرتفع الصوت نحو الحنك الأعلى",
      "يتوزع الصوت بالتساوي في الفم",
      "ينحبس الصوت تمامًا دون جريان",
    ],
    answer: "يرتفع الصوت نحو الحنك الأعلى",
  },
  {
    question: "أي من الحروف التالية تتميز بصفة التكرير؟",
    options: ["ر", "ل", "م", "ن"],
    answer: "ر",
  },
  {
    question: "ما الذي يحدث للصوت عند نطق الحروف المطبقة؟",
    options: [
      "ينتشر الصوت في كل اتجاه داخل الفم",
      "ينحصر الصوت بين اللسان والحنك الأعلى",
      "يخرج الصوت مع جريان بسيط",
      "يتوقف الصوت تمامًا داخل الحلق",
    ],
    answer: "ينحصر الصوت بين اللسان والحنك الأعلى",
  },
  {
    question: "ما هو تعريف الهمس؟",
    options: [
      "هو قوة الصوت المصاحب للحروف عند نطقها",
      "هو الصوت الهادئ الذي يصاحب الحروف عند نطقها",
      "هو الخفاء في السمع نتيجة انفتاح الوترين الصوتيين وعدم اهتزازهما، وجريان كثير لهواء النفس",
      "هو الصوت الناتج عن احتكاك الحروف بالحنك",
    ],
    answer:
      "هو الخفاء في السمع نتيجة انفتاح الوترين الصوتيين وعدم اهتزازهما، وجريان كثير لهواء النفس",
  },
  {
    question: "أي من هذه الحروف لا تتميز بصفة القلقلة؟",
    options: ["ج", "ط", "ق", "ع"],
    answer: "ع",
  },
  {
    question: "أي من التالي صحيح فيما يتعلق بالإذلاق والإصمات؟",
    options: [
      "الإذلاق والإصمات هما صفتان من علم التجويد ولهما تأثير على طريقة نطق الحروف.",
      "الإذلاق والإصمات هما صفتان من علم الصرف ولا علاقة لهما بعلم التجويد.",
      "الإذلاق والإصمات تتعلقان بتحديد الحروف القوية والضعيفة في علم التجويد.",
      "الإذلاق والإصمات هما صفتان مرتبطتان بكيفية تماثل الحروف في الأصوات في علم التجويد.",
    ],
    answer:
      "الإذلاق والإصمات هما صفتان من علم الصرف ولا علاقة لهما بعلم التجويد.",
  },
  {
    question: "أي من هذه الحروف تتميز بصفة الانفتاح؟",
    options: ["ب", "ظ", "ض", "ص"],
    answer: "ب",
  },
  {
    question: "كل التالي من الأخطاء الشائعة عند النطق بالقلقلة إلا:",
    options: [
      "خلط صوتها بحركة من الحركات الثلاث",
      "ختم صوتها بهاء",
      "مط صوتها و تطويله عن حده",
      "بتر صوت الحرف المقلقل عما بعده",
    ],
    answer: "ختم صوتها بهاء",
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
    answerStatus.className = "correct"; // Apply green style
    answerStatus.textContent = "صحيحة";
  } else {
    answerStatus.className = "wrong"; // Apply red style
    answerStatus.textContent = "خاطئة";
  }

  correctAnswerText.textContent = correctAnswer;
  userAnswerText.textContent = userAnswer;

  resultContainer.style.display = "block";
  form.style.display = "none"; // Hide the form temporarily
  const nextQuestionButton = document.getElementById("next-question");
  nextQuestionButton.style.display = "block"; // Show the next question button

  nextQuestionButton.onclick = () => {
    currentQuestionIndex++;
    resultContainer.style.display = "none"; // Hide the result
    nextQuestionButton.style.display = "none"; // Hide the button again
    form.style.display = "block"; // Show the form again
    loadQuestion(); // Load the next question
  };
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
