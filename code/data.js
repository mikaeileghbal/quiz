import Question from "./question.js";
const data = [
  {
    id: 1,
    text: "Read the following newspaper advertisement. Select the best response for each question.",
    options: ["JavaScript", "Closure", "Dom Manipulation", "RESTFull API"],
    answer: "A",
  },
  {
    id: 2,
    text: "Read the following newspaper advertisement. Select the best response for each question.",
    options: ["JavaScript", "Closure", "Dom Manipulation", "RESTFull API"],
    answer: "B",
  },
  {
    id: 3,
    text: "Read the following newspaper advertisement. Select the best response for each question.",
    options: ["JavaScript", "Closure", "Dom Manipulation", "RESTFull API"],
    answer: "D",
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
