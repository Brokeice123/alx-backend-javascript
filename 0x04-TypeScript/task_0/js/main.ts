// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 23,
  location: "Los Angeles"
};

// Store the student objects in an array
const studentsList: Student[] = [student1, student2];

// Render the table
const table = document.createElement("table");
document.body.appendChild(table);

// Create table header
const thead = document.createElement("thead");
table.appendChild(thead);

const headerRow = document.createElement("tr");
thead.appendChild(headerRow);

const header1 = document.createElement("th");
header1.textContent = "First Name";
headerRow.appendChild(header1);

const header2 = document.createElement("th");
header2.textContent = "Location";
headerRow.appendChild(header2);

// Create table body
const tbody = document.createElement("tbody");
table.appendChild(tbody);

// Append rows for each student
studentsList.forEach(student => {
  const row = document.createElement("tr");
  tbody.appendChild(row);

  const cell1 = document.createElement("td");
  cell1.textContent = student.firstName;
  row.appendChild(cell1);

  const cell2 = document.createElement("td");
  cell2.textContent = student.location;
  row.appendChild(cell2);
});
