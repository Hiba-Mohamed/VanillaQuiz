const questions = [
  {
    question: "ما الحالات التي تُفَخَّم فيها الراء الساكنة؟",
    options: [
      "إذا كانت بعد حرف مكسور.",
      "إذا كانت بعد حرف مضموم أو مفتوح.",
      "إذا كانت بعد ياء ساكنة.",
      "إذا كانت في نهاية الكلمة.",
    ],
    answer: "إذا كانت بعد حرف مضموم أو مفتوح.",
    explanation: "الراء تُفَخَّم إذا كانت ساكنة وسبقها حرف مضموم أو مفتوح.",
  },
  {
    question: "متى تُرَقَّق الراء الساكنة؟",
    options: [
      "إذا سبقتها كسرة أصلية مباشرة.",
      "إذا كانت بعد حرف مستعلٍ مضموم.",
      "إذا كانت في نهاية الكلمة.",
      "إذا سبقتها فتحة.",
    ],
    answer: "إذا سبقتها كسرة أصلية مباشرة.",
    explanation:
      "تُرَقَّق الراء الساكنة إذا سبقها كسرة أصلية مباشرة مثل 'فرِيق'.",
  },
  {
    question: "ما الحكم في الوقف على كلمة 'مِصرَ'؟",
    options: [
      "التفخيم فقط.",
      "الترقيق فقط.",
      "التفخيم والترقيق جائز حسب القراءة.",
      "الإمالة فقط.",
    ],
    answer: "التفخيم والترقيق جائز حسب القراءة.",
    explanation:
      "في كلمة 'مِصرَ'، يجوز التفخيم أو الترقيق حسب القراءات المختلفة.",
  },
  {
    question: "متى تُفَخَّم لام لفظ الجلالة؟",
    options: [
      "إذا سبقتها فتحة أو ضمة.",
      "إذا سبقتها كسرة.",
      "في جميع الحالات.",
      "إذا كانت في بداية الكلمة.",
    ],
    answer: "إذا سبقتها فتحة أو ضمة.",
    explanation:
      "تُفَخَّم لام لفظ الجلالة إذا سبقتها فتحة أو ضمة مثل 'قالَ الله' أو 'رُسُلُ الله'.",
  },
  {
    question: "ما الفرق بين الإطباق والاستعلاء؟",
    options: [
      "الإطباق صفة لحروف التفخيم فقط.",
      "الإطباق صفة خاصة بحروف الإطباق فقط، بينما الاستعلاء يشمل جميع الحروف المستعلية.",
      "لا يوجد فرق بينهما.",
      "الإطباق يعني التقاء طرفي الفم.",
    ],
    answer:
      "الإطباق صفة خاصة بحروف الإطباق فقط، بينما الاستعلاء يشمل جميع الحروف المستعلية.",
    explanation:
      "الإطباق صفة خاصة بالصاد، الضاد، الطاء، الظاء، أما الاستعلاء فيشمل كل الحروف المستعلية.",
  },
  {
    question: "ما حكم تفخيم الراء إذا كانت مكسورة؟",
    options: [
      "تُرَقَّق دائمًا.",
      "تُفَخَّم دائمًا.",
      "تُفَخَّم في بعض الحالات.",
      "تُرَقَّق إذا سبقتها ياء.",
    ],
    answer: "تُرَقَّق دائمًا.",
    explanation: "الراء المكسورة تُرَقَّق دائمًا مثل 'رِياح'.",
  },
  {
    question: "متى تُرَقَّق الراء في آخر الكلمة؟",
    options: [
      "إذا كانت ساكنة وسبقها حرف مكسور.",
      "إذا كانت مفتوحة.",
      "إذا كانت مضمومة.",
      "إذا كانت بعد حرف استعلاء.",
    ],
    answer: "إذا كانت ساكنة وسبقها حرف مكسور.",
    explanation: "الراء تُرَقَّق إذا كانت ساكنة وسبقها حرف مكسور مثل 'فِرْ'.",
  },
  {
    question: "ما حكم تفخيم الراء في كلمة 'مَرْيَمْ' عند الوقف؟",
    options: [
      "تُفَخَّم دائمًا.",
      "تُرَقَّق دائمًا.",
      "يجوز التفخيم أو الترقيق.",
      "تُفَخَّم إذا سبقتها فتحة.",
    ],
    answer: "تُفَخَّم دائمًا.",
    explanation:
      "الراء تُفَخَّم عند الوقف في كلمة 'مَرْيَمْ' لأنها ساكنة وقبلها حرف مفتوح.",
  },
  {
    question: "ما الأحرف التي تُفَخَّم دائمًا؟",
    options: [
      "حروف الاستعلاء.",
      "حروف الاستفال.",
      "حروف الإطباق فقط.",
      "الحروف المرققة.",
    ],
    answer: "حروف الاستعلاء.",
    explanation:
      "حروف الاستعلاء (خ، ص، ض، ط، ظ، غ، ق) تُفَخَّم دائمًا إلا إذا كانت مكسورة.",
  },
  {
    question: "ما الحكم في تفخيم الراء في كلمة 'فرعون'؟",
    options: [
      "تُفَخَّم دائمًا.",
      "تُرَقَّق دائمًا.",
      "تُفَخَّم إذا وقعت في بداية الكلمة.",
      "تُرَقَّق إذا كانت مكسورة.",
    ],
    answer: "تُرَقَّق دائمًا.",
    explanation:
      "الراء ترقق في 'فرعون' لأنها ساكنة وسبقها حرف مكسور.",
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

nextQuestionButton
  .addEventListener("click", showNextQuestion);


form.addEventListener("submit", handleFormSubmit);
loadQuestion();
