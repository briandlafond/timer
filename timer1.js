const args = process.argv.slice(2); //allows entry from command line

const timer = function(entries) { 
  for (let entry of entries) { //loops each command line entry, setTimout for each entry
    setTimeout(() => {
      //process.stdout.write('\x07');
      process.stdout.write(`......${entry * 1000}`);
      process.stdout.write('\n');
    }, Number(entry * 1000)); //Number(entry) = parse entry argument into a number data type for setInterval syntax readability
  }
};

timer(args);

//using '......${entry}' because beep ('\x07') did not work.