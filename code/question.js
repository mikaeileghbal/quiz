function Question({ text, options = [], answer }) {
  this.text = text;
  this.options = options;
  this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (answer) {
  console.log("in question:", answer);
  console.log("in question object:", this.answer);
  console.log("isCorrect: ", this.answer === answer);
  return this.answer === answer;
};

export default Question;
