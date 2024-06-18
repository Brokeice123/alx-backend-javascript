// Import 'fs' module for handling the file system
const fs = require('fs');

// Define function taking path argument that specify path to database file
function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');
    /* Parse the data and split it using '\n' and ',' as delimeters
    Store the result in an array */
    const result = [];
    data.split('\n').forEach((data) => {
      result.push(data.split(','));
    });

    // Extract and filter needed info and add 1st and 4th fields to array newFields
    result.shift();
    const newFields = [];
    result.forEach((data) => {
      newFields.push([data[0], data[3]]);
    });

    // Count, aggregate the data and create a new set
    const fields = new Set();
    newFields.forEach((item) => {
      fields.add(item[1]);
    });
    const final = {};
    fields.forEach((data) => { (final[data] = 0); });
    newFields.forEach((data) => { (final[data[1]] += 1); });
    // Display the results on the standard output
    console.log(`Number of students: ${result.filter((check) => check.length > 3).length}`);
    Object.keys(final).forEach((data) => console.log(`Number of students in ${data}: ${final[data]}. List: ${newFields.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}`));

    // Handle the error if the database is not present.
  } catch (E) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
