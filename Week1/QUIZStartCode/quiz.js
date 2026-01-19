// DOMS ELEMENTS  ---------------------------------------------------------
const dom_quiz = document.querySelector("#quiz");
const dom_question = document.querySelector("#question");
const dom_choiceA = document.querySelector("#A");
const dom_choiceB = document.querySelector("#B");
const dom_choiceC = document.querySelector("#C");
const dom_choiceD = document.querySelector("#D");
const dom_scoreContainer = document.querySelector("#scoreContainer");
const dom_scoreText = document.querySelector("#scoreText");
const dom_scoreImage = document.querySelector("#scoreImage");
const dom_start = document.querySelector("#start");
const dom_editView = document.querySelector("#editView");
const dom_editDialog = document.querySelector("#editDialog");
const dom_questionsList = document.querySelector("#questionsList");
const dom_addQuestionBtn = document.querySelector("#addQuestionBtn");
const dom_editQuizBtn = document.querySelector("#editQuizBtn");
const dom_playQuizBtn = document.querySelector("#playQuizBtn");
const dom_cancelBtn = document.querySelector("#cancelBtn");
const dom_saveBtn = document.querySelector("#saveBtn");
const dom_dialogTitle = document.querySelector("#dialogTitle");

dom_start.addEventListener("click", onStart);
dom_addQuestionBtn.addEventListener("click", () => openEditDialog());
dom_editQuizBtn.addEventListener("click", showEditView);
dom_playQuizBtn.addEventListener("click", showStartView);
dom_cancelBtn.addEventListener("click", closeEditDialog);
dom_saveBtn.addEventListener("click", saveQuestion);

// DATA  ---------------------------------------------------------
let questions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets",
    choiceD: "I don't know !",
    correct: "C",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C",
  },
];
let runningQuestionIndex = 0;
let score = 0;
let editingIndex = -1; // -1 means creating new question

// FUNCTIONS ---------------------------------------------------------

// Hide a given element
function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}

function onStart() {
  runningQuestionIndex = 0;
  score = 0;
  
  hide(dom_start);
  show(dom_quiz);
  hide(dom_scoreContainer);
  hide(dom_editView);
  
  renderQuestion();
}

function renderQuestion() {
  let q = questions[runningQuestionIndex];

  dom_question.textContent = q.title;
  dom_choiceA.textContent = q.choiceA;
  dom_choiceB.textContent = q.choiceB;
  dom_choiceC.textContent = q.choiceC;
  dom_choiceD.textContent = q.choiceD;
}

function checkAnswer(answer) {
  onPlayerSubmit(answer);
}

function onPlayerSubmit(answer) {
  if (answer === questions[runningQuestionIndex].correct) {
    score += 100 / questions.length;
  }
  
  runningQuestionIndex++;
  
  if (runningQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    hide(dom_quiz);
    renderScore();
  }
}

function renderScore() {
  show(dom_scoreContainer);
  
  let scorePerCent = Math.round(score);
  
  dom_scoreText.textContent = `SCORE: ${scorePerCent}%`;
  
  let emojiSrc = "";
  if (scorePerCent < 20) {
    emojiSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23ff8c00'/%3E%3Ccircle cx='35' cy='40' r='5' fill='%23000'/%3E%3Ccircle cx='65' cy='40' r='5' fill='%23000'/%3E%3Cpath d='M30 70 Q50 60 70 70' stroke='%23000' stroke-width='3' fill='none'/%3E%3C/svg%3E";
  } else if (scorePerCent >= 20 && scorePerCent < 40) {
    emojiSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23ff0000'/%3E%3Ccircle cx='35' cy='40' r='5' fill='%23000'/%3E%3Ccircle cx='65' cy='40' r='5' fill='%23000'/%3E%3Cpath d='M30 68 Q50 62 70 68' stroke='%23000' stroke-width='3' fill='none'/%3E%3C/svg%3E";
  } else if (scorePerCent >= 40 && scorePerCent < 60) {
    emojiSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23ffff00'/%3E%3Ccircle cx='35' cy='40' r='5' fill='%23000'/%3E%3Ccircle cx='65' cy='40' r='5' fill='%23000'/%3E%3Cline x1='30' y1='65' x2='70' y2='65' stroke='%23000' stroke-width='3'/%3E%3C/svg%3E";
  } else if (scorePerCent >= 60 && scorePerCent < 80) {
    emojiSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23bada55'/%3E%3Ccircle cx='35' cy='40' r='5' fill='%23000'/%3E%3Ccircle cx='65' cy='40' r='5' fill='%23000'/%3E%3Cpath d='M30 65 Q50 75 70 65' stroke='%23000' stroke-width='3' fill='none'/%3E%3C/svg%3E";
  } else {
    emojiSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%2300ff00'/%3E%3Ccircle cx='35' cy='40' r='5' fill='%23000'/%3E%3Ccircle cx='65' cy='40' r='5' fill='%23000'/%3E%3Cpath d='M25 60 Q50 80 75 60' stroke='%23000' stroke-width='3' fill='none'/%3E%3C/svg%3E";
  }

  dom_scoreImage.src = emojiSrc;
}

