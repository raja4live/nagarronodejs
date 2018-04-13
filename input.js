const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Hello  ${answer}`);

  rl.close();
});