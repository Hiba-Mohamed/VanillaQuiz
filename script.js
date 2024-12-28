const questions = [
  {
    question: "كيف رسمت كلمة 'رحمة' في سورة الزخرف؟",
    options: ["بالهاء.", "بالتاء المبسوطة.", "بالتاء المربوطة.", "غير موجودة."],
    answer: "بالتاء المبسوطة.",
    explanation:
      "ورحمتا الزُّخْرُفِ بِالتَا زَبرَهْ ... الاَعْرَافِ رُومٍ هُودٍ كَافِ الْبَقَرَهْ.",
  },
  {
    question: "كيف رسمت كلمة 'امرأة' في سورة يوسف؟",
    options: ["بالهاء.", "بالتاء المبسوطة.", "بالتاء المربوطة.", "غير موجودة."],
    answer: "بالتاء المبسوطة.",
    explanation:
      "وَامْرَأَتٌ يُوسُفَ عِمْرَانَ الْقَصَصْ ... تَحْرِيْمَ مَعْصِيَتْ بِقَدْ سَمِعْ يُخَصْ .",
  },
  {
    question: "كيف رسمت كلمة 'معصية' في سورة المجادلة؟",
    options: ["بالهاء.", "بالتاء المبسوطة.", "بالتاء المربوطة.", "غير موجودة."],
    answer: "بالتاء المبسوطة.",
    explanation:
      "وَامْرَأَتٌ يُوسُفَ عِمْرَانَ الْقَصَصْ ... تَحْرِيْمَ مَعْصِيَتْ بِقَدْ سَمِعْ يُخَصْ .",
  },
  {
    question: "كيف رسمت كلمة 'قرة' في سورة القصص؟",
    options: ["بالهاء.", "بالتاء المبسوطة.", "بالتاء المربوطة.", "غير موجودة."],
    answer: "بالتاء المبسوطة.",
    explanation: "قُرَّتُ عَيْنٍ جَنَّتٌ فِي وَقَعَتْ ... فِطْرَتْ بَقِيَّتْ وَابْنَتْ وَكَلِمَتْ.",
  },
  {
    question: "ما هو تعريف همز الوصل؟",
    options: [
      "همزة يؤتى بها للتمكن من البدء بالساكن.",
      "همزة تُكتب وتُلفظ دائمًا.",
      "همزة تُحذف في الوقف.",
      "همزة تأتي في نهاية الكلمة.",
    ],
    answer: "همزة يؤتى بها للتمكن من البدء بالساكن.",
    explanation:
      "همزة الوصل تُكتب في أول الكلمة ولا تُلفظ عند وصلها بما قبلها.",
  },
  {
    question: "ما هي حركة همزة الوصل عند البدء بالفعل 'اركض'؟",
    options: ["مضمومة.", "مفتوحة.", "مكسورة.", "ساكنة."],
    answer: "مضمومة.",
    explanation: "إذا كان ثالث الفعل مضموماً ضماً لازماً، فإن همزة الوصل تُضم.",
  },
  {
    question: "ما هي حركة همزة الوصل عند البدء بالفعل 'ابنوا'؟",
    options: ["مضمومة.", "مفتوحة.", "مكسورة.", "ساكنة."],
    answer: "مكسورة.",
    explanation:
      "إذا كان ثالث الفعل مضموماً ضماً عارضاً، فإن همزة الوصل تُكسر.",
  },
  {
    question: "كيف يُنطق الحرف الأخير في الوقف؟",
    options: [
      "يُنطق ساكنًا.",
      "يُنطق متحركًا.",
      "يُنطق ممدودًا.",
      "لا يُنطق نهائيًا.",
    ],
    answer: "يُنطق ساكنًا.",
    explanation: "الحرف الأخير يُسكن عند الوقف حسب قواعد التجويد.",
  },
  {
    question: "ما هي قاعدة الوقف على كلمة منتهية بالتاء المربوطة؟",
    options: ["تُنطق هاء.", "تُنطق تاء.", "تُحذف التاء.", "لا تُنطق."],
    answer: "تُنطق هاء.",
    explanation: "عند الوقف على التاء المربوطة تُنطق كالهاء.",
  },
  {
    question: "كيف يتم الوقف على كلمة منتهية بألف ممدودة؟",
    options: [
      "تُمد الألف.",
      "تُحذف الألف.",
      "يُوقف على الحرف قبل الألف.",
      "تُقلب الألف إلى همزة.",
    ],
    answer: "تُمد الألف.",
    explanation: "عند الوقف تُمد الألف دون تغيير نطقها.",
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
    console.log(score);
  } else {
    answerStatus.textContent = "خاطئة";
    userAnswerDiv.classList.add("wrong");
    userAnswerDiv.classList.remove("correct");
  }

  // Display explanation
  const explanationDiv = document.getElementById("explanation");
  explanationDiv.textContent = `الشرح: ${questions[currentQuestionIndex].explanation}`;

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
  document.getElementById("percentage").textContent = `${percentage}%`;

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
function showNextQuestion() {
  const quizContainer = document.querySelector(".quiz-container");

  // Add the zoom-in animation class
  quizContainer.classList.add("zoom-in");

  // Wait for the animation to complete, then remove the class
  setTimeout(() => {
    quizContainer.classList.remove("zoom-in");

    // Update the question content here
    const questionText = document.getElementById("question-text");
  }, 800); // Match the duration of the animation (800ms)
}
const nextQuestionButton = document.getElementById("next-question");

nextQuestionButton.addEventListener("click", showNextQuestion);

form.addEventListener("submit", handleFormSubmit);
loadQuestion();
