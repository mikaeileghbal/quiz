import getQuestions from "./data.js";
import Quiz from "./quiz.js";

// Test application
// const quiz = new Quiz(getQuestions());

// console.log(quiz.isEnded());
// console.log(quiz.getQuestion());
// quiz.checkAnswer("1");
// console.log(quiz.getScore());
// quiz.nextQuestion();
// console.log(quiz.isEnded());
// console.log(quiz.getQuestion());
// quiz.checkAnswer("2");
// console.log(quiz.getScore());
// quiz.nextQuestion();

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
  const quiz = new Quiz(getQuestions());

  const next = document.querySelector(".next");
  const previous = document.querySelector(".previous");

  if (!quiz.isEnded()) {
    console.log("is not ended");

    loadQuestion(quiz.getQuestion());
  }

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
      input.checked = currentQuestion.getGivenAnswer() === index + 1;

      label.setAttribute("for", `option-${index + 1}`);
      label.textContent = option;

      li.appendChild(input);
      li.appendChild(label);

      options.appendChild(li);
    });

    function nextQuestion() {
      if (!quiz.isEnded()) {
        quiz.nextQuestion();
        loadQuestion(quiz.getQuestion());
      } else {
      }
    }

    function previousQuestion() {
      quiz.previousQuestion();
      loadQuestion(quiz.getQuestion());
    }

    function setAnswerd(e) {
      console.log(e.target.checked);
      e.target.checked ? quiz.isAnswered(true) : quiz.isAnswered(false);
      quiz.checkAnswer(e.target.value);
      document.querySelector(".score").textContent = quiz.getScore().toString();
    }

    next.addEventListener("click", nextQuestion);

    previous.addEventListener("click", previousQuestion);

    options.addEventListener("change", setAnswerd);
  }
}

// Before sepetating in modules and files
// // Data
// function getQuestions() {
//   const questions = [
//     new Question("test", [1, 2, 3, 4], "2"),
//     new Question("test2", [1, 2, 3, 4], "1"),
//   ];
//   return questions;
// }

// Question constructor
// const Question = (function () {
//   function Question(text, options, answer) {
//     this.text = text;
//     this.options = options;
//     this.answer = answer;
//   }

//   Question.prototype.isCorrectAnswer = function (answer) {
//     console.log("in question:", answer);
//     console.log("in question object:", this.answer);
//     console.log("isCorrect: ", this.answer === answer);
//     return this.answer === answer;
//   };

//   return Question;
// })();

// Quiz constructor
// const Quiz = (function () {
//   function Quiz(questions) {
//     this.questions = questions || [];
//     let currentQuestionIndex = 0;
//     let score = 0;

//     this.getCurrentQuestionIndex = function () {
//       return currentQuestionIndex;
//     };

//     this.setCurrentQuestionIndex = function () {
//       return currentQuestionIndex++;
//     };

//     this.getScore = function () {
//       return score;
//     };

//     this.incScore = function () {
//       score++;
//     };
//   }

//   Quiz.prototype.isEnded = function () {
//     return this.getCurrentQuestionIndex() === this.questions.length;
//   };

//   Quiz.prototype.getQuestion = function () {
//     return this.questions[this.getCurrentQuestionIndex()];
//   };

//   Quiz.prototype.nextQuestion = function () {
//     this.setCurrentQuestionIndex();
//   };

//   Quiz.prototype.checkAnswer = function (answer) {
//     console.log("in checkAnswer: ", answer);
//     console.log(this.questions[this.getCurrentQuestionIndex()]);
//     if (
//       this.questions[this.getCurrentQuestionIndex()].isCorrectAnswer(answer)
//     ) {
//       this.incScore();
//     }
//   };

//   return Quiz;
// })();
