// Welcome message
console.log('Welcome to Holberton School, what is your name?');

// Read user input
process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  console.log(`Your name is: ${input}`);

  // Exit message
  console.log('This important software is now closing');
  process.exit();
});
