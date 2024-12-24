const questions = [
  {
    question: "ما تعريف التجويد لغة واصطلاحًا؟",
    options: [
      "التجويد لغةً هو تحسين الشيء، واصطلاحًا هو إخراج كل حرف من مخرجه مع إعطائه حقه ومستحقه.",
      "التجويد لغةً هو القراءة بتأنٍ، واصطلاحًا هو إتقان النطق بالحروف.",
      "التجويد لغةً واصطلاحًا يعني القراءة بصوت جميل ومتقن.",
      "التجويد لغةً تحسين الصوت، واصطلاحًا تحسين الأداء الصوتي.",
    ],
    answer:
      "التجويد لغةً هو تحسين الشيء، واصطلاحًا هو إخراج كل حرف من مخرجه مع إعطائه حقه ومستحقه.",
    explanation:
      "التجويد في اللغة يعني تحسين الشيء وجعله جيدًا. أما في الاصطلاح فهو علم يُعنى بإتقان الحروف من مخارجها الصحيحة وإعطائها صفاتها اللازمة لتحقيق النطق السليم.",
  },
  {
    question: "ما الفرق بين حق الحرف ومستحق الحرف؟",
    options: [
      "حق الحرف هو صفته الذاتية، ومستحق الحرف هو الصفات العارضة.",
      "حق الحرف هو صفته الذاتية، ومستحق الحرف هو صفته الملازمة.",
      "حق الحرف هو إخراجه من مخرجه، ومستحق الحرف هو كيفية النطق.",
      "حق الحرف هو إعطاؤه زمنه، ومستحق الحرف هو كيفية إخراجه.",
    ],
    answer: "حق الحرف هو صفته الذاتية، ومستحق الحرف هو الصفات العارضة.",
    explanation:
      "حق الحرف يشير إلى صفاته الأساسية كالشدة والاستعلاء، بينما المستحق يتعلق بالصفات التي تظهر نتيجة السياق مثل التفخيم أو الترقيق.",
  },
  {
    question: "ما حكم تعلم التجويد نظريًا والعمل به أثناء التلاوة؟",
    options: [
      "تعلمه والعمل به مستحب.",
      "تعلمه فرض كفاية والعمل به فرض عين.",
      "تعلمه والعمل به فرض عين.",
      "تعلمه والعمل به جائز لكن غير واجب.",
    ],
    answer: "تعلمه فرض كفاية والعمل به فرض عين.",
    explanation:
      "تعلم التجويد من الناحية النظرية فرض كفاية، أي يكفي أن يتعلمه البعض. أما العمل به أثناء التلاوة فهو فرض عين على كل قارئ للقرآن الكريم لتجنب اللحن.",
  },
  {
    question: "متى يجب تفخيم الحاء في التجويد؟",
    options: [
      "الحاء تفخم دائمًا.",
      "الحاء تفخم إذا كانت تأتي بعد حرف مرقق.",
      "الحاء تفخم إذا كانت تأتي بعد حرف مستعل.",
      "الحاء لا تفخم أبدًا.",
    ],
    answer: "الحاء لا تفخم أبدًا.",
    explanation:
      "الناظم نبّه على عدم تفخيم الحاء إذا كانت تأتي بعد حرف مستعل، مثل الحاء في 'حصحص'.",
  },
  {
    question: "ما المقصود باللحن في قراءة القرآن الكريم؟",
    options: [
      "عدم الالتزام بأحكام التجويد.",
      "قراءة القرآن بطريقة جميلة.",
      "قراءة القرآن بصوت منخفض.",
      "فهم معاني القرآن دون قراءته.",
    ],
    answer: "عدم الالتزام بأحكام التجويد.",
    explanation:
      "اللحن في قراءة القرآن يعني الخطأ في التلاوة بسبب الإخلال بأحكام التجويد، وهو ينقسم إلى لحن جلي يؤثر على المعنى ولحن خفي يتعلق بتحسين الأداء.",
  },
  {
    question: "ما حكم ترك التجويد أثناء التلاوة؟",
    options: [
      "جائز في بعض الحالات.",
      "لا يجوز تركه إذا أدى إلى تغيير المعنى.",
      "واجب دائمًا سواء أدى إلى تغيير المعنى أو لم يؤدِ.",
      "لا بأس بتركه إذا كان عن جهل.",
    ],
    answer: "لا يجوز تركه إذا أدى إلى تغيير المعنى.",
    explanation:
      "ترك التجويد يؤدي أحيانًا إلى اللحن الجلي الذي يغير المعنى، وهو محرم شرعًا. أما اللحن الخفي فلا يغير المعنى ولكنه ينافي الإتقان.",
  },
  {
    question: "ما الفرق بين التكلف المحمود والمذموم في التجويد؟",
    options: [
      "التكلف المحمود هو تحسين الصوت، والمذموم هو المغالاة في الأداء.",
      "التكلف المحمود هو الالتزام بالأحكام، والمذموم هو تجاهلها.",
      "التكلف المحمود هو محاكاة نطق العرب في زمن النبوة، والمذموم هو التصنع في الأداء.",
      "التكلف المحمود هو التعلم من المشايخ، والمذموم هو التعلم الفردي.",
    ],
    answer:
      "التكلف المحمود هو محاكاة نطق العرب في زمن النبوة، والمذموم هو التصنع في الأداء.",
    explanation:
      "التكلف المحمود هو بذل الجهد لتحقيق الإتقان، بينما المذموم هو التصنع والافتعال الذي يخرج عن جمال القراءة الطبيعية.",
  },
  {
    question: "ما هو التنبيه الذي ذكره الناظم بخصوص حرف السين؟",
    options: [
      "السّين يجب أن تُفخم دائمًا.",
      "السّين يجب أن تُرَقَّق في كلمات مثل 'مستقيم'.",
      "السّين لا تُنطق في كلمات مثل 'مستقيم'.",
      "السّين لا تؤثر على معنى الكلمات.",
    ],
    answer: "السّين يجب أن تُرَقَّق في كلمات مثل 'مستقيم'.",
    explanation:
      "الناظم نبّه على ترقيق حرف السين في الكلمات التي تحتوي عليه مثل 'مستقيم'.",
  },
  {
    question: "ما هو سبب عدم تفخيم الميم في كلمات مثل 'مخمصَة' و'مرض؟'",
    options: [
      "لأن الميم تفخم دائمًا.",
      "لأن الميم تأتي بعد حرف مفخم.",
      "لأن الميم تأتي بعد حرف مرقق.",
      "الميم دائما ترقق.",
    ],
    answer: "الميم دائما ترقق.",
    explanation:
      "الناظم أوضح أنه يجب عدم تفخيم الميم إذا كانت تأتي بعد حرف مفخم مثل الخاء والراء.",
  },
  {
    question: "ما المقصود بتفخيم الألف في التجويد؟",
    options: [
      "الألف تفخم دائمًا.",
      "الألف تفخم إذا جاء قبلها حرف مفخم.",
      "الألف تفخم إذا جاء قبلها حرف مرقق.",
      "الألف لا تفخم أبدًا.",
    ],
    answer: "الألف تفخم إذا جاء قبلها حرف مفخم.",
    explanation:
      "الألف تتبع ما قبلها؛ فإن كان ما قبلها مفخمًا فُخمَت، وإن كان مرققًا رُققت.",
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

form.addEventListener("submit", handleFormSubmit);
loadQuestion();
