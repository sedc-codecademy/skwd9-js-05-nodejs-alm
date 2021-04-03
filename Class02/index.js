const math = require("./math");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.setPrompt('How old are you?>')
// rl.prompt();

// rl.on('line', age => {
//     console.log(`You are ${age} years old.`)
//     rl.close();
// }).on('close', () => {
//     console.log('Have a good day!')
//     process.exit(0);
// })

// rl.question('Where are you from?', answer => {
//     console.log(answer);
//     rl.close()
// })

let result;

rl.question("What method do you want to execute? ", method => {
  if (Object.keys(math).includes(method.trim())) {
    rl.question("What is the first number? ", num1 => {
      if (!num1.trim() || !Number(num1.trim())) {
        console.log(`Problem with getting the first number.`);
        rl.close();
      } else {
        rl.question("What is the second number? ", num2 => {
          if (!num2.trim() || !Number(num2.trim())) {
            console.log(`Problem with getting the second number.`);
            rl.close();
          } else {
            switch (method.toLowerCase()) {
              case "sum":
                result = math.sum(Number(num1), Number(num2));
                break;
              case "subtract":
                result = math.subtract(Number(num1), Number(num2));
                break;
              case "multiply":
                result = math.multiply(Number(num1), Number(num2));
                break;
              case "divide":
                result = math.divide(Number(num1), Number(num2));
                break;
              default:
                console.log("There has been an error!");
                break;
            }

            console.log("RESUlT", result);
            rl.close();
          }
        });
      }
    });
  } else {
    console.log(`Method ${method} not recognized, app stopped.`);
    rl.close();
  }
});
