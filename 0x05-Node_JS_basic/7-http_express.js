const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

// Route for the root endpoint '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString()).then((output) => {
    const outString = output.slice(0, -1);
    const studentsArray = outString.split(' ,').map((student) => {
      const [firstName, lastName, age, field] = student.split(',');
      return {
        firstName, lastName, age, field,
      };
    });
    const csStudents = studentsArray.filter((student) => student.field.trim() === 'CS').map((student) => student.firstName);
    const sweStudents = studentsArray.filter((student) => student.field.trim() === 'SWE').map((student) => student.firstName);
    const outputStrings = `This is the list of our students\nNumber of students: ${studentsArray.length}\nNumber of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\nNumber of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`;
    res.send(outputStrings);
  })
    .catch(() => {
      res.send('Cannot load the database');
    });
});

app.listen(port);

module.exports = app;