const questions = [
  {
    question: "ماذا يحدث عند إدغام النون الساكنة في اللام؟",
    options: [
      "يتم الإدغام بغنة.",
      "يتم الإدغام بغير غنة.",
      "يتم إخفاء النون.",
      "تظل النون كما هي.",
    ],
    answer: "يتم الإدغام بغير غنة.",
    explanation:
      "عند إدغام النون الساكنة في اللام او الراء، يتم الإدغام بغير غنة.",
  },
  {
    question: "متى لا يتم إدغام النون الساكنة في حروف الادغام؟",
    options: [
      "عندما تأتي النون بعد حرف الميم.",
      "عندما تأتي النون بعد حرف ادغام في كلمة واحدة.",
      "عندما تأتي النون بعد حرف الواو.",
      "عندما تأتي النون بعد حرف النون.",
    ],
    answer: "عندما تأتي النون بعد حرف ادغام في كلمة واحدة.",
    explanation: "النون الساكنة لا تُدغم اذا اتت قبل حرف ادغام في نفس الكلمة مثل صنوان، قنوان، دنيا، بنيان.",
  },
  {
    question: "ما حكم النون الساكنة إذا جاءت قبل حرف القاف؟",
    options: ["إظهار.", "إدغام.", "إخفاء.", "قلقلة."],
    answer: "إخفاء.",
    explanation: "عند تلاقي النون الساكنة مع حرف القاف، تخفى (صف ذا ثنا كم جاد شخص قد سما دم طيبا زد في تقا ضع ظالما).",
  },

  {
    question: "ما هي أقسام المد؟",
    options: [
      "مد طبيعي، مد لازم.",
      "مد طبيعي، مد فرعي.",
      "مد لازم، مد متصل.",
      "مد واجب، مد جائز.",
    ],
    answer: "مد طبيعي، مد فرعي.",
    explanation: "المد ينقسم إلى نوعين رئيسيين: المد الطبيعي والمد الفرعي.",
  },
  {
    question: "متى يحدث المد في كلمة 'موسى'؟",
    options: [
      "في حرف الألف والواو.",
      "في حرف السين.",
      "في حرف الميم.",
      "ليس هناك مد.",
    ],
    answer: "في حرف الألف والواو.",
    explanation:
      "المد يحدث في الألف و الواو  في اسم 'موسى' ويُعتبر مدًا طبيعيًا.",
  },
  {
    question: "ما هو نوع المد في هؤلاء؟",
    options: [
      "مد جائز منفصل في ها و واجب متصل في اولاء.",
      "مد واجب متصل.",
      "مد جائز منفصل.",
      "ليس هناك مد.",
    ],
    answer: "مد جائز منفصل في ها و واجب متصل في اولاء.",
    explanation: "مد جائز منفصل في ها  لأن ها منفصلة عن اولاء و واجب متصل في اولاء.",
  },

  {
    question: "ماذا يعني الوقف القبيح؟",
    options: [
      "الوقف عند انقطاع النفس.",
      "هو الوقف على كلمة قرآنية بينها و بين ما بعدها تعلق لفظي و معنوي.",
      "إضافة حرف للوقف.",
      "الوقف في الحروف المتحركة.",
    ],
    answer: "هو الوقف على كلمة قرآنية بينها و بين ما بعدها تعلق لفظي و معنوي.",
    explanation: "الوقف القبيح يعطي معنى ناقصا او خاطئا.",
  },
  {
    question: "ماذا يفعل القارئ إذا وقف وقفا قبيحا بسبب انقطاع نفسه؟",
    options: [
      "يواصل القراءة دون الوقف.",
      "يعيد التلاوة من حيث يعطي معنى كاملا.",
      "يجب عليه إعادة القراءة من أول الآية.",
      "يواصل القراءة من حيث توقف.",
    ],
    answer: "يعيد التلاوة من حيث يعطي معنى كاملا.",
    explanation:
      "الوقف القبيح يعطي معنى ناقصا او خاطئا لا يعتمد الوقف عليه فان وقف عليه مضطرا اعاد.",
  },
  {
    question: "ما هي علامة المد اللازم؟",
    options: ["ليس له علامة.", " الميم.", " الجيم.", "قلي."],
    answer: " الميم.",
    explanation: " الميم هي علامة الوقف اللازم.",
  },

  {
    question: "كيف رُسمت كلمة 'أن لا' في سورة يس؟",
    options: ["موصولة.", "مقطوعة.", "غير موجودة.", "موصولة في بداية السورة."],
    answer: "مقطوعة.",
    explanation: `||فَاقْطَعْ بِعَشْرِ كَلِمَاتٍ أنْ لاَّ ... مَعْ مَلْجَإٍ وَلاَ إِلَهَ إِلاَّ

وَتَعْبُدُوا يَاسِينَ ثَانِي هُودَ لاَ ... يُشْرِكْنَ تُشْرِكْ يَدْخُلْنَ تعلوا على.`,
  },
  {
    question: "كيف رُسمت كلمة 'بئسما' في 'بئسما خلفتموني' في سورة الأعراف؟",
    options: ["موصولة.", "مقطوعة.", "غير موجودة.", "موصولة في بداية السورة."],
    answer: "موصولة.",
    explanation: ` || كُلِّ مَا سَأَلْتُمُوهُ وَاخْتُلِفْ ... رُدُّوا كَذَا قُلْ بِئْسَمَا وَالْوَصْلُ صِفْ

خَلَفْتُمُونِي وَاشْتَرَوْا فِي مَا اقْطَعَا ... أُوحِيْ أَفَضْتُمُ اشْتَهَتْ يَبْلُوا مَعَا

   `,
  },
  {
    question: "كيف رُسمت كلمة 'أَيْنَما' في سورة الشعراء؟",
    options: ["موصولة.", "مقطوعة.", "غير موجودة.", "موصولة في بداية السورة."],
    answer: "مقطوعة.",
    explanation: `فَأَيْنَمَا كَالنَّحْلِ صِلْ وَمُخْتَلِفْ ... فِي الشُّعَرَا الأَحْزَابِ وَالنِّسَا وُصِفْ
    `,
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
