function Question({ text, options = [], answer }) {
  this.text = text;
  this.options = options;
  this.answer = answer;
  this.givenAnswer = "";
}

Question.prototype.isCorrectAnswer = function () {
  if (this.givenAnswer) return this.answer === this.givenAnswer;
};

Question.prototype.getGivenAnswer = function () {
  return this.givenAnswer;
};

export default Question;
