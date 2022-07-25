function Question({ text, options = [], answer }) {
  this.text = text;
  this.options = options;
  this.answer = answer;
  this.answered = false;
  this.givenAnswer = 1;
}

Question.prototype.isCorrectAnswer = function (answer) {
  console.log("in question:", answer);
  console.log("in question object:", this.answer);
  console.log("isCorrect: ", this.answer === answer);
  return this.answer === answer;
};

Question.prototype.setAnswered = function (answered) {
  this.answered = answered;
};

Question.prototype.getGivenAnswer = function () {
  return this.givenAnswer;
};
export default Question;
