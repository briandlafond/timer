const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const args = process.argv.slice(2); //allows entry from command line

const timer = function(entries) {
  rl.question('How many seconds would you like your alarm set? ', (time) => { //(callback function)
    console.log(`Setting Timer For ${time} Seconds`);
    setTimeout(() => {
      process.stdout.write(`......${time * 1000} \n`);
      }, Number(time * 1000)); //Number(entry) = parse entry argument into a number data type for setInterval syntax readability
      rl.close();
    });
};

timer(args);
