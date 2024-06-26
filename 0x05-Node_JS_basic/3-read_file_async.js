const fs = require('fs').promises;

async function countStudents(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    const students = lines.slice(1); // Skip header line
    const fieldCounts = {};
    const fieldStudents = {};

    students.forEach((student) => {
      const [firstname, lastname, age, field] = student.split(',');

      if (field) {
        if (!fieldCounts[field]) {
          fieldCounts[field] = 0;
          fieldStudents[field] = [];
        }
        fieldCounts[field] += 1;
        fieldStudents[field].push(firstname);
      }
    });

    console.log(`Number of students: ${students.length}`);

    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${fieldStudents[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
