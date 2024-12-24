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

  // Update correct answer div
  const correctAnswerText = document.getElementById("correct-answer");
  correctAnswerText.textContent = correctAnswer;

  // Update user answer div
  const userAnswerText = document.getElementById("user-answer");
  userAnswerText.textContent = userAnswer;

  const answerStatus = document.getElementById("answer-status");
  const userAnswerDiv = document.getElementById("user-answer-div");
  if (isCorrect) {
    answerStatus.textContent = "صحيحة";
    userAnswerDiv.classList.add("correct");
    userAnswerDiv.classList.remove("wrong");
    score++;
    console.log(score)
  } else {
    answerStatus.textContent = "خاطئة";
    userAnswerDiv.classList.add("wrong");
    userAnswerDiv.classList.remove("correct");
  }

  // Show result container and manage next question button
  const resultContainer = document.getElementById("result");
  resultContainer.style.display = "block";
  form.style.display = "none";

  const nextQuestionButton = document.getElementById("next-question");
  nextQuestionButton.style.display = "block";
  nextQuestionButton.onclick = () => {
    currentQuestionIndex++;
    resultContainer.style.display = "none";
    nextQuestionButton.style.display = "none";
    form.style.display = "block";
    loadQuestion();
  };
}


function retryQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  finalResultContainer.style.display = "none";
  document.getElementById("question-container").style.display = "block";
  resultContainer.style.display = "none";
  loadQuestion();
}

function showFinalResult() {
  const totalScore = questions.length;
  const percentage = (score / totalScore) * 100;

  // Update score and total score
  document.getElementById("score").textContent = score;
  document.getElementById("total-score").textContent = totalScore;

  // Get the final message container
  const finalMessage = document.getElementById("final-message");

  if (percentage >= 80) {
    finalMessage.textContent = "🎉 رائع جدًا! لقد أبدعت! استمر في التميز! 🎉";
    finalMessage.className = "celebration";
  } else {
    finalMessage.textContent =
      "لا بأس! حاول مرة أخرى، وستتحسن! التقدم المستمر هو الأهم. 💪";
    finalMessage.className = "encouragement";
  }

  // Show final result container
  document.getElementById("final-result").style.display = "block";
  document.getElementById("question-container").style.display = "none";
}





form.addEventListener("submit", handleFormSubmit);
loadQuestion();
