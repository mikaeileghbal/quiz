import Question from "./question.js";
const data = [
  {
    id: 1,
    text: "Inside which HTML element do we put the JavaScript?",
    options: ["<scripting>", "<script>", "<javascript>", "<js>"],
    answer: "B",
  },
  {
    id: 2,
    text: "Where is the correct place to insert a JavaScript?",
    options: [
      "The <body> section",
      "The <head> section",
      "Both the <head> and <body> section are correct",
      "The <title> section",
    ],
    answer: "C",
  },
  {
    id: 3,
    text: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    options: [
      "<script href='xxx.js'>",
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script value='xxx.js'>",
    ],
    answer: "C",
  },
  {
    id: 4,
    text: "How do you write 'Hello World' in an alert box?",
    options: [
      "msg('Hello World')",
      "alertBox('Hello World')",
      "msgBox('Hello World')",
      "alert('Hello World')",
    ],
    answer: "D",
  },
  {
    id: 5,
    text: "How do you create a function in JavaScript?",
    options: [
      "function:myFunction()",
      "function myFunction()",
      "function=myFunction()",
      "myFunction()",
    ],
    answer: "B",
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
