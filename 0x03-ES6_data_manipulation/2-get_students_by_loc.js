function getStudentsByLocation(students, city) {
	// Filter the array of students to get only those located in the specified city
	return students.filter(student => student.location === city);
}

export default getStudentsByLocation;
