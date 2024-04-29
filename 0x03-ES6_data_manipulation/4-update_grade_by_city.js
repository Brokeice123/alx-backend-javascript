function updateStudentGradeByCity(students, city, newGrades) {
	// Filter students by the specified city
	const filteredStudents = students.filter(student => student.location === city);

	// Map through the filtered students and update their grades based on newGrades
	const updatedStudents = filteredStudents.map(student => {
			// Find the corresponding grade in newGrades array
			const matchingGrade = newGrades.find(grade => grade.studentId === student.id);
			
			// If a matching grade is found, update the student's grade, otherwise set it to 'N/A'
			return {
					...student,
					grade: matchingGrade ? matchingGrade.grade : 'N/A'
			};
	});

	return updatedStudents;
}

export default updateStudentGradeByCity;
