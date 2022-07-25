import getQuestions from "./data.js";
import Quiz from "./quiz.js";

// Test application
const quiz = new Quiz(getQuestions());

console.log(quiz.isEnded());
console.log(quiz.getQuestion());
quiz.checkAnswer("1");
console.log(quiz.getScore());
quiz.nextQuestion();
console.log(quiz.isEnded());
console.log(quiz.getQuestion());
quiz.checkAnswer("2");
console.log(quiz.getScore());
quiz.nextQuestion();

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