function showEditView() {
  hide(dom_start);
  hide(dom_quiz);
  hide(dom_scoreContainer);
  show(dom_editView);

  dom_editQuizBtn.classList.add("active");
  dom_playQuizBtn.classList.remove("active");

  renderQuestionsList();
}

function showStartView() {
  hide(dom_editView);
  show(dom_start);

  dom_editQuizBtn.classList.remove("active");
  dom_playQuizBtn.classList.add("active");
}

function renderQuestionsList() {
  dom_questionsList.innerHTML = "";

  questions.forEach((q, index) => {
    const questionItem = document.createElement("div");
    questionItem.className = "question-item";

    const questionText = document.createElement("div");
    questionText.className = "question-text";
    questionText.textContent = q.title;

    const actions = document.createElement("div");
    actions.className = "question-actions";

    const editIcon = document.createElement("span");
    editIcon.className = "edit-icon";
    editIcon.textContent = "✏️";
    editIcon.onclick = () => openEditDialog(index);

    const deleteIcon = document.createElement("span");
    deleteIcon.className = "delete-icon";
    deleteIcon.textContent = "🗑️";
    deleteIcon.onclick = () => deleteQuestion(index);

    actions.appendChild(editIcon);
    actions.appendChild(deleteIcon);

    questionItem.appendChild(questionText);
    questionItem.appendChild(actions);

    dom_questionsList.appendChild(questionItem);
  });
}

function openEditDialog(index = -1) {
  editingIndex = index;

  if (index === -1) {
    dom_dialogTitle.textContent = "Create new question";
    dom_saveBtn.textContent = "Create";
    document.querySelector("#questionTitle").value = "";
    document.querySelector("#answerA").value = "";
    document.querySelector("#answerB").value = "";
    document.querySelector("#answerC").value = "";
    document.querySelector("#answerD").value = "";
    document.querySelector("#correctAnswer").value = "A";
  } else {
    dom_dialogTitle.textContent = "Edit question";
    dom_saveBtn.textContent = "EDIT";
    const q = questions[index];
    document.querySelector("#questionTitle").value = q.title;
    document.querySelector("#answerA").value = q.choiceA;
    document.querySelector("#answerB").value = q.choiceB;
    document.querySelector("#answerC").value = q.choiceC;
    document.querySelector("#answerD").value = q.choiceD;
    document.querySelector("#correctAnswer").value = q.correct;
  }

  show(dom_editDialog);
}

function closeEditDialog() {
  hide(dom_editDialog);
  editingIndex = -1;
}

function saveQuestion() {
  const title = document.querySelector("#questionTitle").value.trim();
  const choiceA = document.querySelector("#answerA").value.trim();
  const choiceB = document.querySelector("#answerB").value.trim();
  const choiceC = document.querySelector("#answerC").value.trim();
  const choiceD = document.querySelector("#answerD").value.trim();
  const correct = document.querySelector("#correctAnswer").value;

  if (!title || !choiceA || !choiceB || !choiceC || !choiceD) {
    alert("Please fill in all fields!");
    return;
  }

  const question = {
    title: title,
    choiceA: choiceA,
    choiceB: choiceB,
    choiceC: choiceC,
    choiceD: choiceD,
    correct: correct
  };

  if (editingIndex === -1) {
    // Add new question
    questions.push(question);
  } else {
    // Update existing question
    questions[editingIndex] = question;
  }

  closeEditDialog();
  renderQuestionsList();
}

function deleteQuestion(index) {
  if (confirm("Are you sure you want to delete this question?")) {
    questions.splice(index, 1);
    renderQuestionsList();
  }
}


hide(dom_start);
hide(dom_quiz);
hide(dom_scoreContainer);
show(dom_editView);
renderQuestionsList();






