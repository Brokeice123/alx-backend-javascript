// Welcome message
console.log('Welcome to Holberton School, what is your name?');

// Read user input
process.stdin.on('readable', () => {
  const name = process.stdin.read();

  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

// Close message
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
