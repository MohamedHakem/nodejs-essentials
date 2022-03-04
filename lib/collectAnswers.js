// build the questions interface that I built before, but this time with readline module!
const readline = require("readline");
const { EventEmitter } = require("events");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// f => f is a dummy function just in case there's no callback function!
module.exports = (questions, done = (f) => f) => {
  const answers = [];
  const [firstQuestion] = questions;
  const emitter = new EventEmitter();

  const questionAnswered = (answer) => {
    emitter.emit("answer", answer); // creates an event called "answer"
    answers.push(answer);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      emitter.emit("complete", answers); // creates an event called "complete"
      done(answers);
    }
  };

  rl.question(firstQuestion, questionAnswered);

  return emitter;
};
