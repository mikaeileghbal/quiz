function Quiz(questions) {
  this.questions = questions || [];

  let currentQuestionIndex = 0;
  let score = 0;

  this.getCurrentQuestionIndex = function () {
    return currentQuestionIndex;
  };

  this.setCurrentQuestionIndexNext = function () {
    currentQuestionIndex++;
  };

  this.setCurrentQuestionIndexPrevious = function () {
    currentQuestionIndex--;
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
  this.setCurrentQuestionIndexNext();
};

Quiz.prototype.previousQuestion = function () {
  this.setCurrentQuestionIndexPrevious();
};

Quiz.prototype.checkAnswer = function (answer) {
  console.log(answer);
  if (this.questions[this.getCurrentQuestionIndex()].isCorrectAnswer(answer)) {
    this.incScore();
  }
};

Quiz.prototype.isAnswered = function (answered) {
  this.questions[this.getCurrentQuestionIndex()].setAnswered(answered);
};

Quiz.prototype.givenAnswer = function () {
  return this.questions[this.getCurrentQuestionIndex()].getGivenAnswer();
};

export default Quiz;
