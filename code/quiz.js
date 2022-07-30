function Quiz(questions) {
  this.currentQuestionIndex = 0;
  this.score = 0;
  this.questions = questions || [];
  this.completed = false;
}

Quiz.prototype.isAtEnd = function () {
  return this.currentQuestionIndex === this.questions.length - 1;
};

Quiz.prototype.isAtStart = function () {
  return this.currentQuestionIndex === 0;
};

Quiz.prototype.getQuestion = function () {
  return this.questions[this.currentQuestionIndex];
};

Quiz.prototype.nextQuestion = function () {
  if (!this.isAtEnd()) {
    this.currentQuestionIndex++;
  } else {
    this.completed = true;
  }
};

Quiz.prototype.previousQuestion = function () {
  this.completed = false;
  if (!this.isAtStart()) this.currentQuestionIndex--;
};

Quiz.prototype.givenAnswer = function () {
  return this.questions[this.currentQuestionIndex].getGivenAnswer();
};

Quiz.prototype.setGivenAnswer = function (asnwer) {
  this.questions[this.currentQuestionIndex].givenAnswer = asnwer;
};

Quiz.prototype.getIndex = function () {
  return this.currentQuestionIndex;
};

Quiz.prototype.getScore = function () {
  this.score = 0;
  this.questions.forEach((question) => {
    if (question.isCorrectAnswer()) {
      this.score++;
    }
  });
  return this.score;
};

Quiz.prototype.progress = function () {
  return Math.round(
    ((this.currentQuestionIndex + 1) / this.questions.length) * 100
  );
};

Quiz.prototype.isCompleted = function () {
  return this.completed;
};

Quiz.prototype.getLength = function () {
  return this.questions.length;
};

export default Quiz;
