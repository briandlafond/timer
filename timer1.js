const args = process.argv.slice(2);

const timer = function(entries) {
  for (let entry of entries) {
    setTimeout(() => {
      process.stdout.write(`......${entry * 1000}`);
      process.stdout.write('\n');
    }, Number(entry * 1000)); //Number(entry) = parse entry argument into a number data type for setInterval syntax readability
  }
};

timer(args);