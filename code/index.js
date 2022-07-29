import getQuestions from "./data.js";
import Quiz from "./quiz.js";

window.addEventListener("DOMContentLoaded", initialize);

function initialize() {
  const quiz = new Quiz(getQuestions());

  const next = document.querySelector(".next");
  const previous = document.querySelector(".previous");
  setButtonState();

  if (!quiz.isAtEnd()) {
    loadQuestion(quiz.getQuestion());
  }

  // Add current question to the DOM
  function loadQuestion(currentQuestion) {
    const text = document.querySelector(".question-text");
    const options = document.querySelector(".question-options");

    text.textContent = currentQuestion.text;
    options.replaceChildren("");

    [].forEach.call(currentQuestion.options, (option, index) => {
      const li = document.createElement("li");
      const input = document.createElement("input");
      const label = document.createElement("label");
      input.classList.add("option");
      input.name = `option-${index + 1}`;
      input.id = `option-${index + 1}`;
      input.type = "radio";
      input.name = "options";
      input.value = `${index + 1}`;
      input.checked =
        currentQuestion.getGivenAnswer().toString() === option.toString();
      label.setAttribute("for", `option-${index + 1}`);
      label.textContent = option;
      li.appendChild(input);
      li.appendChild(label);
      options.appendChild(li);
    });

    options.addEventListener("change", setAnswerd);

    // Options change event handler
    function setAnswerd(e) {
      quiz.setGivenAnswer(e.target.value);
    }
  }

  // Get quiz score and display it on the DOM
  function showScore() {
    console.log(quiz.getScore());
  }

  // Enable or disable next and previous buttons
  function setButtonState() {
    next.disabled = quiz.isAtEnd();
    previous.disabled = quiz.isAtStart();
  }

  // Next button event handler
  function moveToNextQuestion() {
    quiz.nextQuestion();
    loadQuestion(quiz.getQuestion());
    setButtonState();
    if (quiz.isAtEnd()) showScore();
  }

  // Previous button event handler
  function moveToPreviousQuestion() {
    quiz.previousQuestion();
    loadQuestion(quiz.getQuestion());
    setButtonState();
  }

  next.addEventListener("click", moveToNextQuestion);

  previous.addEventListener("click", moveToPreviousQuestion);
}
