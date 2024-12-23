const questions = [
  {
    question: "من هو الناظم المعروف في هذا النص؟",
    options: ["أبو الخير شمس الدين محمد بن محمد بن علي بن يوسف المعروف بابن الجزري", "الإمام الشاطبي", "الإمام السوسي", "الإمام الدوري"],
    answer: "أبو الخير شمس الدين محمد بن محمد بن علي بن يوسف المعروف بابن الجزري",
  },
  {
    question: "ما هي القصة العجيبة عن ولادة ابن الجزري؟",
    options: [
      "أن أباه كان عقيمًا، ثم دعا الله أثناء حجّه إلى بيت الله الحرام أن يرزقه ولدًا صالحًا، وعاد ليجد أن زوجته قد حملت به",
      "أنه وُلد في بيت عالم مشهور",
      "أنه وُلد بعد أن دعا والده في صلاة الفجر",
      "أن والدته حملت به بعد صيام طويل",
    ],
    answer: "أن أباه كان عقيمًا، ثم دعا الله أثناء حجّه إلى بيت الله الحرام أن يرزقه ولدًا صالحًا، وعاد ليجد أن زوجته قد حملت به",
  },
  {
    question: "كم كان عمر ابن الجزري عندما حفظ القرآن؟",
    options: ["ثلاث عشرة سنة", "عشر سنوات", "عشرون سنة", "خمسة عشرة سنة"],
    answer: "ثلاث عشرة سنة",
  },
  {
    question: "ما هي بعض المؤلفات التي كتبها ابن الجزري؟",
    options: [
      "النشر في القراءات العشر، التيسير، غاية النهاية في طبقات القراء",
      "القراءات الكبرى، التفسير المحرر",
      "المفصل في القراءات، الأحاديث المتواترة",
      "الشرح الكبير، التفسير البلاغي",
    ],
    answer: "النشر في القراءات العشر، التيسير، غاية النهاية في طبقات القراء",
  },
  {
    question: "ما هي أهم الكتب التي كتبها ابن الجزري في مجال القراءات؟",
    options: [
      "النشر في القراءات العشر، التيسير، الدرة المضية",
      "النور في القراءات العشر، جامع القراءات",
      "الهدى في القراءات، التفسير الكبير",
      "الكتاب في القراءات، الغاية في التفسير",
    ],
    answer: "النشر في القراءات العشر، التيسير، الدرة المضية",
  },
  {
    question: "متى توفي ابن الجزري؟",
    options: ["سنة 833 هـ", "سنة 842 هـ", "سنة 750 هـ", "سنة 900 هـ"],
    answer: "سنة 833 هـ",
  },
  {
    question: "من هو عاصم بن أبي النجود؟",
    options: [
      "أحد القراء السبعة الذين اشتهروا بالقراءة على التابعين، وقد قرأ ابن الجزري عليه",
      "إمام من أئمة الحديث",
      "أحد فقهاء الشام",
      "من علماء اللغة العربية",
    ],
    answer: "أحد القراء السبعة الذين اشتهروا بالقراءة على التابعين، وقد قرأ ابن الجزري عليه",
  },
  {
    question: "من هو التلميذ الذي قرأ على ابن الجزري في هذا النص؟",
    options: [
      "الإمام الشاطبي",
      "الشيخ السيوطي",
      "الشيخ الألباني",
      "الشيخ ابن تيمية",
    ],
    answer: "الإمام الشاطبي",
  },
  {
    question: "كيف نال ابن الجزري شهرة في علم القراءات؟",
    options: [
      "بفضل تأليفه للعديد من الكتب التي تناولت علم القراءات، بالإضافة إلى أنه كان إمامًا في هذا المجال وأخذ عنه العديد من العلماء",
      "بفضل رحلاته العلمية إلى مختلف البلدان",
      "بسبب دعمه لمؤسسات تعليمية في القراءات",
      "بفضل تقديمه العديد من البرامج التلفزيونية",
    ],
    answer: "بفضل تأليفه للعديد من الكتب التي تناولت علم القراءات، بالإضافة إلى أنه كان إمامًا في هذا المجال وأخذ عنه العديد من العلماء",
  },
  {
    question: "أين و متى وُلد ابن الجزري؟",
    options: ["في دمشق سنة 751 هـ", "في مكة سنة 750 هـ", "في بغداد سنة 753 هـ", "في القاهرة سنة 752 هـ"],
    answer: "في دمشق سنة 751 هـ",
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
