import Question from "./question.js";
const data = [
  {
    id: 1,
    text: "Read the following newspaper advertisement. Select the best response for each question.",
    options: [1, 2, 3, 4],
    answer: "1",
  },
  {
    id: 2,
    text: "Read the following newspaper advertisement. Select the best response for each question.",
    options: [1, 2, 3, 4],
    answer: "2",
  },
  {
    id: 3,
    text: "Read the following newspaper advertisement. Select the best response for each question.",
    options: [1, 2, 3, 4],
    answer: "4",
  },
];

function getQuestions() {
  const questions = [];

  return data.reduce((result, item) => {
    result.push(new Question(item));
    return result;
  }, questions);
}

export default getQuestions;
