const questions = [
  {
    question: "ما هو المخرج الخاص بحرف الضاد؟",
    options: [
      "طرف اللسان مع الأسنان العليا.",
      "جانب اللسان مع الأضراس العليا.",
      "وسط اللسان مع الحنك.",
      "قاعدة الحلق.",
    ],
    answer: "جانب اللسان مع الأضراس العليا.",
    explanation:
      "يتميز حرف الضاد بخروجه من جانب اللسان الملامس للأضراس العليا.",
  },
  {
    question: "ما هي الصفة الفريدة لحرف الضاد؟",
    options: ["الإطباق.", "الاستطالة.", "الرخاوة.", "الجهر."],
    answer: "الاستطالة.",
    explanation: "صفة الاستطالة تميز حرف الضاد عن باقي الحروف.",
  },
  {
    question: "متى يحدث إدغام الميم الساكنة؟",
    options: [
      "عندما تأتي الميم الساكنة في بداية الكلمة.",
      "عندما تأتي الميم الساكنة بعد حرف نون ساكنة.",
      "عندما تأتي الميم الساكنة قبل ميم متحركة.",
      "عندما تأتي الميم الساكنة في نهاية الكلمة.",
    ],
    answer: "عندما تأتي الميم الساكنة قبل ميم متحركة.",
    explanation:
      "إدغام الميم الساكنة في الميم المتحركة يحدث عند التقاء ميم ساكنة مع ميم متحركة، ويتم الإدغام مع غنة.",
  },
  {
    question: "متى يحدث الإخفاء الشفوي للميم؟",
    options: [
      "عندما تأتي الميم الساكنة قبل حرف الفاء.",
      "عندما تأتي الميم الساكنة قبل حرف الباء.",
      "عندما تأتي الميم الساكنة قبل حرف الميم.",
      "عندما تأتي الميم الساكنة قبل حرف اللام.",
    ],
    answer: "عندما تأتي الميم الساكنة قبل حرف الباء.",
    explanation:
      "الإخفاء الشفوي يحدث عندما تأتي الميم الساكنة قبل حرف الباء، حيث يتم الإخفاء بقدر ما يسمح به الصوت مع خروج الشفاه.",
  },
  {
    question: "متى تُفَخَّم الراء؟",
    options: [
      "إذا كانت مضمومة أو مفتوحة.",
      "إذا كانت بعد حرف مستعلٍ مضموم.",
      "إذا كانت ساكنة بعد كسرة عارضة.",
      "إذا كانت في نهاية الكلمة.",
    ],
    answer: "إذا كانت مضمومة أو مفتوحة.",
    explanation: "تُفَخَّم الراء إذا كانت مضمومة أو مفتوحة .",
  },
  {
    question: "ما هي أحكام الميم الساكنة؟",
    options: [
      "الإخفاء، الإدغام، الإظهار.",
      "الإخفاء، الإدغام، التجويد.",
      "الإظهار، الإخفاء، التسهيل.",
      "الإدغام، التسهيل، الإظهار.",
    ],
    answer: "الإخفاء، الإدغام، الإظهار.",
    explanation: "أحكام الميم الساكنة هي الإخفاء، الإدغام، والإظهار.",
  },
  {
    question: "ما هي أنواع الغنة؟",
    options: [
      "غنة ناقصة، غنة كاملة، غنة أكمل ما تكون، غنة انقص ما تكون.",
      "غنة خفيفة، غنة شديدة، غنة مستترة.",
      "غنة جهرية، غنة مهموسة.",
      "غنة واضحة، غنة خفية.",
    ],
    answer: "غنة ناقصة، غنة كاملة، غنة أكمل ما تكون، غنة انقص ما تكون.",
    explanation: `أنواع الغنة هي: 
    - غنة أكمل ما تكون: في النون والميم المشددتين.
    - غنة كاملة: تكون في النون و الميم المخفاتين.
    - غنة ناقصة: تكون في النون و الميم الساكنتين  المظهرتين. 
    - غنة انقص ما تكون: في حالة النون و الميم المتحركتين.`,
  },
  {
    question: "ما هو المخرج الخاص بحرف الظاء؟",
    options: [
      "طرف اللسان مع أطراف الثنايا العليا.",
      "جانب اللسان مع الأضراس العليا.",
      "وسط اللسان مع الحنك.",
      "قاعدة الحلق.",
    ],
    answer: "طرف اللسان مع أطراف الثنايا العليا.",
    explanation: "يخرج حرف الظاء من طرف اللسان مع أطراف الثنايا العليا.",
  },
  {
    question: "ما هي الصفة المشتركة بين الضاد والظاء؟",
    options: ["الإنفتاح.", "الاستعلاء.", "التفشي.", "الاستطالة."],
    answer: "الاستعلاء.",
    explanation:
      "الضاد والظاء يشتركان في الصفات الجهرية، الرخاوة، الاستعلاء، الإطباق، والإصمات.",
  },
  {
    question: "ما هو نوع الغنة في النون والميم المشددتين؟",
    options: [
      "غنة أكمل ما تكون وصلاً ووقفًا.",
      "غنة كاملة.",
      "غنة ناقصة.",
      "غنة انقص ما تكون.",
    ],
    answer: "غنة أكمل ما تكون وصلاً ووقفًا.",
    explanation:
      "النون والميم المشددتان تُنطقان بغنة أكمل ما تكون سواء في حالة الوصل أو الوقف، وتخرج الغنة من الخيشوم بمقدار حركتين.",
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
