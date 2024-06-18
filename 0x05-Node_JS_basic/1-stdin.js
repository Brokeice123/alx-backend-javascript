// Display the welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Handle user input
process.stdin.on('readable', () => {
  const name = process.stdin.read();

  if (name !== null) {
    // Trim the name and display the message
    process.stdout.write(`Your name is: ${name.toString().trim()}\n`);
    process.stdin.end(); // End the stdin stream
  }
});

// Handle end of input
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
