import Question from "./question.js";
const data = [
  {
    text: "question1",
    options: [1, 2, 3, 4],
    answer: "1",
  },
  {
    text: "question2",
    options: [1, 2, 3, 4],
    answer: "2",
  },
];

function getQuestions() {
  const questions = [];

  return data.reduce((result, next) => {
    result.push(new Question(next));
    return result;
  }, questions);
}

export default getQuestions;
