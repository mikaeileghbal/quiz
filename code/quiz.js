function Quiz(questions) {
  this.questions = questions || [];

  let currentQuestionIndex = 0;
  let score = 0;

  this.getCurrentQuestionIndex = function () {
    return currentQuestionIndex;
  };

  this.setCurrentQuestionIndex = function () {
    return currentQuestionIndex++;
  };

  this.getScore = function () {
    return score;
  };

  this.incScore = function () {
    score++;
  };
}

Quiz.prototype.isEnded = function () {
  return this.getCurrentQuestionIndex() === this.questions.length;
};

Quiz.prototype.getQuestion = function () {
  return this.questions[this.getCurrentQuestionIndex()];
};

Quiz.prototype.nextQuestion = function () {
  this.setCurrentQuestionIndex();
};

Quiz.prototype.checkAnswer = function (answer) {
  if (this.questions[this.getCurrentQuestionIndex()].isCorrectAnswer(answer)) {
    this.incScore();
  }
};

export default Quiz;
